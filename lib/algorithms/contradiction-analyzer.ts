import {
  Question,
  ContradictionDimension,
  ContradictionInsight,
} from "@/lib/types";
import { skills } from "@/lib/data";
import { contradictionDimensions } from "@/lib/data/contradiction-dimensions";

/**
 * Menganalisis kontradiksi dalam jawaban pengguna untuk menemukan potensi skill tersembunyi
 *
 * @param userAnswers - Jawaban pengguna (questionId -> answerId)
 * @param questions - Daftar pertanyaan
 * @returns Array of ContradictionInsight
 */
export function analyzeContradictions(
  userAnswers: Record<string, string>,
  questions: Question[]
): ContradictionInsight[] {
  const insights: ContradictionInsight[] = [];

  // Jika tidak ada jawaban pengguna, kembalikan array kosong
  if (!userAnswers || Object.keys(userAnswers).length === 0) {
    return [];
  }

  // Dapatkan skill yang terkait dengan setiap jawaban
  const answerSkills: Record<
    string,
    {
      questionId: string;
      answerId: string;
      skills: string[];
    }
  > = {};

  // Untuk setiap jawaban pengguna, identifikasi skill yang terkait
  Object.entries(userAnswers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answer_options.find((a) => a.id === answerId);
    if (!answer) return;

    // Dapatkan skill yang terkait dengan pertanyaan ini
    const relatedSkills = Object.keys(question.linked_skills);

    answerSkills[questionId] = {
      questionId,
      answerId,
      skills: relatedSkills,
    };
  });

  // Jika tidak ada jawaban dengan skill terkait, kembalikan array kosong
  if (Object.keys(answerSkills).length === 0) {
    return [];
  }

  // Kumpulkan semua skill yang terkait dengan jawaban pengguna
  const allRelatedSkills = new Set<string>();

  // Urutkan questionIds untuk memastikan konsistensi
  const sortedQuestionIds = Object.keys(answerSkills).sort();

  // Proses jawaban dalam urutan yang konsisten
  for (const questionId of sortedQuestionIds) {
    const answer = answerSkills[questionId];
    // Urutkan skills untuk konsistensi
    const sortedSkills = [...answer.skills].sort();
    for (const skill of sortedSkills) {
      allRelatedSkills.add(skill);
    }
  }

  // Analisis setiap dimensi kontradiksi
  contradictionDimensions.forEach((dimension) => {
    // Untuk menyimpan contoh jawaban yang menunjukkan kedua sisi dimensi
    const examples: Array<{
      question: string;
      answer: string;
      skillId?: string;
      side: "first" | "second";
    }> = [];

    // Periksa apakah dimensi ini memiliki skill yang terkait dengan jawaban pengguna
    let dimensionHasRelevantSkills = false;

    // Urutkan pasangan skill untuk konsistensi
    const sortedPairs = [...dimension.skillPairs].sort((a, b) => {
      // Urutkan berdasarkan nilai pertama dari setiap pasangan
      const aValues = Object.values(a);
      const bValues = Object.values(b);
      return aValues[0].localeCompare(bValues[0]);
    });

    for (const pair of sortedPairs) {
      // Urutkan skill dalam pasangan untuk konsistensi
      const pairSkills = Object.values(pair).sort();
      for (const skill of pairSkills) {
        if (allRelatedSkills.has(skill)) {
          dimensionHasRelevantSkills = true;
          break;
        }
      }
      if (dimensionHasRelevantSkills) break;
    }

    // Jika dimensi ini tidak memiliki skill yang relevan, lewati
    if (!dimensionHasRelevantSkills) {
      return;
    }

    // Periksa setiap pasangan skill dalam dimensi (dalam urutan yang konsisten)
    const sortedSkillPairs = [...dimension.skillPairs].sort((a, b) => {
      // Urutkan berdasarkan nilai pertama dari setiap pasangan
      const aValues = Object.values(a);
      const bValues = Object.values(b);
      return aValues[0].localeCompare(bValues[0]);
    });

    for (const pair of sortedSkillPairs) {
      // Dapatkan semua kunci dari pair (misalnya 'structured', 'creative')
      const keys = Object.keys(pair);
      if (keys.length !== 2) return; // Pastikan ada dua sisi

      const firstKey = keys[0];
      const secondKey = keys[1];
      const firstSkillId = pair[firstKey];
      const secondSkillId = pair[secondKey];

      // Cari jawaban yang terkait dengan skill pertama
      const firstSkillAnswers = Object.values(answerSkills).filter((answer) =>
        answer.skills.includes(firstSkillId)
      );

      // Cari jawaban yang terkait dengan skill kedua
      const secondSkillAnswers = Object.values(answerSkills).filter((answer) =>
        answer.skills.includes(secondSkillId)
      );

      // Jika ada jawaban untuk kedua skill, tambahkan ke examples
      // Kita perlu setidaknya satu jawaban untuk setiap sisi dimensi
      if (firstSkillAnswers.length > 0 && secondSkillAnswers.length > 0) {
        // Urutkan jawaban untuk konsistensi
        const sortedFirstAnswers = [...firstSkillAnswers].sort((a, b) =>
          a.questionId.localeCompare(b.questionId)
        );
        const sortedSecondAnswers = [...secondSkillAnswers].sort((a, b) =>
          a.questionId.localeCompare(b.questionId)
        );
        // Ambil jawaban pertama untuk setiap skill (setelah diurutkan)
        const firstAnswer = sortedFirstAnswers[0];
        const secondAnswer = sortedSecondAnswers[0];

        // Dapatkan detail pertanyaan dan jawaban
        const firstQuestion = questions.find(
          (q) => q.id === firstAnswer.questionId
        );
        const secondQuestion = questions.find(
          (q) => q.id === secondAnswer.questionId
        );

        if (firstQuestion && secondQuestion) {
          const firstAnswerText =
            firstQuestion.answer_options.find(
              (a) => a.id === firstAnswer.answerId
            )?.text || "";
          const secondAnswerText =
            secondQuestion.answer_options.find(
              (a) => a.id === secondAnswer.answerId
            )?.text || "";

          // Tambahkan ke examples jika belum ada
          if (!examples.some((e) => e.question === firstQuestion.text)) {
            examples.push({
              question: firstQuestion.text,
              answer: firstAnswerText,
              skillId: firstSkillId,
              side: "first",
            });
          }

          if (!examples.some((e) => e.question === secondQuestion.text)) {
            examples.push({
              question: secondQuestion.text,
              answer: secondAnswerText,
              skillId: secondSkillId,
              side: "second",
            });
          }
        }
      }
    }

    // Jika ada contoh dari kedua sisi dimensi, buat insight
    const hasFirstSide = examples.some((e) => e.side === "first");
    const hasSecondSide = examples.some((e) => e.side === "second");

    if (hasFirstSide && hasSecondSide) {
      // Urutkan examples untuk konsistensi
      const sortedExamples = [...examples].sort((a, b) => {
        // Urutkan berdasarkan side terlebih dahulu, kemudian berdasarkan question
        if (a.side !== b.side) {
          return a.side === "first" ? -1 : 1;
        }
        return a.question.localeCompare(b.question);
      });

      insights.push({
        dimensionId: dimension.id,
        dimensionName: dimension.name,
        description: dimension.description,
        potentialSkill: dimension.potentialHiddenSkill,
        potentialSkillName: dimension.potentialHiddenSkillName,
        potentialSkillDescription: dimension.potentialHiddenSkillDescription,
        examples: sortedExamples.map((e) => ({
          question: e.question,
          answer: e.answer,
          skillId: e.skillId,
        })),
      });
    }
  });

  // Urutkan insights berdasarkan dimensionId untuk konsistensi
  return insights.sort((a, b) => a.dimensionId.localeCompare(b.dimensionId));
}

/**
 * Mengecek apakah skill tersembunyi sudah ada dalam top skills
 *
 * @param hiddenSkillId - ID skill tersembunyi
 * @param topSkillIds - Array of top skill IDs
 * @returns boolean
 */
export function isHiddenSkillInTopSkills(
  hiddenSkillId: string,
  topSkillIds: string[]
): boolean {
  return topSkillIds.includes(hiddenSkillId);
}

/**
 * Mendapatkan skill dari ID
 *
 * @param skillId - ID skill
 * @returns Skill object atau undefined jika tidak ditemukan
 */
export function getSkillById(skillId: string) {
  return skills.find((s) => s.id === skillId);
}
