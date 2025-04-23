import { ContradictionDimension } from "@/lib/types";

/**
 * Data dimensi kontradiksi untuk analisis skill tersembunyi
 * Setiap dimensi mendefinisikan pasangan skill yang tampak bertentangan
 * tetapi bisa menunjukkan kemampuan kompleks ketika dimiliki bersamaan
 */
export const contradictionDimensions: ContradictionDimension[] = [
  {
    id: "structure-creativity",
    name: "Struktur vs. Kreativitas",
    description: "Kemampuan menyeimbangkan pendekatan terstruktur dan kreatif",
    skillPairs: [
      { structured: "analytical_thinking", creative: "creative_thinking" },
      { structured: "planning", creative: "improvisation" },
      { structured: "systematic_approach", creative: "intuitive_approach" },
      { structured: "logical_reasoning", creative: "lateral_thinking" },
      { structured: "process_orientation", creative: "innovation" },
    ],
    potentialHiddenSkill: "cognitive_flexibility",
    potentialHiddenSkillName: "Fleksibilitas Kognitif",
    potentialHiddenSkillDescription:
      "Kemampuan untuk beralih antara pemikiran terstruktur dan kreatif sesuai kebutuhan situasi",
  },
  {
    id: "detail-big-picture",
    name: "Detail vs. Big Picture",
    description:
      "Kemampuan beralih antara fokus pada detail dan gambaran besar",
    skillPairs: [
      { detail: "detail_orientation", bigPicture: "strategic_thinking" },
      { detail: "precision", bigPicture: "vision_setting" },
      { detail: "implementation", bigPicture: "conceptualization" },
      { detail: "technical_expertise", bigPicture: "systems_thinking" },
      { detail: "operational_focus", bigPicture: "future_orientation" },
    ],
    potentialHiddenSkill: "contextual_intelligence",
    potentialHiddenSkillName: "Kecerdasan Kontekstual",
    potentialHiddenSkillDescription:
      "Kemampuan untuk memahami kapan harus fokus pada detail dan kapan harus melihat gambaran besar",
  },
  {
    id: "individual-collaborative",
    name: "Individu vs. Kolaborasi",
    description: "Kemampuan bekerja secara mandiri dan dalam tim",
    skillPairs: [
      { individual: "self_direction", collaborative: "team_facilitation" },
      { individual: "independent_work", collaborative: "collaboration" },
      {
        individual: "personal_accountability",
        collaborative: "shared_leadership",
      },
      { individual: "self_motivation", collaborative: "relationship_building" },
      { individual: "autonomy", collaborative: "consensus_building" },
    ],
    potentialHiddenSkill: "situational_adaptability",
    potentialHiddenSkillName: "Adaptabilitas Situasional",
    potentialHiddenSkillDescription:
      "Kemampuan untuk beradaptasi antara kerja mandiri dan kolaboratif sesuai kebutuhan",
  },
  {
    id: "analytical-emotional",
    name: "Analitis vs. Emosional",
    description:
      "Kemampuan menggunakan pemikiran analitis dan kecerdasan emosional",
    skillPairs: [
      { analytical: "data_analysis", emotional: "empathy" },
      { analytical: "critical_thinking", emotional: "emotional_intelligence" },
      {
        analytical: "problem_solving",
        emotional: "interpersonal_understanding",
      },
      { analytical: "objective_assessment", emotional: "social_awareness" },
      {
        analytical: "logical_decision_making",
        emotional: "relationship_management",
      },
    ],
    potentialHiddenSkill: "balanced_decision_making",
    potentialHiddenSkillName: "Pengambilan Keputusan Seimbang",
    potentialHiddenSkillDescription:
      "Kemampuan mengintegrasikan data analitis dan pertimbangan emosional dalam pengambilan keputusan",
  },
  {
    id: "risk-caution",
    name: "Pengambilan Risiko vs. Kehati-hatian",
    description:
      "Kemampuan menyeimbangkan pengambilan risiko dan kehati-hatian",
    skillPairs: [
      { risk: "entrepreneurial_mindset", caution: "risk_assessment" },
      { risk: "innovation", caution: "quality_assurance" },
      { risk: "experimentation", caution: "compliance_orientation" },
      { risk: "opportunity_seeking", caution: "due_diligence" },
      { risk: "bold_decision_making", caution: "careful_planning" },
    ],
    potentialHiddenSkill: "calculated_risk_taking",
    potentialHiddenSkillName: "Pengambilan Risiko Terukur",
    potentialHiddenSkillDescription:
      "Kemampuan mengambil risiko yang diperhitungkan dengan baik dan mengetahui kapan harus berhati-hati",
  },
  {
    id: "specialist-generalist",
    name: "Spesialis vs. Generalis",
    description:
      "Kemampuan menggabungkan keahlian mendalam dengan pengetahuan luas",
    skillPairs: [
      { specialist: "technical_expertise", generalist: "versatility" },
      {
        specialist: "domain_knowledge",
        generalist: "interdisciplinary_thinking",
      },
      { specialist: "specialized_skills", generalist: "adaptability" },
      { specialist: "depth_of_knowledge", generalist: "breadth_of_knowledge" },
      { specialist: "expert_focus", generalist: "holistic_perspective" },
    ],
    potentialHiddenSkill: "t_shaped_expertise",
    potentialHiddenSkillName: "Keahlian T-Shaped",
    potentialHiddenSkillDescription:
      "Kemampuan menggabungkan keahlian mendalam di satu bidang dengan pengetahuan luas di berbagai bidang",
  },
  {
    id: "traditional-innovative",
    name: "Tradisional vs. Inovatif",
    description: "Kemampuan menghargai tradisi sambil mendorong inovasi",
    skillPairs: [
      { traditional: "process_adherence", innovative: "disruptive_thinking" },
      { traditional: "reliability", innovative: "creativity" },
      { traditional: "consistency", innovative: "experimentation" },
      { traditional: "best_practices", innovative: "novel_approaches" },
      {
        traditional: "established_methods",
        innovative: "breakthrough_thinking",
      },
    ],
    potentialHiddenSkill: "adaptive_innovation",
    potentialHiddenSkillName: "Inovasi Adaptif",
    potentialHiddenSkillDescription:
      "Kemampuan berinovasi dengan tetap menghormati nilai-nilai dan praktik terbaik yang telah terbukti",
  },
  {
    id: "practical-theoretical",
    name: "Praktis vs. Teoretis",
    description: "Kemampuan menggabungkan pemikiran praktis dan teoretis",
    skillPairs: [
      { practical: "hands_on_skills", theoretical: "conceptual_thinking" },
      { practical: "implementation", theoretical: "abstract_reasoning" },
      { practical: "pragmatism", theoretical: "philosophical_thinking" },
      { practical: "tactical_execution", theoretical: "theoretical_modeling" },
      { practical: "applied_knowledge", theoretical: "theoretical_knowledge" },
    ],
    potentialHiddenSkill: "applied_theorist",
    potentialHiddenSkillName: "Teoretikus Terapan",
    potentialHiddenSkillDescription:
      "Kemampuan menerapkan teori ke dalam praktik dan mengekstrak prinsip teoretis dari pengalaman praktis",
  },
  {
    id: "leadership-followership",
    name: "Kepemimpinan vs. Followership",
    description:
      "Kemampuan untuk memimpin dan mengikuti secara efektif sesuai situasi",
    skillPairs: [
      { leadership: "leadership", followership: "teamwork" },
      { leadership: "decision_making", followership: "supportive_role" },
      { leadership: "vision_setting", followership: "execution" },
      { leadership: "directing_others", followership: "taking_direction" },
      { leadership: "initiative", followership: "collaboration" },
    ],
    potentialHiddenSkill: "contextual_leadership",
    potentialHiddenSkillName: "Kepemimpinan Kontekstual",
    potentialHiddenSkillDescription:
      "Kemampuan untuk beralih antara memimpin dan mengikuti berdasarkan kebutuhan situasi dan tim",
  },
  {
    id: "verbal-nonverbal",
    name: "Komunikasi Verbal vs. Non-verbal",
    description:
      "Kemampuan menggunakan komunikasi verbal dan non-verbal secara efektif",
    skillPairs: [
      { verbal: "verbal_communication", nonverbal: "body_language_awareness" },
      { verbal: "public_speaking", nonverbal: "active_listening" },
      { verbal: "articulation", nonverbal: "emotional_intelligence" },
      { verbal: "storytelling", nonverbal: "empathy" },
      { verbal: "persuasive_speaking", nonverbal: "reading_social_cues" },
    ],
    potentialHiddenSkill: "holistic_communication",
    potentialHiddenSkillName: "Komunikasi Holistik",
    potentialHiddenSkillDescription:
      "Kemampuan mengintegrasikan komunikasi verbal dan non-verbal untuk menyampaikan pesan dengan efektif dan autentik",
  },
  {
    id: "teaching-learning",
    name: "Mengajar vs. Belajar",
    description: "Kemampuan untuk mengajar orang lain dan terus belajar",
    skillPairs: [
      { teaching: "knowledge_sharing", learning: "continuous_learning" },
      { teaching: "mentoring", learning: "adaptability" },
      { teaching: "coaching", learning: "curiosity" },
      { teaching: "instructional_design", learning: "learning_agility" },
      {
        teaching: "explaining_complex_concepts",
        learning: "openness_to_feedback",
      },
    ],
    potentialHiddenSkill: "learning_facilitator",
    potentialHiddenSkillName: "Fasilitator Pembelajaran",
    potentialHiddenSkillDescription:
      "Kemampuan untuk mengajar sambil terus belajar, menciptakan lingkungan pertumbuhan bersama",
  },
  {
    id: "digital-analog",
    name: "Digital vs. Analog",
    description: "Kemampuan bekerja efektif di dunia digital dan analog",
    skillPairs: [
      { digital: "digital_literacy", analog: "interpersonal_skills" },
      { digital: "technology_adoption", analog: "face_to_face_communication" },
      { digital: "virtual_collaboration", analog: "physical_teamwork" },
      { digital: "data_analysis", analog: "intuitive_decision_making" },
      { digital: "automation", analog: "craftsmanship" },
    ],
    potentialHiddenSkill: "integrated_work_approach",
    potentialHiddenSkillName: "Pendekatan Kerja Terintegrasi",
    potentialHiddenSkillDescription:
      "Kemampuan menggabungkan keterampilan digital dan analog untuk menciptakan solusi yang komprehensif",
  },
  {
    id: "spiritual-secular",
    name: "Spiritual vs. Sekuler",
    description:
      "Kemampuan mengintegrasikan nilai-nilai spiritual dan pendekatan sekuler",
    skillPairs: [
      { spiritual: "spiritual_awareness", secular: "critical_thinking" },
      {
        spiritual: "value_based_leadership",
        secular: "evidence_based_decision_making",
      },
      { spiritual: "ethical_reasoning", secular: "pragmatic_problem_solving" },
      { spiritual: "mindfulness", secular: "analytical_thinking" },
      { spiritual: "purpose_driven_approach", secular: "objective_assessment" },
    ],
    potentialHiddenSkill: "integrated_wisdom",
    potentialHiddenSkillName: "Kebijaksanaan Terintegrasi",
    potentialHiddenSkillDescription:
      "Kemampuan menggabungkan wawasan spiritual dan pendekatan sekuler untuk mencapai pemahaman dan solusi yang lebih holistik",
  },
  {
    id: "authority-democracy",
    name: "Otoritas vs. Demokrasi",
    description:
      "Kemampuan menyeimbangkan pendekatan otoritatif dan demokratis",
    skillPairs: [
      {
        authority: "decisive_leadership",
        democracy: "participative_leadership",
      },
      { authority: "command_presence", democracy: "consensus_building" },
      {
        authority: "setting_boundaries",
        democracy: "inclusive_decision_making",
      },
      { authority: "accountability_enforcement", democracy: "empowerment" },
      { authority: "directive_communication", democracy: "open_dialogue" },
    ],
    potentialHiddenSkill: "situational_governance",
    potentialHiddenSkillName: "Tata Kelola Situasional",
    potentialHiddenSkillDescription:
      "Kemampuan menerapkan pendekatan otoritatif atau demokratis sesuai dengan kebutuhan situasi dan konteks",
  },
  {
    id: "local-global",
    name: "Lokal vs. Global",
    description: "Kemampuan berpikir dan bertindak secara lokal dan global",
    skillPairs: [
      { local: "community_engagement", global: "global_awareness" },
      { local: "cultural_sensitivity", global: "cross_cultural_communication" },
      {
        local: "local_market_knowledge",
        global: "international_business_acumen",
      },
      { local: "regional_expertise", global: "global_perspective" },
      { local: "grassroots_organizing", global: "systems_thinking" },
    ],
    potentialHiddenSkill: "glocal_mindset",
    potentialHiddenSkillName: "Pola Pikir Glokal",
    potentialHiddenSkillDescription:
      "Kemampuan mengintegrasikan perspektif lokal dan global untuk menciptakan solusi yang relevan secara kontekstual namun berdampak luas",
  },
];

export default contradictionDimensions;
