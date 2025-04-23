import type { Question } from "@/lib/types";
import { skills } from "@/lib/data";

export class AdaptiveQuestionSelector {
    questionPool: Question[];
    userAnswers: Record<string, string>;
    askedQuestions: Set<string>;
    currentSkillProbabilities: Record<string, number>;
    skippedQuestions: Set<string>;
    firstQuestionRandomization: boolean;
    questionHistory: string[];
    recentlyUsedSkills: Set<string>;

    constructor(
        questionPool: Question[],
        userAnswers: Record<string, string> = {},
        preferences?: Record<string, number>
    ) {
        this.questionPool = questionPool;
        this.userAnswers = userAnswers;
        this.askedQuestions = new Set();
        this.skippedQuestions = new Set();

        // Inisialisasi probabilitas dengan preferensi jika ada
        if (preferences && Object.keys(preferences).length > 0) {
            this.currentSkillProbabilities =
                this.initializeSkillProbabilitiesWithPreferences(preferences);
        } else {
            this.currentSkillProbabilities =
                this.initializeSkillProbabilities();
        }

        this.firstQuestionRandomization = true;
        this.questionHistory = [];
        this.recentlyUsedSkills = new Set<string>();
    }

    // Initialize initial probabilities for all skills
    initializeSkillProbabilities(): Record<string, number> {
        const probabilities: Record<string, number> = {};

        // Extract all unique skill IDs from questionPool
        this.questionPool.forEach((question) => {
            Object.keys(question.linked_skills).forEach((skillId) => {
                probabilities[skillId] = 0.5; // Initial neutral value
            });
        });

        return probabilities;
    }

    // Initialize probabilities with user preferences
    initializeSkillProbabilitiesWithPreferences(
        preferences: Record<string, number>
    ): Record<string, number> {
        // Mulai dengan probabilitas default
        const probabilities = this.initializeSkillProbabilities();

        // Dapatkan semua skill dan sphere mereka
        const skillSpheres: Record<string, number> = {};

        // Temukan sphere untuk setiap skill
        skills.forEach((skill) => {
            skillSpheres[skill.id] = skill.sphere_id;
        });

        // Sesuaikan probabilitas berdasarkan preferensi sphere
        Object.entries(probabilities).forEach(([skillId, _]) => {
            const sphereId = skillSpheres[skillId];
            if (sphereId !== undefined) {
                const spherePreference = preferences[sphereId.toString()];
                if (spherePreference !== undefined) {
                    // Sesuaikan probabilitas (0.5 adalah nilai netral)
                    // Gunakan adjustment factor 0.3 untuk menghindari bias yang terlalu kuat
                    probabilities[skillId] =
                        0.5 + (spherePreference - 0.5) * 0.3;

                    // Pastikan nilai tetap dalam batas yang wajar
                    probabilities[skillId] = Math.max(
                        0.3,
                        Math.min(0.7, probabilities[skillId])
                    );
                }
            }
        });

        return probabilities;
    }

    // Update probabilities based on answer
    updateProbabilities(questionId: string, answerId: string): void {
        const question = this.questionPool.find((q) => q.id === questionId);
        if (!question) return;

        const answer = question.answer_options.find((a) => a.id === answerId);
        if (!answer) return;

        // Update probabilities for each linked skill
        Object.entries(question.linked_skills).forEach(
            ([skillId, relevance]) => {
                const currentProb =
                    this.currentSkillProbabilities[skillId] || 0.5;
                const answerWeight = answer.weight;

                // Improved Bayesian formula for probability update with confidence adjustment
                // Adjust the impact based on question's discriminative value
                const impactFactor = question.discriminative_value || 0.5;
                const weightedRelevance = relevance * impactFactor;

                // Calculate new probability with more balanced formula
                const newProb =
                    (currentProb * (answerWeight * weightedRelevance + 0.5)) /
                    (currentProb * (answerWeight * weightedRelevance + 0.5) +
                        (1 - currentProb) *
                            (1 - answerWeight * weightedRelevance + 0.5));

                // Ensure probability stays within bounds
                this.currentSkillProbabilities[skillId] = Math.max(
                    0.1,
                    Math.min(0.9, newProb)
                );
            }
        );

        this.askedQuestions.add(questionId);
        this.userAnswers[questionId] = answerId;

        // Penalti untuk pertanyaan yang terkait dengan skill yang sama
        // Ini akan membantu diversifikasi pertanyaan berikutnya
        this.applyDiversityPenalty(question);
    }

    // Menerapkan penalti pada pertanyaan yang terkait dengan skill yang sama
    // untuk meningkatkan diversifikasi pertanyaan
    private applyDiversityPenalty(answeredQuestion: Question): void {
        // Dapatkan skill yang terkait dengan pertanyaan yang baru dijawab
        const relatedSkills = Object.keys(answeredQuestion.linked_skills);

        // Tandai skill yang baru saja digunakan dalam pertanyaan
        relatedSkills.forEach((skillId) => {
            // Simpan skill yang baru saja digunakan dalam pertanyaan terakhir
            if (!this.recentlyUsedSkills)
                this.recentlyUsedSkills = new Set<string>();
            this.recentlyUsedSkills.add(skillId);

            // Batasi ukuran set (hanya simpan 5 skill terakhir)
            if (this.recentlyUsedSkills.size > 5) {
                const oldestSkill = Array.from(this.recentlyUsedSkills)[0];
                this.recentlyUsedSkills.delete(oldestSkill);
            }
        });
    }

    // Calculate Information Gain for a specific question
    calculateInformationGain(question: Question): number {
        // If question was already asked or skipped, return minimal gain
        if (
            this.askedQuestions.has(question.id) ||
            this.skippedQuestions.has(question.id)
        ) {
            return -1;
        }

        // Calculate entropy before the question
        const priorEntropy = this.calculateEntropy(
            this.currentSkillProbabilities
        );

        // Estimate entropy after asking for each possible answer
        let expectedPosteriorEntropy = 0;

        question.answer_options.forEach((answer) => {
            // Clone current probabilities
            const probClone = { ...this.currentSkillProbabilities };

            // Simulate probability update for this answer
            Object.entries(question.linked_skills).forEach(
                ([skillId, relevance]) => {
                    const currentProb = probClone[skillId] || 0.5;
                    const answerWeight = answer.weight;

                    // Use the same improved formula as in updateProbabilities
                    const impactFactor = question.discriminative_value || 0.5;
                    const weightedRelevance = relevance * impactFactor;

                    const newProb =
                        (currentProb *
                            (answerWeight * weightedRelevance + 0.5)) /
                        (currentProb *
                            (answerWeight * weightedRelevance + 0.5) +
                            (1 - currentProb) *
                                (1 - answerWeight * weightedRelevance + 0.5));

                    probClone[skillId] = Math.max(0.1, Math.min(0.9, newProb));
                }
            );

            // Calculate entropy for this probability distribution
            const posteriorEntropy = this.calculateEntropy(probClone);

            // Assume uniform distribution for answers (can be optimized)
            const answerProbability = 1 / question.answer_options.length;

            expectedPosteriorEntropy += answerProbability * posteriorEntropy;
        });

        // Information gain is the reduction in entropy
        // Multiply by discriminative value to prioritize more discriminative questions
        let infoGain =
            (priorEntropy - expectedPosteriorEntropy) *
            (question.discriminative_value || 0.5);

        // Apply diversity bonus/penalty based on recently used skills
        if (this.recentlyUsedSkills.size > 0 && this.askedQuestions.size > 0) {
            // Check if this question uses skills that were recently used
            const questionSkills = Object.keys(question.linked_skills);
            const overlapCount = questionSkills.filter((skill) =>
                this.recentlyUsedSkills.has(skill)
            ).length;

            // Calculate diversity factor (penalize questions with many overlapping skills)
            const overlapRatio = overlapCount / questionSkills.length;
            const diversityFactor = 1 - overlapRatio * 0.3; // Max 30% penalty for complete overlap

            // Apply diversity factor to information gain
            infoGain *= diversityFactor;
        }

        return infoGain;
    }

    // Calculate entropy of a probability distribution
    calculateEntropy(probabilities: Record<string, number>): number {
        let entropy = 0;
        Object.values(probabilities).forEach((p) => {
            if (p > 0 && p < 1) {
                entropy -= p * Math.log2(p) + (1 - p) * Math.log2(1 - p);
            }
        });
        return entropy;
    }

    // Select the next question with highest information gain
    selectNextQuestion(
        maxQuestions = 25, // Ditingkatkan dari 20 menjadi 25
        skipCurrent = false,
        currentQuestionId?: string
    ): Question | null {
        if (this.askedQuestions.size >= maxQuestions) {
            return null; // Stop if we've reached the maximum number of questions
        }

        let bestQuestion: Question | null = null;
        let highestInfoGain = -1;

        // If we're skipping the current question, add it to skipped set
        if (skipCurrent && currentQuestionId) {
            this.skippedQuestions.add(currentQuestionId);
        }

        // Randomisasi untuk pertanyaan pertama
        if (this.askedQuestions.size === 0 && this.firstQuestionRandomization) {
            // Pilih dari top 5 pertanyaan dengan information gain tertinggi
            const topQuestions = this.questionPool
                .filter(
                    (question) =>
                        !this.askedQuestions.has(question.id) &&
                        !this.skippedQuestions.has(question.id)
                )
                .map((question) => ({
                    question,
                    infoGain: this.calculateInformationGain(question),
                }))
                .sort((a, b) => b.infoGain - a.infoGain)
                .slice(0, 5)
                .map((item) => item.question);

            if (topQuestions.length > 0) {
                // Pilih secara acak dari top 5
                const randomIndex = Math.floor(
                    Math.random() * topQuestions.length
                );
                bestQuestion = topQuestions[randomIndex];
                return bestQuestion;
            }
        }

        // Find the question with the highest information gain
        this.questionPool.forEach((question) => {
            if (
                this.askedQuestions.has(question.id) ||
                this.skippedQuestions.has(question.id)
            )
                return;

            const infoGain = this.calculateInformationGain(question);
            if (infoGain > highestInfoGain) {
                highestInfoGain = infoGain;
                bestQuestion = question;
            }
        });

        // If no question found with positive info gain, try to find any unasked question
        if (!bestQuestion) {
            for (const question of this.questionPool) {
                if (
                    !this.askedQuestions.has(question.id) &&
                    !this.skippedQuestions.has(question.id)
                ) {
                    bestQuestion = question;
                    break;
                }
            }
        }

        // Catat pertanyaan yang dipilih dalam history
        if (bestQuestion) {
            this.questionHistory.push(bestQuestion.id);
        }

        return bestQuestion;
    }

    // Get predicted skills and confidence scores
    getPredictedSkills(topN = 5): Array<{
        skillId: string;
        probability: number;
        confidenceScore: number;
    }> {
        // Sort skills by probability
        const sortedSkills = Object.entries(this.currentSkillProbabilities)
            .sort((a, b) => b[1] - a[1])
            .slice(0, topN)
            .map(([skillId, probability]) => ({
                skillId,
                probability,
                confidenceScore: this.calculateConfidence(probability),
            }));

        return sortedSkills;
    }

    // Calculate confidence score based on probability and number of questions
    calculateConfidence(probability: number): number {
        // Improved confidence calculation
        // Factor in both the number of questions asked and the extremity of the probability
        // Increase base confidence by adjusting the divisor (from 10 to 8)
        const questionFactor = Math.min(this.askedQuestions.size / 8, 1);

        // Probability factor is higher when probability is closer to 0 or 1
        // Increase exponent for more pronounced effect (from 1.5 to 1.8)
        const probFactor = Math.pow(Math.abs(probability - 0.5) * 2, 1.8);

        // Combine factors with higher weight on question count for reliability
        // Adjust weights to increase overall confidence (from 0.4/0.6 to 0.45/0.55)
        return Math.min(probFactor * 0.45 + questionFactor * 0.55, 1.0);
    }

    // Get overall confidence score for the assessment
    getOverallConfidence(): number {
        // Calculate average confidence across top skills
        const topSkills = this.getPredictedSkills(5);
        if (topSkills.length === 0) return 0;

        // Weight by question count and skill probability spread
        // Adjust to reach max confidence at 20 questions instead of 15
        const questionCoverage = Math.min(this.askedQuestions.size / 20, 1);

        // Calculate skill spread with improved formula
        const skillSpread = this.calculateSkillSpread();

        // Calculate average confidence of top skills
        const avgConfidence =
            topSkills.reduce((sum, skill) => sum + skill.confidenceScore, 0) /
            topSkills.length;

        // Combine metrics with adjusted weights to boost overall confidence
        // Add avgConfidence as a factor to increase overall confidence
        return Math.min(
            questionCoverage * 0.6 + skillSpread * 0.25 + avgConfidence * 0.15,
            1.0
        );
    }

    // Check if we've reached high confidence threshold
    hasReachedHighConfidence(threshold = 0.88): boolean {
        // Ditingkatkan dari 0.85 menjadi 0.88
        // Require minimum number of questions
        if (this.askedQuestions.size < 8) return false;

        // Get overall confidence
        const confidence = this.getOverallConfidence();

        // Get top skills
        const topSkills = this.getPredictedSkills(5);
        if (topSkills.length < 3) return false;

        // Calculate probability difference between top skills
        const probabilityDifference =
            topSkills[0].probability - topSkills[2].probability;

        // Return true if confidence is high and there's a clear distinction between skills
        return confidence >= threshold && probabilityDifference > 0.15;
    }

    // Calculate how well-distributed the skill probabilities are
    private calculateSkillSpread(): number {
        const probabilities = Object.values(this.currentSkillProbabilities);
        if (probabilities.length === 0) return 0;

        // Sort probabilities
        const sorted = [...probabilities].sort((a, b) => b - a);

        // Get top 5 probabilities if available
        const topN = Math.min(5, sorted.length);
        const topProbs = sorted.slice(0, topN);

        // Calculate difference between top and middle probabilities
        // Higher difference means more confident distinction between skills
        const topProb = topProbs[0] || 0.5;
        const midProb = sorted[Math.floor(sorted.length / 2)] || 0.5;

        // Calculate variance among top probabilities for better distinction
        const avgTopProb = topProbs.reduce((sum, p) => sum + p, 0) / topN;
        const variance =
            topProbs.reduce((sum, p) => sum + Math.pow(p - avgTopProb, 2), 0) /
            topN;

        // Combine metrics: difference between top and middle + variance among top skills
        // Multiply by 2.5 instead of 2 to increase the spread value
        return Math.min(Math.abs(topProb - midProb) * 2.5 + variance * 3, 1);
    }
}
