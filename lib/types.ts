export interface Sphere {
  id: number
  name: string
  description: string
  icon: string
  color: string
}

export interface Skill {
  id: string
  name: string
  sphere_id: number
  description: string
  traits: string[]
  related_skills: string[]
  difficulty_curve: number
  practical_applications: string[]
  learning_resources: LearningResource[]
  career_paths: string[]
  sphere?: Sphere // Added during processing
}

export interface LearningResource {
  title: string
  url: string
  type: string
}

export interface Question {
  id: string
  text: string
  follow_up_text?: string
  linked_skills: Record<string, number>
  discriminative_value: number
  answer_options: AnswerOption[]
  tags: string[]
  complexity: string
  prerequisites: string[]
}

export interface AnswerOption {
  id: string
  text: string
  weight: number
}

export interface PredictedSkill {
  skillId: string
  probability: number
  confidenceScore: number
  skill: Skill
  sphere: Sphere
}
