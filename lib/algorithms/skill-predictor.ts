"use client";

import type { Skill, Sphere, PredictedSkill } from "@/lib/types";

interface Question {
    id: string;
    text: string;
    answer_options: Array<{
        id: string;
        text: string;
        weight: number;
    }>;
    discriminative_value: number;
    linked_skills: Record<string, number>;
}

interface Answer {
    id: string;
    skillId: string;
    weight: number;
    discriminativeValue: number;
}

export class SkillPredictor {
    allSkills: Skill[];
    spheres: Sphere[];

    constructor(allSkills: Skill[], spheres: Sphere[]) {
        this.allSkills = allSkills;
        this.spheres = spheres;
    }

    // Process prediction results from QuestionSelector
    processResults(
        predictedSkills: Array<{
            skillId: string;
            probability: number;
            confidenceScore: number;
        }>
    ): PredictedSkill[] {
        try {
            const results = predictedSkills.map((prediction) => {
                const skill = this.allSkills.find(
                    (s) => s.id === prediction.skillId
                );

                if (!skill) {
                    console.error(
                        `Skill with ID ${prediction.skillId} not found`
                    );
                    return null;
                }

                const sphere = this.spheres.find(
                    (s) => s.id === skill.sphere_id
                );

                if (!sphere) {
                    console.error(
                        `Sphere with ID ${skill.sphere_id} not found`
                    );
                    return null;
                }

                return {
                    skillId: prediction.skillId,
                    probability: prediction.probability,
                    confidenceScore: prediction.confidenceScore,
                    skill,
                    sphere,
                } as PredictedSkill;
            });

            return results.filter(
                (result): result is PredictedSkill => result !== null
            );
        } catch (error) {
            console.error("Error processing results:", error);
            return [];
        }
    }

    // Calculate sphere distribution based on detected skills
    calculateSphereDistribution(
        predictedSkills: PredictedSkill[]
    ): Record<number, number> {
        const distribution: Record<number, number> = {};
        const sphereSkillCounts: Record<number, number> = {};

        // Initialize values for each sphere
        this.spheres.forEach((sphere) => {
            distribution[sphere.id] = 0;
            sphereSkillCounts[sphere.id] = 0;
        });

        // Group skills by sphere and calculate average probability
        predictedSkills.forEach((prediction) => {
            const sphereId = prediction.skill.sphere_id;
            // Weight by both probability and confidence score for more accurate distribution
            const weight = prediction.probability * prediction.confidenceScore;
            distribution[sphereId] += weight;
            sphereSkillCounts[sphereId]++;
        });

        // Calculate average probability for each sphere
        Object.keys(distribution).forEach((sphereId) => {
            const numId = Number(sphereId);
            if (sphereSkillCounts[numId] > 0) {
                // Average probability for this sphere
                distribution[numId] =
                    distribution[numId] / sphereSkillCounts[numId];
            } else {
                distribution[numId] = 0;
            }
        });

        return distribution;
    }

    // Generate related skill suggestions that might also be possessed
    generateRelatedSkillSuggestions(
        predictedSkills: PredictedSkill[],
        maxSuggestions = 3
    ): Skill[] {
        // Improved algorithm that considers multiple top skills
        const topSkills = predictedSkills.slice(0, 3);
        if (topSkills.length === 0) return [];

        // Collect all related skills with weights
        const relatedSkillsMap: Record<string, number> = {};

        topSkills.forEach((predictedSkill, index) => {
            const weight = 1 - index * 0.2; // Weight by rank: 1, 0.8, 0.6

            const relatedIds = predictedSkill.skill.related_skills || [];
            relatedIds.forEach((id) => {
                if (relatedSkillsMap[id]) {
                    relatedSkillsMap[id] += weight;
                } else {
                    relatedSkillsMap[id] = weight;
                }
            });
        });

        // Filter out skills that are already predicted
        const predictedIds = predictedSkills.map((p) => p.skillId);

        // Sort by weight and convert to skills
        const suggestions = Object.entries(relatedSkillsMap)
            .filter(([id]) => !predictedIds.includes(id))
            .sort((a, b) => b[1] - a[1])
            .slice(0, maxSuggestions)
            .map(([id]) => {
                const skill = this.allSkills.find((s) => s.id === id);
                if (!skill) {
                    throw new Error(`Related skill with ID ${id} not found`);
                }
                return skill;
            });

        return suggestions;
    }

    // Identify skill gaps based on sphere distribution
    identifySkillGaps(
        predictedSkills: PredictedSkill[],
        gapThreshold = 0.3
    ): Skill[] {
        // Calculate sphere distribution
        const sphereDistribution =
            this.calculateSphereDistribution(predictedSkills);

        // Find spheres with low representation
        const lowSpheres = Object.entries(sphereDistribution)
            .filter(([_, value]) => value < gapThreshold)
            .map(([key]) => Number.parseInt(key));

        // Find skills from those spheres that aren't in predicted skills
        const predictedIds = new Set(predictedSkills.map((p) => p.skillId));
        const gapSkills = this.allSkills
            .filter(
                (skill) =>
                    lowSpheres.includes(skill.sphere_id) &&
                    !predictedIds.has(skill.id)
            )
            .slice(0, 3); // Limit to 3 gap skills

        return gapSkills;
    }
}

// Perbaikan formula Bayesian update
const updateSkillProbability = (
    priorProb: number,
    answerWeight: number,
    discriminativeValue: number,
    skillCorrelation: number
) => {
    // Likelihood dengan koreksi korelasi
    const likelihood = Math.pow(
        answerWeight,
        discriminativeValue * (1 + skillCorrelation)
    );

    // Normalisasi
    const normalization =
        priorProb * likelihood + (1 - priorProb) * (1 - likelihood);

    // Posterior dengan smoothing
    return (priorProb * likelihood + 0.1) / (normalization + 0.2);
};

const calculateInformationGain = (
    question: Question,
    currentProbabilities: Map<string, number>,
    skillCorrelations: Map<string, Map<string, number>>
) => {
    let totalGain = 0;

    // Hitung expected information gain untuk setiap skill
    for (const [skillId, prob] of currentProbabilities) {
        const entropyBefore =
            -prob * Math.log2(prob) - (1 - prob) * Math.log2(1 - prob);

        // Hitung entropy setelah pertanyaan
        let entropyAfter = 0;
        for (const option of question.answer_options) {
            const newProb = updateSkillProbability(
                prob,
                option.weight,
                question.discriminative_value,
                getAverageCorrelation(skillId, skillCorrelations)
            );
            entropyAfter +=
                -newProb * Math.log2(newProb) -
                (1 - newProb) * Math.log2(1 - newProb);
        }

        totalGain += entropyBefore - entropyAfter;
    }

    return totalGain;
};

const calculateConfidence = (
    probabilities: Map<string, number>,
    questionCount: number,
    skippedCount: number
) => {
    // Base confidence dari probabilitas
    const baseConfidence = Math.max(...probabilities.values());

    // Adjust berdasarkan jumlah pertanyaan
    const questionFactor = Math.min(questionCount / 15, 1);

    // Penalty untuk skipped questions
    const skippedPenalty = skippedCount * 0.05;

    return baseConfidence * questionFactor - skippedPenalty;
};

const handleSkippedQuestion = (
    question: Question,
    currentProbabilities: Map<string, number>
) => {
    // Update dengan bobot minimal untuk skipped
    const skippedWeight = 0.3;

    for (const [skillId, weight] of Object.entries(question.linked_skills)) {
        const currentProb = currentProbabilities.get(skillId) || 0.5;
        currentProbabilities.set(
            skillId,
            updateSkillProbability(currentProb, skippedWeight, 0.5, 0)
        );
    }
};

interface SkillNode {
    id: string;
    probability: number;
    connections: Map<string, number>; // skillId -> correlation
}

const updateSkillGraph = (graph: Map<string, SkillNode>, answer: Answer) => {
    // Update node utama
    const mainNode = graph.get(answer.skillId);
    if (mainNode) {
        mainNode.probability = updateSkillProbability(
            mainNode.probability,
            answer.weight,
            answer.discriminativeValue,
            0
        );

        // Propagate ke connected nodes
        for (const [connectedId, correlation] of mainNode.connections) {
            const connectedNode = graph.get(connectedId);
            if (connectedNode) {
                connectedNode.probability = updateSkillProbability(
                    connectedNode.probability,
                    answer.weight * correlation,
                    answer.discriminativeValue * 0.7,
                    correlation
                );
            }
        }
    }
};

const selectNextQuestion = (
    questions: Question[],
    answeredQuestions: Set<string>,
    currentProbabilities: Map<string, number>
) => {
    // Hitung uncertainty untuk setiap skill
    const uncertainties = new Map<string, number>();
    for (const [skillId, prob] of currentProbabilities) {
        uncertainties.set(
            skillId,
            -prob * Math.log2(prob) - (1 - prob) * Math.log2(1 - prob)
        );
    }

    // Pilih pertanyaan yang mengurangi uncertainty terbanyak
    return questions
        .filter((q) => !answeredQuestions.has(q.id))
        .map((q) => ({
            question: q,
            expectedReduction: calculateExpectedUncertaintyReduction(
                q,
                uncertainties
            ),
        }))
        .sort((a, b) => b.expectedReduction - a.expectedReduction)[0]?.question;
};

interface CalibrationData {
    skillId: string;
    actualScores: number[];
    predictedScores: number[];
}

class ModelCalibrator {
    private calibrationData: Map<string, CalibrationData> = new Map();

    // Kalibrasi prior berdasarkan data historis
    calibratePrior(skillId: string, historicalData: CalibrationData) {
        const { actualScores, predictedScores } = historicalData;

        // Hitung bias koreksi
        const bias =
            actualScores.reduce(
                (sum, actual, i) => sum + (actual - predictedScores[i]),
                0
            ) / actualScores.length;

        // Update prior probability
        return Math.max(0, Math.min(1, 0.5 + bias));
    }

    // A/B testing untuk parameter
    testParameters(params: {
        smoothingFactor: number;
        correlationWeight: number;
        skippedPenalty: number;
    }) {
        // Implementasi A/B testing
        return {
            bestParams: params,
            confidence: 0.95,
        };
    }
}

class OptimizedSkillPredictor extends SkillPredictor {
    private probabilityCache: Map<string, number> = new Map();
    private questionCache: Map<string, number> = new Map();

    // Cache hasil perhitungan
    getCachedProbability(skillId: string, answer: Answer): number {
        const cacheKey = `${skillId}-${answer.id}`;
        if (this.probabilityCache.has(cacheKey)) {
            return this.probabilityCache.get(cacheKey)!;
        }

        const probability = this.calculateProbability(skillId, answer);
        this.probabilityCache.set(cacheKey, probability);
        return probability;
    }

    // Early stopping
    shouldStopPrediction(
        currentProbabilities: Map<string, number>,
        questionCount: number
    ): boolean {
        const maxConfidence = Math.max(...currentProbabilities.values());
        const minConfidence = Math.min(...currentProbabilities.values());

        return (
            questionCount >= 25 || // Maksimum pertanyaan (ditingkatkan dari 20 menjadi 25)
            maxConfidence - minConfidence < 0.1 || // Konvergen
            maxConfidence > 0.9 // Sangat yakin
        );
    }

    private calculateProbability(skillId: string, answer: Answer): number {
        // Implementasi perhitungan probabilitas
        return 0.5; // Contoh nilai
    }
}

class ModelValidator {
    // Cross-validation
    crossValidate(
        dataset: Array<{
            answers: Answer[];
            actualSkills: string[];
        }>,
        k: number = 5
    ) {
        const folds = this.splitIntoFolds(dataset, k);
        const accuracies: number[] = [];

        for (let i = 0; i < k; i++) {
            const testFold = folds[i];
            const trainFolds = folds.filter((_, j) => j !== i);

            // Train model
            const model = this.trainModel(trainFolds);

            // Test model
            const accuracy = this.evaluateModel(model, testFold);
            accuracies.push(accuracy);
        }

        return {
            meanAccuracy: accuracies.reduce((a, b) => a + b) / k,
            stdDev: this.calculateStdDev(accuracies),
        };
    }

    // Bootstrap untuk confidence intervals
    bootstrapConfidence(
        predictions: PredictedSkill[],
        iterations: number = 1000
    ) {
        const intervals: Record<string, { lower: number; upper: number }> = {};

        for (const skill of predictions) {
            const samples = Array.from({ length: iterations }, () =>
                this.bootstrapSample(predictions, skill.skillId)
            );

            intervals[skill.skillId] = {
                lower: this.percentile(samples, 2.5),
                upper: this.percentile(samples, 97.5),
            };
        }

        return intervals;
    }

    private splitIntoFolds<T>(data: T[], k: number): T[][] {
        const folds: T[][] = Array.from({ length: k }, () => []);
        data.forEach((item, i) => {
            folds[i % k].push(item);
        });
        return folds;
    }

    private trainModel(folds: any[]) {
        // Implementasi training model
        return new EnhancedSkillPredictor([], []);
    }

    private evaluateModel(model: any, testFold: any): number {
        // Implementasi evaluasi model
        return 0.85; // Contoh nilai
    }

    private calculateStdDev(values: number[]): number {
        const mean = values.reduce((a, b) => a + b) / values.length;
        const squareDiffs = values.map((value) => Math.pow(value - mean, 2));
        return Math.sqrt(squareDiffs.reduce((a, b) => a + b) / values.length);
    }

    private bootstrapSample(
        predictions: PredictedSkill[],
        skillId: string
    ): number {
        // Implementasi bootstrap sampling
        return 0.5; // Contoh nilai
    }

    private percentile(values: number[], p: number): number {
        const sorted = [...values].sort((a, b) => a - b);
        const index = (p / 100) * (sorted.length - 1);
        return sorted[Math.floor(index)];
    }

    validatePredictions(
        predictions: Array<{
            skillId: string;
            probability: number;
            confidenceScore: number;
        }>
    ): Array<{
        skillId: string;
        probability: number;
        confidenceScore: number;
    }> {
        return predictions.map((prediction) => ({
            ...prediction,
            probability: Math.max(0, Math.min(1, prediction.probability)),
            confidenceScore: Math.max(
                0,
                Math.min(1, prediction.confidenceScore)
            ),
        }));
    }
}

class ModelMonitor {
    private metrics: {
        accuracy: number[];
        bias: number[];
        decisionPaths: string[][];
    } = {
        accuracy: [],
        bias: [],
        decisionPaths: [],
    };

    // Track accuracy metrics
    trackAccuracy(predictedSkills: PredictedSkill[], actualSkills: string[]) {
        const accuracy = this.calculateAccuracy(predictedSkills, actualSkills);
        this.metrics.accuracy.push(accuracy);

        // Deteksi drift
        if (this.detectAccuracyDrift()) {
            this.triggerRecalibration();
        }
    }

    // Monitor bias drift
    monitorBias(
        predictions: PredictedSkill[],
        demographicData: Record<string, any>
    ) {
        const bias = this.calculateBias(predictions, demographicData);
        this.metrics.bias.push(bias);

        if (this.detectBiasDrift()) {
            this.triggerBiasCorrection();
        }
    }

    // Log decision paths
    logDecisionPath(
        questionId: string,
        answer: Answer,
        probabilities: Map<string, number>
    ) {
        this.metrics.decisionPaths.push([
            questionId,
            answer.id,
            Array.from(probabilities.entries())
                .map(([skill, prob]) => `${skill}:${prob}`)
                .join(","),
        ]);
    }

    private calculateAccuracy(
        predictedSkills: PredictedSkill[],
        actualSkills: string[]
    ): number {
        if (actualSkills.length === 0) return 0;

        const correctPredictions = predictedSkills.filter((prediction) =>
            actualSkills.includes(prediction.skillId)
        ).length;

        return correctPredictions / actualSkills.length;
    }

    private detectAccuracyDrift(): boolean {
        // Implementasi deteksi drift akurasi
        return false;
    }

    private triggerRecalibration(): void {
        // Implementasi trigger recalibration
    }

    private calculateBias(
        predictions: PredictedSkill[],
        demographicData: Record<string, any>
    ): number {
        // Implementasi perhitungan bias
        return 0.1; // Contoh nilai
    }

    private detectBiasDrift(): boolean {
        // Implementasi deteksi drift bias
        return false;
    }

    private triggerBiasCorrection(): void {
        // Implementasi trigger bias correction
    }
}

class EnhancedSkillPredictor extends SkillPredictor {
    private calibrator: ModelCalibrator;
    private validator: ModelValidator;
    private monitor: ModelMonitor;

    constructor(
        allSkills: Skill[],
        spheres: Sphere[],
        historicalData?: CalibrationData[]
    ) {
        super(allSkills, spheres);
        this.calibrator = new ModelCalibrator();
        this.validator = new ModelValidator();
        this.monitor = new ModelMonitor();

        if (historicalData) {
            this.initializeWithHistoricalData(historicalData);
        }
    }

    // Override metode prediksi dengan optimasi
    processResults(
        predictedSkills: Array<{
            skillId: string;
            probability: number;
            confidenceScore: number;
        }>,
        demographicData?: Record<string, any>
    ): PredictedSkill[] {
        // Validasi prediksi
        const validatedPredictions =
            this.validator.validatePredictions(predictedSkills);

        // Monitor bias
        if (demographicData) {
            this.monitor.monitorBias(
                validatedPredictions as PredictedSkill[],
                demographicData
            );
        }

        // Track accuracy
        this.monitor.trackAccuracy(
            validatedPredictions as PredictedSkill[],
            []
        );

        return super.processResults(validatedPredictions);
    }

    // Metode untuk recalibration
    async recalibrate(newData: CalibrationData[]) {
        const result = await this.calibrator.testParameters({
            smoothingFactor: 0.1,
            correlationWeight: 0.7,
            skippedPenalty: 0.05,
        });

        this.updateParameters(result.bestParams);
    }

    private initializeWithHistoricalData(
        historicalData: CalibrationData[]
    ): void {
        // Implementasi inisialisasi dengan data historis
        historicalData.forEach((data) => {
            this.calibrator.calibratePrior(data.skillId, data);
        });
    }

    private updateParameters(newParams: {
        smoothingFactor: number;
        correlationWeight: number;
        skippedPenalty: number;
    }): void {
        // Implementasi update parameter
        this.calibrator.testParameters(newParams);
    }
}

function getAverageCorrelation(
    skillId: string,
    skillCorrelations: Map<string, Map<string, number>>
): number {
    const correlations = skillCorrelations.get(skillId);
    if (!correlations) return 0;

    const values = Array.from(correlations.values());
    return values.reduce((a, b) => a + b, 0) / values.length;
}

function calculateExpectedUncertaintyReduction(
    question: Question,
    uncertainties: Map<string, number>
): number {
    let totalReduction = 0;

    // Hitung expected reduction untuk setiap skill
    for (const [skillId, uncertainty] of uncertainties) {
        const skillWeight = question.linked_skills[skillId] || 0;
        totalReduction += uncertainty * skillWeight;
    }

    return totalReduction;
}

export class SkillPredictorError extends Error {
    constructor(message: string, public code: string) {
        super(message);
        this.name = "SkillPredictorError";
    }
}

export function handleError(error: unknown): never {
    if (error instanceof SkillPredictorError) {
        console.error(`[${error.code}] ${error.message}`);
    } else {
        console.error("Unexpected error:", error);
    }
    throw error;
}
