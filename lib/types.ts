export interface Sphere {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  sphere_id: number;
  description: string;
  traits: string[];
  related_skills: string[];
  difficulty_curve: number;
  practical_applications: string[];
  learning_resources: LearningResource[];
  career_paths: string[];
  sphere?: Sphere; // Added during processing
}

export interface LearningResource {
  title: string;
  url: string;
  type: string;
}

export interface Question {
  id: string;
  text: string;
  follow_up_text?: string;
  linked_skills: Record<string, number>;
  discriminative_value: number;
  answer_options: AnswerOption[];
  tags: string[];
  complexity: string;
  prerequisites: string[];
}

export interface AnswerOption {
  id: string;
  text: string;
  weight: number;
}

export interface PredictedSkill {
  skillId: string;
  probability: number;
  confidenceScore: number;
  skill: Skill;
  sphere: Sphere;
}

// Tipe untuk analisis kontradiksi
export interface ContradictionDimension {
  id: string;
  name: string;
  description: string;
  skillPairs: Array<Record<string, string>>;
  potentialHiddenSkill: string;
  potentialHiddenSkillName: string;
  potentialHiddenSkillDescription: string;
}

export interface ContradictionInsight {
  dimensionId: string;
  dimensionName: string;
  description: string;
  potentialSkill: string;
  potentialSkillName: string;
  potentialSkillDescription: string;
  examples: Array<{
    question: string;
    answer: string;
    skillId?: string;
  }>;
}

export interface HiddenPotentialProps {
  userAnswers: Record<string, string>;
  questions: Question[];
  topSkills: PredictedSkill[];
  allSkillProbabilities: Record<string, number>;
  allSkills: Skill[];
}
