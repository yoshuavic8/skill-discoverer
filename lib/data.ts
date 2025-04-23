import type { Sphere, Skill, Question } from "./types";

export const spheres: Sphere[] = [
    {
        id: 1,
        name: "Kognitif & Analitis",
        description:
            "Kemampuan berpikir logis, analitis, dan pemecahan masalah",
        icon: "🧠",
        color: "#4A90E2",
    },
    {
        id: 2,
        name: "Kreatif & Artistik",
        description: "Kemampuan eksplorasi dan ekspresi kreatif",
        icon: "🎨",
        color: "#D0021B",
    },
    {
        id: 3,
        name: "Interpersonal",
        description:
            "Kemampuan berkomunikasi dan berinteraksi dengan orang lain",
        icon: "👥",
        color: "#7ED321",
    },
    {
        id: 4,
        name: "Fisik & Kinestetik",
        description: "Kemampuan motorik, koordinasi, dan kebugaran fisik",
        icon: "💪",
        color: "#F5A623",
    },
    {
        id: 5,
        name: "Manajerial & Kepemimpinan",
        description: "Kemampuan mengatur, memimpin, dan mengelola",
        icon: "🚀",
        color: "#9013FE",
    },
    {
        id: 6,
        name: "Teknikal & Digital",
        description: "Kemampuan menggunakan teknologi dan alat digital",
        icon: "💻",
        color: "#50E3C2",
    },
    {
        id: 7,
        name: "Introspektif & Reflektif",
        description: "Kesadaran diri, regulasi emosi, dan introspeksi",
        icon: "🧘",
        color: "#B8E986",
    },
];

export const skills: Skill[] = [
    // Existing skills...
    {
        id: "kognitif-synthesis-001",
        name: "Sintesis Informasi",
        sphere_id: 1,
        description:
            "Kemampuan menggabungkan berbagai informasi untuk membentuk pemahaman yang koheren",
        traits: ["integrative", "analytical", "holistic", "conceptual"],
        related_skills: ["kognitif-sistemik-001", "kognitif-kritis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Research synthesis",
            "Literature review",
            "Interdisciplinary studies",
            "Complex problem solving",
        ],
        learning_resources: [
            {
                title: "Synthesizing Research",
                url: "https://www.amazon.com/Synthesizing-Research-Guide-Literature-Reviews/dp/0761913483",
                type: "book",
            },
            {
                title: "The Craft of Research",
                url: "https://www.amazon.com/Research-Chicago-Writing-Editing-Publishing/dp/0226065669",
                type: "book",
            },
        ],
        career_paths: [
            "Research Scientist",
            "Academic",
            "Policy Analyst",
            "Intelligence Analyst",
        ],
    },
    {
        id: "kognitif-spatial-reasoning-001",
        name: "Penalaran Spasial",
        sphere_id: 1,
        description:
            "Kemampuan memahami dan memanipulasi objek dalam ruang mental",
        traits: ["visual", "spatial", "geometric", "3d-thinking"],
        related_skills: ["fisik-spatial-001", "kreatif-3d-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Engineering design",
            "Architecture",
            "Navigation",
            "Geometric problem solving",
        ],
        learning_resources: [
            {
                title: "Spatial Reasoning Practice",
                url: "https://www.psychometric-success.com/aptitude-tests/spatial-ability-tests.htm",
                type: "exercises",
            },
            {
                title: "Visual-Spatial Thinking",
                url: "https://www.amazon.com/Upside-Down-Brilliance-Visual-Spatial-Learner/dp/0967668719",
                type: "book",
            },
        ],
        career_paths: ["Architect", "Engineer", "Graphic Designer", "Surgeon"],
    },
    {
        id: "kreatif-innovation-strategy-001",
        name: "Strategi Inovasi",
        sphere_id: 2,
        description:
            "Kemampuan mengembangkan pendekatan sistematis untuk inovasi dan kreativitas",
        traits: ["strategic", "creative", "methodical", "visionary"],
        related_skills: ["kreatif-inovasi-001", "manajerial-planning-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Product innovation",
            "Business model innovation",
            "R&D management",
            "Creative leadership",
        ],
        learning_resources: [
            {
                title: "Innovation and Entrepreneurship",
                url: "https://www.amazon.com/Innovation-Entrepreneurship-Peter-F-Drucker/dp/0060851139",
                type: "book",
            },
            {
                title: "Strategic Innovation",
                url: "https://www.coursera.org/learn/strategic-innovation",
                type: "course",
            },
        ],
        career_paths: [
            "Innovation Director",
            "R&D Manager",
            "Chief Innovation Officer",
            "Design Strategist",
        ],
    },
    {
        id: "kreatif-visual-thinking-001",
        name: "Pemikiran Visual",
        sphere_id: 2,
        description:
            "Kemampuan menggunakan gambar dan visualisasi untuk memahami dan mengkomunikasikan ide",
        traits: ["visual", "creative", "communicative", "conceptual"],
        related_skills: [
            "kreatif-desain-001",
            "kognitif-spatial-reasoning-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Information design",
            "Visual facilitation",
            "Concept mapping",
            "Visual storytelling",
        ],
        learning_resources: [
            {
                title: "The Back of the Napkin",
                url: "https://www.amazon.com/Back-Napkin-Expanded-Problems-Pictures/dp/1591842697",
                type: "book",
            },
            {
                title: "Visual Thinking Strategies",
                url: "https://vtshome.org/",
                type: "resource",
            },
        ],
        career_paths: [
            "Information Designer",
            "Visual Facilitator",
            "UX Designer",
            "Visual Strategist",
        ],
    },
    {
        id: "interpersonal-conflict-resolution-001",
        name: "Resolusi Konflik",
        sphere_id: 3,
        description:
            "Kemampuan menyelesaikan perselisihan dan konflik secara konstruktif",
        traits: ["diplomatic", "empathetic", "fair", "patient"],
        related_skills: [
            "interpersonal-negosiasi-001",
            "manajerial-conflict-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Workplace mediation",
            "Family counseling",
            "Community disputes",
            "International relations",
        ],
        learning_resources: [
            {
                title: "Getting to Yes",
                url: "https://www.amazon.com/Getting-Yes-Negotiating-Agreement-Without/dp/0143118757",
                type: "book",
            },
            {
                title: "Conflict Resolution Skills",
                url: "https://www.coursera.org/learn/conflict-resolution-skills",
                type: "course",
            },
        ],
        career_paths: [
            "Mediator",
            "Diplomat",
            "HR Specialist",
            "Family Counselor",
        ],
    },
    {
        id: "kognitif-computational-001",
        name: "Pemikiran Komputasional",
        sphere_id: 1,
        description:
            "Kemampuan memecahkan masalah menggunakan konsep dan metode komputasi",
        traits: ["logical", "algorithmic", "systematic", "analytical"],
        related_skills: ["tech-algorithms-001", "kognitif-logika-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Problem decomposition",
            "Pattern recognition",
            "Algorithm design",
            "Abstraction",
        ],
        learning_resources: [
            {
                title: "Computational Thinking for Problem Solving",
                url: "https://www.coursera.org/learn/computational-thinking-problem-solving",
                type: "course",
            },
            {
                title: "CS50: Introduction to Computer Science",
                url: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
                type: "course",
            },
        ],
        career_paths: [
            "Computer Scientist",
            "Software Engineer",
            "Data Analyst",
            "Systems Architect",
        ],
    },
    {
        id: "manajerial-project-001",
        name: "Manajemen Proyek",
        sphere_id: 5,
        description:
            "Kemampuan merencanakan, mengeksekusi, dan menyelesaikan proyek secara efektif",
        traits: [
            "organized",
            "detail-oriented",
            "goal-focused",
            "coordinating",
        ],
        related_skills: ["manajerial-planning-001", "manajerial-resource-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Project planning",
            "Team coordination",
            "Timeline management",
            "Resource allocation",
        ],
        learning_resources: [
            {
                title: "Project Management Professional (PMP)",
                url: "https://www.pmi.org/certifications/project-management-pmp",
                type: "certification",
            },
            {
                title: "Project Management Fundamentals",
                url: "https://www.linkedin.com/learning/project-management-foundations-2019",
                type: "course",
            },
        ],
        career_paths: [
            "Project Manager",
            "Program Manager",
            "Operations Director",
            "Construction Manager",
        ],
    },
    {
        id: "tech-iot-001",
        name: "Internet of Things",
        sphere_id: 6,
        description:
            "Kemampuan mengembangkan dan mengelola sistem perangkat terhubung",
        traits: ["technical", "innovative", "systems-thinking", "practical"],
        related_skills: ["tech-programming-001", "tech-exploration-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Smart home systems",
            "Industrial automation",
            "Wearable technology",
            "Environmental monitoring",
        ],
        learning_resources: [
            {
                title: "Introduction to the Internet of Things",
                url: "https://www.coursera.org/learn/iot",
                type: "course",
            },
            {
                title: "IoT Fundamentals",
                url: "https://www.netacad.com/courses/iot/iot-fundamentals",
                type: "course",
            },
        ],
        career_paths: [
            "IoT Developer",
            "Smart Systems Engineer",
            "IoT Solutions Architect",
            "Embedded Systems Designer",
        ],
    },
    {
        id: "tech-programming-001",
        name: "Pemrograman",
        sphere_id: 6,
        description: "Kemampuan menulis kode dan mengembangkan aplikasi",
        traits: ["logical", "detail-oriented", "problem-solver", "technical"],
        related_skills: ["tech-debugging-001", "tech-algorithms-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Pengembangan web dan aplikasi",
            "Otomatisasi tugas",
            "Analisis data",
        ],
        learning_resources: [
            {
                title: "freeCodeCamp",
                url: "https://www.freecodecamp.org/",
                type: "interactive",
            },
            {
                title: "The Odin Project",
                url: "https://www.theodinproject.com/",
                type: "course",
            },
        ],
        career_paths: [
            "Software Developer",
            "Web Developer",
            "Data Scientist",
            "DevOps Engineer",
        ],
    },
    {
        id: "kognitif-logika-001",
        name: "Penalaran Logis",
        sphere_id: 1,
        description: "Kemampuan berpikir secara logis dan sistematis",
        traits: ["analytical", "methodical", "rational", "structured"],
        related_skills: ["kognitif-matematika-001", "tech-algorithms-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Pemecahan masalah kompleks",
            "Analisis data",
            "Pengambilan keputusan",
        ],
        learning_resources: [
            {
                title: "Brilliant - Logic",
                url: "https://brilliant.org/courses/logic/",
                type: "interactive",
            },
            {
                title: "Introduction to Logic",
                url: "https://www.coursera.org/learn/logic-introduction",
                type: "course",
            },
        ],
        career_paths: [
            "Data Analyst",
            "Research Scientist",
            "Business Analyst",
            "Software Engineer",
        ],
    },
    {
        id: "kreatif-desain-001",
        name: "Desain Visual",
        sphere_id: 2,
        description: "Kemampuan menciptakan desain yang menarik dan efektif",
        traits: ["creative", "visual", "aesthetic", "detail-oriented"],
        related_skills: ["kreatif-fotografi-001", "tech-ui-ux-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Desain grafis",
            "UI/UX design",
            "Branding",
            "Marketing",
        ],
        learning_resources: [
            {
                title: "Figma Design Essentials",
                url: "https://www.figma.com/resources/learn-design/",
                type: "tutorial",
            },
            {
                title: "Canva Design School",
                url: "https://www.canva.com/learn/",
                type: "course",
            },
        ],
        career_paths: [
            "Graphic Designer",
            "UI/UX Designer",
            "Art Director",
            "Brand Designer",
        ],
    },
    {
        id: "interpersonal-komunikasi-001",
        name: "Komunikasi Efektif",
        sphere_id: 3,
        description: "Kemampuan menyampaikan ide dengan jelas dan persuasif",
        traits: ["articulate", "empathetic", "persuasive", "clear"],
        related_skills: [
            "interpersonal-negosiasi-001",
            "manajerial-presentasi-001",
        ],
        difficulty_curve: 0.5,
        practical_applications: [
            "Public speaking",
            "Negosiasi",
            "Kolaborasi tim",
            "Customer service",
        ],
        learning_resources: [
            {
                title: "Effective Communication Skills",
                url: "https://www.coursera.org/learn/effective-communication",
                type: "course",
            },
            {
                title: "Toastmasters International",
                url: "https://www.toastmasters.org/",
                type: "community",
            },
        ],
        career_paths: [
            "Public Relations Specialist",
            "Sales Representative",
            "Customer Success Manager",
            "Communications Director",
        ],
    },
    {
        id: "manajerial-leadership-001",
        name: "Kepemimpinan",
        sphere_id: 5,
        description: "Kemampuan memimpin dan menginspirasi orang lain",
        traits: ["decisive", "inspiring", "strategic", "empowering"],
        related_skills: [
            "manajerial-decision-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.9,
        practical_applications: [
            "Team management",
            "Project leadership",
            "Organizational change",
            "Strategic planning",
        ],
        learning_resources: [
            {
                title: "Leadership: Practical Leadership Skills",
                url: "https://www.udemy.com/course/leadership-practical-leadership-skills/",
                type: "course",
            },
            {
                title: "Harvard Business Review - Leadership",
                url: "https://hbr.org/topic/leadership",
                type: "articles",
            },
        ],
        career_paths: [
            "Team Lead",
            "Project Manager",
            "Department Head",
            "Executive",
        ],
    },
    {
        id: "kognitif-analisis-001",
        name: "Analisis Data",
        sphere_id: 1,
        description:
            "Kemampuan menginterpretasi dan menganalisis data secara efektif",
        traits: [
            "analytical",
            "detail-oriented",
            "methodical",
            "pattern-recognition",
        ],
        related_skills: ["kognitif-logika-001", "tech-programming-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Business intelligence",
            "Market research",
            "Scientific research",
            "Performance analysis",
        ],
        learning_resources: [
            {
                title: "Data Analysis with Python",
                url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
                type: "course",
            },
            {
                title: "Google Data Analytics Certificate",
                url: "https://www.coursera.org/professional-certificates/google-data-analytics",
                type: "certification",
            },
        ],
        career_paths: [
            "Data Analyst",
            "Business Analyst",
            "Research Analyst",
            "Data Scientist",
        ],
    },
    {
        id: "kognitif-kritis-001",
        name: "Berpikir Kritis",
        sphere_id: 1,
        description:
            "Kemampuan mengevaluasi informasi secara objektif dan membuat penilaian yang tepat",
        traits: ["analytical", "skeptical", "rational", "evaluative"],
        related_skills: ["kognitif-logika-001", "kognitif-analisis-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Evaluasi argumen",
            "Fact-checking",
            "Pengambilan keputusan",
            "Problem solving",
        ],
        learning_resources: [
            {
                title: "Critical Thinking Skills for University Success",
                url: "https://www.coursera.org/learn/critical-thinking-skills",
                type: "course",
            },
            {
                title: "Introduction to Logic and Critical Thinking",
                url: "https://www.edx.org/learn/critical-thinking/duke-university-introduction-to-logic-and-critical-thinking",
                type: "course",
            },
        ],
        career_paths: [
            "Researcher",
            "Journalist",
            "Policy Analyst",
            "Legal Professional",
        ],
    },
    {
        id: "kreatif-inovasi-001",
        name: "Inovasi",
        sphere_id: 2,
        description: "Kemampuan menghasilkan ide baru dan solusi kreatif",
        traits: ["creative", "original", "imaginative", "experimental"],
        related_skills: ["kreatif-desain-001", "tech-programming-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Product development",
            "Process improvement",
            "Creative problem solving",
            "Entrepreneurship",
        ],
        learning_resources: [
            {
                title: "Innovation and Creativity",
                url: "https://www.edx.org/learn/innovation/rwth-aachen-university-innovation-and-creativity",
                type: "course",
            },
            {
                title: "Design Thinking for Innovation",
                url: "https://www.coursera.org/learn/uva-darden-design-thinking-innovation",
                type: "course",
            },
        ],
        career_paths: [
            "Innovation Consultant",
            "Product Designer",
            "R&D Specialist",
            "Entrepreneur",
        ],
    },
    {
        id: "kreatif-storytelling-001",
        name: "Storytelling",
        sphere_id: 2,
        description: "Kemampuan menyampaikan cerita yang menarik dan bermakna",
        traits: ["creative", "expressive", "engaging", "narrative"],
        related_skills: ["kreatif-desain-001", "interpersonal-komunikasi-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Content creation",
            "Marketing",
            "Public speaking",
            "Education",
        ],
        learning_resources: [
            {
                title: "The Art of Storytelling",
                url: "https://www.masterclass.com/classes/neil-gaiman-teaches-the-art-of-storytelling",
                type: "masterclass",
            },
            {
                title: "Storytelling for Change",
                url: "https://www.novoed.com/storytelling-for-change",
                type: "course",
            },
        ],
        career_paths: [
            "Content Creator",
            "Copywriter",
            "Brand Storyteller",
            "Public Speaker",
        ],
    },
    {
        id: "interpersonal-empati-001",
        name: "Empati",
        sphere_id: 3,
        description:
            "Kemampuan memahami dan merasakan perspektif dan emosi orang lain",
        traits: ["empathetic", "understanding", "compassionate", "perceptive"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "introspektif-awareness-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Counseling",
            "Customer service",
            "Team collaboration",
            "Conflict resolution",
        ],
        learning_resources: [
            {
                title: "Empathy and Emotional Intelligence at Work",
                url: "https://www.edx.org/learn/emotional-intelligence/university-of-california-berkeley-empathy-and-emotional-intelligence-at-work",
                type: "course",
            },
            {
                title: "Developing Your Emotional Intelligence",
                url: "https://www.linkedin.com/learning/developing-your-emotional-intelligence",
                type: "course",
            },
        ],
        career_paths: [
            "Counselor",
            "HR Specialist",
            "Social Worker",
            "Customer Experience Manager",
        ],
    },
    {
        id: "interpersonal-negosiasi-001",
        name: "Negosiasi",
        sphere_id: 3,
        description: "Kemampuan mencapai kesepakatan yang saling menguntungkan",
        traits: ["persuasive", "strategic", "diplomatic", "assertive"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "manajerial-leadership-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Business deals",
            "Conflict resolution",
            "Sales",
            "Diplomacy",
        ],
        learning_resources: [
            {
                title: "Successful Negotiation: Essential Strategies and Skills",
                url: "https://www.coursera.org/learn/negotiation-skills",
                type: "course",
            },
            {
                title: "Negotiation Mastery",
                url: "https://online.hbs.edu/courses/negotiation-mastery/",
                type: "course",
            },
        ],
        career_paths: [
            "Sales Executive",
            "Business Development",
            "Lawyer",
            "Diplomat",
        ],
    },
    {
        id: "fisik-koordinasi-001",
        name: "Koordinasi Fisik",
        sphere_id: 4,
        description: "Kemampuan mengkoordinasikan gerakan tubuh dengan presisi",
        traits: ["coordinated", "agile", "balanced", "precise"],
        related_skills: ["fisik-kinestetik-001", "fisik-refleks-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Sports",
            "Dance",
            "Manual crafts",
            "Physical performance",
        ],
        learning_resources: [
            {
                title: "Coordination Training for Athletes",
                url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5851/coordination-exercises-for-sports-performance/",
                type: "article",
            },
            {
                title: "Motor Skills Development",
                url: "https://www.udemy.com/course/motor-skills-development/",
                type: "course",
            },
        ],
        career_paths: [
            "Athletic Coach",
            "Physical Therapist",
            "Dance Instructor",
            "Stunt Performer",
        ],
    },
    {
        id: "fisik-kinestetik-001",
        name: "Kecerdasan Kinestetik",
        sphere_id: 4,
        description: "Kemampuan belajar melalui aktivitas fisik dan gerakan",
        traits: ["hands-on", "physical", "tactile", "experiential"],
        related_skills: ["fisik-koordinasi-001", "fisik-balance-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Sports",
            "Craftsmanship",
            "Performing arts",
            "Physical education",
        ],
        learning_resources: [
            {
                title: "Bodily-Kinesthetic Intelligence",
                url: "https://www.verywellmind.com/bodily-kinesthetic-intelligence-2795005",
                type: "article",
            },
            {
                title: "Movement Education",
                url: "https://www.humankinetics.com/products/all-products/movement-education",
                type: "book",
            },
        ],
        career_paths: [
            "Physical Education Teacher",
            "Choreographer",
            "Craftsman",
            "Athlete",
        ],
    },
    {
        id: "manajerial-delegasi-001",
        name: "Delegasi",
        sphere_id: 5,
        description: "Kemampuan mendelegasikan tugas secara efektif",
        traits: ["trusting", "strategic", "organized", "communicative"],
        related_skills: [
            "manajerial-leadership-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Team management",
            "Project coordination",
            "Organizational efficiency",
            "Leadership",
        ],
        learning_resources: [
            {
                title: "The Art of Delegation",
                url: "https://www.mindtools.com/pages/article/newLDR_98.htm",
                type: "article",
            },
            {
                title: "Delegating Tasks to Your Team",
                url: "https://www.linkedin.com/learning/delegating-tasks-to-your-team",
                type: "course",
            },
        ],
        career_paths: [
            "Team Leader",
            "Project Manager",
            "Department Head",
            "Executive",
        ],
    },
    {
        id: "manajerial-planning-001",
        name: "Perencanaan Strategis",
        sphere_id: 5,
        description:
            "Kemampuan merencanakan dan mengorganisir proyek atau inisiatif",
        traits: [
            "organized",
            "forward-thinking",
            "methodical",
            "detail-oriented",
        ],
        related_skills: ["manajerial-leadership-001", "kognitif-logika-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Project planning",
            "Business strategy",
            "Event organization",
            "Resource allocation",
        ],
        learning_resources: [
            {
                title: "Strategic Planning and Execution",
                url: "https://www.coursera.org/learn/strategic-planning-execution",
                type: "course",
            },
            {
                title: "Project Management Professional (PMP)",
                url: "https://www.pmi.org/certifications/project-management-pmp",
                type: "certification",
            },
        ],
        career_paths: [
            "Project Manager",
            "Strategic Planner",
            "Operations Manager",
            "Business Consultant",
        ],
    },
    {
        id: "tech-automation-001",
        name: "Otomatisasi",
        sphere_id: 6,
        description:
            "Kemampuan mengotomatiskan proses dan tugas menggunakan teknologi",
        traits: ["efficient", "technical", "innovative", "systematic"],
        related_skills: ["tech-programming-001", "tech-exploration-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Process automation",
            "Workflow optimization",
            "Scripting",
            "DevOps",
        ],
        learning_resources: [
            {
                title: "Automate the Boring Stuff with Python",
                url: "https://automatetheboringstuff.com/",
                type: "book",
            },
            {
                title: "RPA Developer Foundation",
                url: "https://www.uipath.com/learning/rpa-academy",
                type: "course",
            },
        ],
        career_paths: [
            "Automation Engineer",
            "DevOps Specialist",
            "RPA Developer",
            "Systems Administrator",
        ],
    },
    {
        id: "tech-exploration-001",
        name: "Eksplorasi Teknologi",
        sphere_id: 6,
        description: "Kemampuan menjelajahi dan mengadopsi teknologi baru",
        traits: ["curious", "adaptable", "technical", "innovative"],
        related_skills: ["tech-programming-001", "kreatif-inovasi-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Technology adoption",
            "Digital transformation",
            "Innovation",
            "Technical research",
        ],
        learning_resources: [
            {
                title: "Keeping Up with Technology Trends",
                url: "https://www.pluralsight.com/blog/career/tech-in-2020",
                type: "article",
            },
            {
                title: "Digital Skills: Digital Marketing",
                url: "https://www.futurelearn.com/courses/digital-skills-digital-marketing",
                type: "course",
            },
        ],
        career_paths: [
            "Technology Consultant",
            "Digital Transformation Specialist",
            "Innovation Manager",
            "Tech Evangelist",
        ],
    },
    {
        id: "introspektif-awareness-001",
        name: "Kesadaran Diri",
        sphere_id: 7,
        description:
            "Kemampuan memahami emosi, kekuatan, dan kelemahan diri sendiri",
        traits: ["self-aware", "reflective", "mindful", "insightful"],
        related_skills: [
            "introspektif-refleksi-001",
            "introspektif-regulasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Personal development",
            "Emotional intelligence",
            "Mindfulness",
            "Self-improvement",
        ],
        learning_resources: [
            {
                title: "Mindfulness and Self-Awareness",
                url: "https://www.coursera.org/learn/mindfulness-wellbeing-performance",
                type: "course",
            },
            {
                title: "Developing Self-Awareness",
                url: "https://www.mindtools.com/pages/article/developing-self-awareness.htm",
                type: "article",
            },
        ],
        career_paths: [
            "Coach",
            "Counselor",
            "Wellness Specialist",
            "Personal Development Trainer",
        ],
    },
    {
        id: "introspektif-regulasi-001",
        name: "Regulasi Emosi",
        sphere_id: 7,
        description: "Kemampuan mengelola emosi secara efektif",
        traits: ["self-controlled", "balanced", "resilient", "composed"],
        related_skills: [
            "introspektif-awareness-001",
            "interpersonal-empati-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Stress management",
            "Conflict resolution",
            "Leadership",
            "Crisis handling",
        ],
        learning_resources: [
            {
                title: "Emotional Intelligence at Work",
                url: "https://www.edx.org/learn/emotional-intelligence/university-of-california-berkeley-empathy-and-emotional-intelligence-at-work",
                type: "course",
            },
            {
                title: "Managing Emotions in Times of Uncertainty & Stress",
                url: "https://www.coursera.org/learn/managing-emotions-uncertainty-stress",
                type: "course",
            },
        ],
        career_paths: [
            "Therapist",
            "Crisis Manager",
            "HR Professional",
            "Leadership Coach",
        ],
    },
    {
        id: "fisik-refleks-001",
        name: "Refleks Cepat",
        sphere_id: 4,
        description: "Kemampuan bereaksi dengan cepat terhadap stimulus",
        traits: ["quick", "responsive", "alert", "coordinated"],
        related_skills: ["fisik-koordinasi-001", "fisik-kinestetik-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Sports",
            "Gaming",
            "Emergency response",
            "Driving",
        ],
        learning_resources: [
            {
                title: "Reaction Time Training",
                url: "https://www.scienceforsport.com/reaction-time/",
                type: "article",
            },
            {
                title: "Improving Your Reflexes",
                url: "https://www.udemy.com/course/improving-your-reflexes/",
                type: "course",
            },
        ],
        career_paths: [
            "Professional Athlete",
            "Esports Player",
            "Stunt Performer",
            "Emergency Responder",
        ],
    },
    {
        id: "manajerial-decision-001",
        name: "Pengambilan Keputusan",
        sphere_id: 5,
        description: "Kemampuan membuat keputusan yang tepat dan efektif",
        traits: ["decisive", "analytical", "confident", "rational"],
        related_skills: ["manajerial-leadership-001", "kognitif-logika-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Business decisions",
            "Crisis management",
            "Resource allocation",
            "Strategic planning",
        ],
        learning_resources: [
            {
                title: "Decision-Making and Problem Solving",
                url: "https://www.coursera.org/learn/decision-making",
                type: "course",
            },
            {
                title: "Smart Choices: A Practical Guide to Making Better Decisions",
                url: "https://www.amazon.com/Smart-Choices-Practical-Making-Decisions/dp/1633691047",
                type: "book",
            },
        ],
        career_paths: [
            "Executive",
            "Business Strategist",
            "Risk Manager",
            "Operations Director",
        ],
    },
    {
        id: "interpersonal-networking-001",
        name: "Networking",
        sphere_id: 3,
        description: "Kemampuan membangun dan memelihara hubungan profesional",
        traits: ["sociable", "engaging", "strategic", "personable"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "interpersonal-empati-001",
        ],
        difficulty_curve: 0.6,
        practical_applications: [
            "Business development",
            "Career advancement",
            "Community building",
            "Collaboration",
        ],
        learning_resources: [
            {
                title: "Networking for Career Success",
                url: "https://www.linkedin.com/learning/networking-for-career-success",
                type: "course",
            },
            {
                title: "How to Network: Building Professional Relationships",
                url: "https://www.futurelearn.com/courses/how-to-network",
                type: "course",
            },
        ],
        career_paths: [
            "Business Development Manager",
            "Community Manager",
            "Public Relations",
            "Sales Executive",
        ],
    },
    {
        id: "fisik-balance-001",
        name: "Keseimbangan",
        sphere_id: 4,
        description:
            "Kemampuan menjaga keseimbangan tubuh dalam berbagai posisi",
        traits: ["balanced", "stable", "controlled", "poised"],
        related_skills: ["fisik-koordinasi-001", "fisik-kinestetik-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Sports",
            "Dance",
            "Physical therapy",
            "Martial arts",
        ],
        learning_resources: [
            {
                title: "Balance Training",
                url: "https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/equipment/balance-training/",
                type: "exercises",
            },
            {
                title: "Yoga for Balance",
                url: "https://www.doyogawithme.com/yoga-classes/balance",
                type: "course",
            },
        ],
        career_paths: [
            "Yoga Instructor",
            "Physical Therapist",
            "Professional Dancer",
            "Athletic Trainer",
        ],
    },
    {
        id: "introspektif-refleksi-001",
        name: "Refleksi Diri",
        sphere_id: 7,
        description: "Kemampuan merefleksikan pengalaman dan pembelajaran",
        traits: ["reflective", "thoughtful", "analytical", "introspective"],
        related_skills: ["introspektif-awareness-001", "kognitif-kritis-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Personal growth",
            "Learning from experience",
            "Journaling",
            "Mindfulness practice",
        ],
        learning_resources: [
            {
                title: "The Power of Self-Reflection",
                url: "https://www.mindful.org/the-power-of-self-reflection/",
                type: "article",
            },
            {
                title: "Reflective Practice in the Digital Age",
                url: "https://www.futurelearn.com/courses/reflective-practice-in-the-digital-age",
                type: "course",
            },
        ],
        career_paths: [
            "Life Coach",
            "Educator",
            "Writer",
            "Personal Development Specialist",
        ],
    },
    {
        id: "kognitif-matematika-001",
        name: "Kemampuan Matematis",
        sphere_id: 1,
        description: "Kemampuan memahami dan mengaplikasikan konsep matematika",
        traits: ["analytical", "numerical", "precise", "logical"],
        related_skills: ["kognitif-logika-001", "kognitif-analisis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Financial analysis",
            "Statistical modeling",
            "Engineering",
            "Scientific research",
        ],
        learning_resources: [
            {
                title: "Khan Academy - Mathematics",
                url: "https://www.khanacademy.org/math",
                type: "interactive",
            },
            {
                title: "Introduction to Mathematical Thinking",
                url: "https://www.coursera.org/learn/mathematical-thinking",
                type: "course",
            },
        ],
        career_paths: [
            "Mathematician",
            "Statistician",
            "Financial Analyst",
            "Actuary",
        ],
    },
    {
        id: "tech-algorithms-001",
        name: "Pemikiran Algoritmik",
        sphere_id: 6,
        description:
            "Kemampuan merancang langkah-langkah sistematis untuk menyelesaikan masalah",
        traits: ["systematic", "logical", "structured", "analytical"],
        related_skills: ["tech-programming-001", "kognitif-logika-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Software development",
            "Process optimization",
            "System design",
            "Problem solving",
        ],
        learning_resources: [
            {
                title: "Algorithms Specialization",
                url: "https://www.coursera.org/specializations/algorithms",
                type: "course",
            },
            {
                title: "Introduction to Algorithms",
                url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/",
                type: "course",
            },
        ],
        career_paths: [
            "Algorithm Engineer",
            "Software Developer",
            "Data Scientist",
            "Research Scientist",
        ],
    },
    {
        id: "tech-debugging-001",
        name: "Debugging",
        sphere_id: 6,
        description:
            "Kemampuan mengidentifikasi dan memperbaiki masalah dalam sistem",
        traits: ["analytical", "detail-oriented", "persistent", "methodical"],
        related_skills: [
            "tech-programming-001",
            "tech-exploration-001",
            "kognitif-kritis-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Software development",
            "IT support",
            "System maintenance",
            "Quality assurance",
        ],
        learning_resources: [
            {
                title: "The Art of Debugging",
                url: "https://www.nostarch.com/debugging.htm",
                type: "book",
            },
            {
                title: "Debugging Techniques",
                url: "https://www.linkedin.com/learning/programming-foundations-debugging",
                type: "course",
            },
        ],
        career_paths: [
            "Software Developer",
            "QA Engineer",
            "DevOps Engineer",
            "IT Support Specialist",
        ],
    },
    {
        id: "tech-ui-ux-001",
        name: "Desain UI/UX",
        sphere_id: 6,
        description:
            "Kemampuan merancang antarmuka dan pengalaman pengguna yang efektif",
        traits: ["creative", "user-centered", "detail-oriented", "empathetic"],
        related_skills: ["kreatif-desain-001", "tech-programming-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Web design",
            "App development",
            "Product design",
            "User research",
        ],
        learning_resources: [
            {
                title: "UI/UX Design Specialization",
                url: "https://www.coursera.org/specializations/ui-ux-design",
                type: "course",
            },
            {
                title: "Don't Make Me Think",
                url: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",
                type: "book",
            },
        ],
        career_paths: [
            "UI Designer",
            "UX Designer",
            "Product Designer",
            "Interaction Designer",
        ],
    },
    {
        id: "kreatif-fotografi-001",
        name: "Fotografi",
        sphere_id: 2,
        description:
            "Kemampuan mengambil dan mengedit foto yang menarik dan bermakna",
        traits: ["visual", "creative", "detail-oriented", "observant"],
        related_skills: ["kreatif-desain-001", "kreatif-storytelling-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Content creation",
            "Documentation",
            "Art",
            "Marketing",
        ],
        learning_resources: [
            {
                title: "Photography Basics",
                url: "https://www.udemy.com/course/photography-masterclass-complete-guide-to-photography/",
                type: "course",
            },
            {
                title: "Digital Photography School",
                url: "https://digital-photography-school.com/",
                type: "resource",
            },
        ],
        career_paths: [
            "Photographer",
            "Content Creator",
            "Social Media Manager",
            "Photojournalist",
        ],
    },
    {
        id: "manajerial-presentasi-001",
        name: "Presentasi",
        sphere_id: 5,
        description:
            "Kemampuan menyampaikan informasi secara jelas dan menarik",
        traits: ["articulate", "confident", "organized", "engaging"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "kreatif-storytelling-001",
        ],
        difficulty_curve: 0.6,
        practical_applications: [
            "Business presentations",
            "Teaching",
            "Sales pitches",
            "Conference speaking",
        ],
        learning_resources: [
            {
                title: "Presentation Skills: Designing Presentation Slides",
                url: "https://www.linkedin.com/learning/presentation-skills-designing-presentation-slides",
                type: "course",
            },
            {
                title: "TED Talks: The Official TED Guide to Public Speaking",
                url: "https://www.amazon.com/TED-Talks-Official-Public-Speaking/dp/1328710289",
                type: "book",
            },
        ],
        career_paths: [
            "Public Speaker",
            "Trainer",
            "Sales Executive",
            "Educator",
        ],
    },
    // Skill baru dimulai di sini
    {
        id: "kognitif-research-001",
        name: "Penelitian Akademis",
        sphere_id: 1,
        description:
            "Kemampuan melakukan penelitian sistematis dan menganalisis literatur akademis",
        traits: ["methodical", "analytical", "detail-oriented", "curious"],
        related_skills: ["kognitif-kritis-001", "kognitif-analisis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Academic research",
            "Literature review",
            "Scientific investigation",
            "Policy analysis",
        ],
        learning_resources: [
            {
                title: "Research Methods",
                url: "https://www.coursera.org/learn/research-methods",
                type: "course",
            },
            {
                title: "How to Read a Paper",
                url: "https://www.bmj.com/content/315/7110/740",
                type: "article",
            },
        ],
        career_paths: [
            "Academic Researcher",
            "Research Analyst",
            "Policy Researcher",
            "PhD Candidate",
        ],
    },
    {
        id: "kognitif-sistemik-001",
        name: "Pemikiran Sistemik",
        sphere_id: 1,
        description:
            "Kemampuan memahami sistem kompleks dan hubungan antar komponennya",
        traits: ["holistic", "analytical", "integrative", "strategic"],
        related_skills: ["kognitif-kritis-001", "manajerial-planning-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Systems analysis",
            "Organizational design",
            "Environmental planning",
            "Policy development",
        ],
        learning_resources: [
            {
                title: "Systems Thinking: A Primer",
                url: "https://thesystemsthinker.com/systems-thinking-a-primer/",
                type: "article",
            },
            {
                title: "Systems Thinking in Practice",
                url: "https://www.open.edu/openlearn/science-maths-technology/engineering-technology/systems-thinking-practice/content-section-0",
                type: "course",
            },
        ],
        career_paths: [
            "Systems Analyst",
            "Policy Planner",
            "Organizational Consultant",
            "Sustainability Specialist",
        ],
    },
    {
        id: "kreatif-musik-001",
        name: "Musikalitas",
        sphere_id: 2,
        description: "Kemampuan memahami, menciptakan, dan mengapresiasi musik",
        traits: ["creative", "rhythmic", "expressive", "sensitive"],
        related_skills: ["kreatif-storytelling-001", "fisik-koordinasi-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Music composition",
            "Performance",
            "Sound design",
            "Music therapy",
        ],
        learning_resources: [
            {
                title: "Introduction to Music Theory",
                url: "https://www.coursera.org/learn/music-theory",
                type: "course",
            },
            {
                title: "Fundamentals of Music",
                url: "https://www.edx.org/learn/music/berklee-fundamentals-of-music-theory",
                type: "course",
            },
        ],
        career_paths: [
            "Musician",
            "Music Producer",
            "Composer",
            "Music Teacher",
        ],
    },
    {
        id: "kreatif-writing-001",
        name: "Penulisan Kreatif",
        sphere_id: 2,
        description: "Kemampuan mengekspresikan ide dan cerita melalui tulisan",
        traits: ["creative", "expressive", "imaginative", "articulate"],
        related_skills: [
            "kreatif-storytelling-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.6,
        practical_applications: [
            "Fiction writing",
            "Content creation",
            "Copywriting",
            "Scriptwriting",
        ],
        learning_resources: [
            {
                title: "Creative Writing Specialization",
                url: "https://www.coursera.org/specializations/creative-writing",
                type: "course",
            },
            {
                title: "MasterClass - Writing",
                url: "https://www.masterclass.com/categories/writing",
                type: "masterclass",
            },
        ],
        career_paths: [
            "Author",
            "Content Writer",
            "Copywriter",
            "Screenwriter",
        ],
    },
    {
        id: "interpersonal-coaching-001",
        name: "Coaching",
        sphere_id: 3,
        description:
            "Kemampuan membimbing dan mengembangkan potensi orang lain",
        traits: ["supportive", "insightful", "patient", "motivating"],
        related_skills: [
            "interpersonal-empati-001",
            "manajerial-leadership-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Career coaching",
            "Life coaching",
            "Sports coaching",
            "Executive coaching",
        ],
        learning_resources: [
            {
                title: "Coaching Skills for Managers",
                url: "https://www.coursera.org/learn/coaching-skills-for-managers",
                type: "course",
            },
            {
                title: "Co-Active Coaching",
                url: "https://www.amazon.com/Co-Active-Coaching-Changing-Business-Transforming/dp/1857885678",
                type: "book",
            },
        ],
        career_paths: [
            "Life Coach",
            "Executive Coach",
            "Career Coach",
            "Sports Coach",
        ],
    },
    {
        id: "interpersonal-teamwork-001",
        name: "Kerja Tim",
        sphere_id: 3,
        description:
            "Kemampuan bekerja secara efektif dalam kelompok untuk mencapai tujuan bersama",
        traits: ["collaborative", "adaptable", "supportive", "communicative"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "interpersonal-empati-001",
        ],
        difficulty_curve: 0.6,
        practical_applications: [
            "Project collaboration",
            "Team sports",
            "Group performances",
            "Community initiatives",
        ],
        learning_resources: [
            {
                title: "Teamwork Skills: Communicating Effectively in Groups",
                url: "https://www.coursera.org/learn/teamwork-skills-effective-communication",
                type: "course",
            },
            {
                title: "The Five Dysfunctions of a Team",
                url: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756",
                type: "book",
            },
        ],
        career_paths: [
            "Team Member",
            "Project Coordinator",
            "Collaborative Researcher",
            "Ensemble Performer",
        ],
    },
    {
        id: "fisik-endurance-001",
        name: "Daya Tahan Fisik",
        sphere_id: 4,
        description:
            "Kemampuan mempertahankan aktivitas fisik dalam jangka waktu yang lama",
        traits: ["enduring", "disciplined", "resilient", "energetic"],
        related_skills: ["fisik-koordinasi-001", "introspektif-regulasi-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Endurance sports",
            "Physical labor",
            "Performance arts",
            "Military training",
        ],
        learning_resources: [
            {
                title: "Endurance Training Fundamentals",
                url: "https://www.trainingpeaks.com/blog/endurance-training-fundamentals/",
                type: "article",
            },
            {
                title: "Science of Endurance Training",
                url: "https://www.udemy.com/course/science-of-endurance-training/",
                type: "course",
            },
        ],
        career_paths: [
            "Endurance Athlete",
            "Fitness Trainer",
            "Military Personnel",
            "Physical Performer",
        ],
    },
    {
        id: "fisik-spatial-001",
        name: "Kesadaran Spasial",
        sphere_id: 4,
        description:
            "Kemampuan memahami dan memanipulasi objek dalam ruang tiga dimensi",
        traits: ["spatial", "visual", "coordinated", "perceptive"],
        related_skills: ["fisik-koordinasi-001", "kreatif-desain-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Navigation",
            "Architecture",
            "Sculpture",
            "Sports",
        ],
        learning_resources: [
            {
                title: "Spatial Reasoning Skills",
                url: "https://www.lumosity.com/en/brain-games/spatial-reasoning/",
                type: "interactive",
            },
            {
                title: "Improving Spatial Visualization",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0360131516300549",
                type: "article",
            },
        ],
        career_paths: ["Architect", "Sculptor", "Pilot", "Surgeon"],
    },
    {
        id: "manajerial-conflict-001",
        name: "Manajemen Konflik",
        sphere_id: 5,
        description:
            "Kemampuan mengelola dan menyelesaikan konflik secara konstruktif",
        traits: ["diplomatic", "fair", "calm", "assertive"],
        related_skills: [
            "interpersonal-negosiasi-001",
            "introspektif-regulasi-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Workplace mediation",
            "Team management",
            "Customer relations",
            "Dispute resolution",
        ],
        learning_resources: [
            {
                title: "Conflict Management Specialization",
                url: "https://www.coursera.org/specializations/conflict-management",
                type: "course",
            },
            {
                title: "Difficult Conversations",
                url: "https://www.amazon.com/Difficult-Conversations-Discuss-What-Matters/dp/0143118447",
                type: "book",
            },
        ],
        career_paths: [
            "Mediator",
            "HR Manager",
            "Team Leader",
            "Conflict Resolution Specialist",
        ],
    },
    {
        id: "manajerial-change-001",
        name: "Manajemen Perubahan",
        sphere_id: 5,
        description:
            "Kemampuan memimpin dan mengelola proses perubahan dalam organisasi",
        traits: ["adaptable", "strategic", "resilient", "persuasive"],
        related_skills: [
            "manajerial-leadership-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.9,
        practical_applications: [
            "Organizational transformation",
            "Digital transformation",
            "Process improvement",
            "Crisis management",
        ],
        learning_resources: [
            {
                title: "Leading Change",
                url: "https://www.amazon.com/Leading-Change-New-Preface-Author/dp/1422186431",
                type: "book",
            },
            {
                title: "Change Management",
                url: "https://www.coursera.org/learn/change-management",
                type: "course",
            },
        ],
        career_paths: [
            "Change Manager",
            "Organizational Development Consultant",
            "Transformation Lead",
            "Executive",
        ],
    },
    {
        id: "tech-data-001",
        name: "Analisis Data Digital",
        sphere_id: 6,
        description:
            "Kemampuan mengumpulkan, mengolah, dan menganalisis data digital",
        traits: ["analytical", "technical", "detail-oriented", "methodical"],
        related_skills: ["tech-programming-001", "kognitif-analisis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Business intelligence",
            "Market research",
            "Scientific analysis",
            "Performance optimization",
        ],
        learning_resources: [
            {
                title: "Data Analysis with Python",
                url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
                type: "course",
            },
            {
                title: "Data Science Specialization",
                url: "https://www.coursera.org/specializations/jhu-data-science",
                type: "course",
            },
        ],
        career_paths: [
            "Data Analyst",
            "Business Intelligence Analyst",
            "Data Scientist",
            "Research Analyst",
        ],
    },
    {
        id: "tech-security-001",
        name: "Keamanan Digital",
        sphere_id: 6,
        description:
            "Kemampuan mengidentifikasi dan mengatasi risiko keamanan digital",
        traits: ["vigilant", "detail-oriented", "systematic", "ethical"],
        related_skills: ["tech-debugging-001", "kognitif-kritis-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Cybersecurity",
            "Risk assessment",
            "Security auditing",
            "Incident response",
        ],
        learning_resources: [
            {
                title: "Introduction to Cyber Security",
                url: "https://www.futurelearn.com/courses/introduction-to-cyber-security",
                type: "course",
            },
            {
                title: "Cybersecurity Specialization",
                url: "https://www.coursera.org/specializations/cyber-security",
                type: "course",
            },
        ],
        career_paths: [
            "Security Analyst",
            "Penetration Tester",
            "Security Consultant",
            "CISO",
        ],
    },
    {
        id: "introspektif-mindfulness-001",
        name: "Mindfulness",
        sphere_id: 7,
        description:
            "Kemampuan untuk hadir sepenuhnya dalam momen saat ini dengan kesadaran penuh",
        traits: ["present", "aware", "calm", "accepting"],
        related_skills: [
            "introspektif-awareness-001",
            "introspektif-regulasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Stress reduction",
            "Emotional regulation",
            "Focus enhancement",
            "Self-awareness",
        ],
        learning_resources: [
            {
                title: "Mindfulness-Based Stress Reduction",
                url: "https://palousemindfulness.com/",
                type: "course",
            },
            {
                title: "Mindfulness: An Eight-Week Plan",
                url: "https://www.amazon.com/Mindfulness-Eight-Week-Finding-Peace-Frantic/dp/1609618955",
                type: "book",
            },
        ],
        career_paths: [
            "Mindfulness Coach",
            "Wellness Specialist",
            "Meditation Teacher",
            "Therapist",
        ],
    },
    {
        id: "introspektif-resilience-001",
        name: "Ketahanan Mental",
        sphere_id: 7,
        description:
            "Kemampuan untuk bangkit kembali dari kesulitan dan beradaptasi dengan perubahan",
        traits: ["resilient", "adaptable", "optimistic", "persistent"],
        related_skills: ["introspektif-regulasi-001", "manajerial-change-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Stress management",
            "Crisis response",
            "Personal growth",
            "Change adaptation",
        ],
        learning_resources: [
            {
                title: "Resilience Skills",
                url: "https://www.coursera.org/learn/resilience-uncertainty",
                type: "course",
            },
            {
                title: "Option B: Facing Adversity",
                url: "https://www.amazon.com/Option-Adversity-Building-Resilience-Finding/dp/1524732680",
                type: "book",
            },
        ],
        career_paths: [
            "Resilience Coach",
            "Crisis Counselor",
            "Change Management Specialist",
            "Mental Health Professional",
        ],
    },
    {
        id: "kognitif-forecasting-001",
        name: "Peramalan dan Prediksi",
        sphere_id: 1,
        description: "Kemampuan membuat prediksi berdasarkan data dan tren",
        traits: [
            "analytical",
            "forward-thinking",
            "probabilistic",
            "systematic",
        ],
        related_skills: ["kognitif-analisis-001", "kognitif-sistemik-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Business forecasting",
            "Risk assessment",
            "Strategic planning",
            "Scientific prediction",
        ],
        learning_resources: [
            {
                title: "Forecasting: Principles and Practice",
                url: "https://otexts.com/fpp3/",
                type: "book",
            },
            {
                title: "Superforecasting",
                url: "https://www.amazon.com/Superforecasting-Science-Prediction-Philip-Tetlock/dp/0804136718",
                type: "book",
            },
        ],
        career_paths: [
            "Forecasting Analyst",
            "Risk Manager",
            "Strategic Planner",
            "Economist",
        ],
    },
    {
        id: "kreatif-improv-001",
        name: "Improvisasi",
        sphere_id: 2,
        description: "Kemampuan beradaptasi dan menciptakan secara spontan",
        traits: ["spontaneous", "adaptable", "creative", "present"],
        related_skills: [
            "kreatif-storytelling-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Performing arts",
            "Public speaking",
            "Problem solving",
            "Teaching",
        ],
        learning_resources: [
            {
                title: "The Art of Improvisation",
                url: "https://www.secondcity.com/courses/",
                type: "course",
            },
            {
                title: "Improv Wisdom",
                url: "https://www.amazon.com/Improv-Wisdom-Dont-Prepare-Just/dp/1400081882",
                type: "book",
            },
        ],
        career_paths: [
            "Performer",
            "Public Speaker",
            "Facilitator",
            "Creative Professional",
        ],
    },
    {
        id: "interpersonal-cultural-001",
        name: "Kecerdasan Budaya",
        sphere_id: 3,
        description:
            "Kemampuan memahami dan beradaptasi dengan perbedaan budaya",
        traits: ["open-minded", "adaptable", "respectful", "curious"],
        related_skills: [
            "interpersonal-empati-001",
            "introspektif-awareness-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "International business",
            "Diplomacy",
            "Cross-cultural teamwork",
            "Global marketing",
        ],
        learning_resources: [
            {
                title: "Cultural Intelligence",
                url: "https://www.edx.org/learn/cultural-intelligence/queensland-university-of-technology-cultural-intelligence-engaging-with-asia",
                type: "course",
            },
            {
                title: "The Culture Map",
                url: "https://www.amazon.com/Culture-Map-Breaking-Invisible-Boundaries/dp/1610392507",
                type: "book",
            },
        ],
        career_paths: [
            "International Business Manager",
            "Diplomat",
            "Cross-cultural Trainer",
            "Global HR Specialist",
        ],
    },
    {
        id: "fisik-crafting-001",
        name: "Kerajinan Tangan",
        sphere_id: 4,
        description:
            "Kemampuan membuat dan memanipulasi objek fisik dengan presisi",
        traits: ["dexterous", "patient", "detail-oriented", "creative"],
        related_skills: ["fisik-koordinasi-001", "kreatif-desain-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Craftsmanship",
            "DIY projects",
            "Art creation",
            "Repair work",
        ],
        learning_resources: [
            {
                title: "Craftsy",
                url: "https://www.craftsy.com/",
                type: "platform",
            },
            {
                title: "The Art of Woodworking",
                url: "https://www.amazon.com/Complete-Manual-Woodworking-Albert-Jackson/dp/0679766111",
                type: "book",
            },
        ],
        career_paths: [
            "Craftsman",
            "Artisan",
            "Maker",
            "Restoration Specialist",
        ],
    },
    {
        id: "manajerial-resource-001",
        name: "Manajemen Sumber Daya",
        sphere_id: 5,
        description:
            "Kemampuan mengalokasikan dan mengoptimalkan penggunaan sumber daya",
        traits: ["efficient", "strategic", "analytical", "practical"],
        related_skills: ["manajerial-planning-001", "manajerial-decision-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Budget management",
            "Resource allocation",
            "Supply chain optimization",
            "Project management",
        ],
        learning_resources: [
            {
                title: "Resource Management",
                url: "https://www.coursera.org/learn/resource-management",
                type: "course",
            },
            {
                title: "Operations Management",
                url: "https://www.edx.org/learn/operations-management/mitx-supply-chain-management-dynamics",
                type: "course",
            },
        ],
        career_paths: [
            "Operations Manager",
            "Resource Planner",
            "Supply Chain Manager",
            "Project Manager",
        ],
    },
    {
        id: "tech-digital-content-001",
        name: "Produksi Konten Digital",
        sphere_id: 6,
        description:
            "Kemampuan membuat dan mengedit konten digital berkualitas tinggi",
        traits: ["creative", "technical", "detail-oriented", "trend-aware"],
        related_skills: ["tech-ui-ux-001", "kreatif-storytelling-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Video production",
            "Podcast creation",
            "Digital marketing",
            "Social media content",
        ],
        learning_resources: [
            {
                title: "Digital Content Creation",
                url: "https://www.udemy.com/course/digital-content-creation/",
                type: "course",
            },
            {
                title: "YouTube Creator Academy",
                url: "https://creatoracademy.youtube.com/",
                type: "resource",
            },
        ],
        career_paths: [
            "Content Creator",
            "Digital Marketer",
            "Social Media Manager",
            "Multimedia Producer",
        ],
    },
    {
        id: "introspektif-growth-001",
        name: "Pola Pikir Berkembang",
        sphere_id: 7,
        description:
            "Kemampuan melihat tantangan sebagai kesempatan untuk belajar dan berkembang",
        traits: ["growth-oriented", "persistent", "curious", "adaptable"],
        related_skills: [
            "introspektif-resilience-001",
            "introspektif-refleksi-001",
        ],
        difficulty_curve: 0.6,
        practical_applications: [
            "Learning new skills",
            "Career development",
            "Personal growth",
            "Adapting to change",
        ],
        learning_resources: [
            {
                title: "Mindset: The New Psychology of Success",
                url: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
                type: "book",
            },
            {
                title: "Learning How to Learn",
                url: "https://www.coursera.org/learn/learning-how-to-learn",
                type: "course",
            },
        ],
        career_paths: [
            "Lifelong Learner",
            "Career Changer",
            "Entrepreneur",
            "Innovation Specialist",
        ],
    },
    // 20 skills baru dimulai di sini
    {
        id: "kognitif-abstraksi-001",
        name: "Pemikiran Abstrak",
        sphere_id: 1,
        description:
            "Kemampuan memahami konsep abstrak dan menerapkannya dalam situasi nyata",
        traits: ["conceptual", "philosophical", "theoretical", "imaginative"],
        related_skills: ["kognitif-sistemik-001", "kognitif-kritis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Theoretical research",
            "Concept development",
            "Philosophy",
            "Advanced mathematics",
        ],
        learning_resources: [
            {
                title: "Abstract Thinking in Mathematics",
                url: "https://www.coursera.org/learn/mathematical-thinking",
                type: "course",
            },
            {
                title: "Philosophy and Critical Thinking",
                url: "https://www.edx.org/learn/philosophy/the-university-of-queensland-philosophy-and-critical-thinking",
                type: "course",
            },
        ],
        career_paths: [
            "Philosopher",
            "Theoretical Scientist",
            "Mathematician",
            "Conceptual Artist",
        ],
    },
    {
        id: "kognitif-pattern-001",
        name: "Pengenalan Pola",
        sphere_id: 1,
        description:
            "Kemampuan mengidentifikasi pola dan hubungan dalam data atau informasi",
        traits: ["observant", "analytical", "intuitive", "systematic"],
        related_skills: ["kognitif-analisis-001", "tech-data-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Data analysis",
            "Market trends",
            "Scientific discovery",
            "Diagnostic medicine",
        ],
        learning_resources: [
            {
                title: "Pattern Recognition and Machine Learning",
                url: "https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/",
                type: "book",
            },
            {
                title: "Data Mining: Practical Machine Learning Tools and Techniques",
                url: "https://www.cs.waikato.ac.nz/ml/weka/book.html",
                type: "book",
            },
        ],
        career_paths: [
            "Data Scientist",
            "Market Analyst",
            "Research Scientist",
            "Diagnostic Specialist",
        ],
    },
    {
        id: "kreatif-3d-001",
        name: "Desain 3D",
        sphere_id: 2,
        description:
            "Kemampuan membuat dan memanipulasi model dan lingkungan tiga dimensi",
        traits: ["spatial", "creative", "technical", "detail-oriented"],
        related_skills: ["kreatif-desain-001", "fisik-spatial-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "3D modeling",
            "Animation",
            "Game design",
            "Architecture visualization",
        ],
        learning_resources: [
            {
                title: "Blender Fundamentals",
                url: "https://www.blender.org/support/tutorials/",
                type: "tutorial",
            },
            {
                title: "3D Modeling & Animation",
                url: "https://www.udemy.com/course/blendertutorial/",
                type: "course",
            },
        ],
        career_paths: [
            "3D Artist",
            "Game Designer",
            "Architectural Visualizer",
            "Animation Specialist",
        ],
    },
    {
        id: "kreatif-culinary-001",
        name: "Seni Kuliner",
        sphere_id: 2,
        description:
            "Kemampuan menciptakan dan menyajikan makanan dengan kreativitas dan keahlian",
        traits: [
            "creative",
            "detail-oriented",
            "experimental",
            "sensory-aware",
        ],
        related_skills: ["kreatif-inovasi-001", "fisik-koordinasi-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Cooking",
            "Food styling",
            "Recipe development",
            "Culinary arts",
        ],
        learning_resources: [
            {
                title: "Culinary Arts Fundamentals",
                url: "https://www.masterclass.com/categories/culinary-arts",
                type: "masterclass",
            },
            {
                title: "The Science of Cooking",
                url: "https://www.edx.org/learn/science/harvard-university-science-cooking-from-haute-cuisine-to-soft-matter-science-chemistry",
                type: "course",
            },
        ],
        career_paths: [
            "Chef",
            "Food Stylist",
            "Recipe Developer",
            "Culinary Instructor",
        ],
    },
    {
        id: "interpersonal-persuasion-001",
        name: "Persuasi",
        sphere_id: 3,
        description:
            "Kemampuan mempengaruhi pendapat dan perilaku orang lain secara efektif",
        traits: ["persuasive", "strategic", "empathetic", "articulate"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "interpersonal-negosiasi-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Sales",
            "Marketing",
            "Negotiation",
            "Public speaking",
        ],
        learning_resources: [
            {
                title: "The Art of Persuasion",
                url: "https://www.coursera.org/learn/persuasion-influence",
                type: "course",
            },
            {
                title: "Influence: The Psychology of Persuasion",
                url: "https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X",
                type: "book",
            },
        ],
        career_paths: [
            "Sales Executive",
            "Marketing Strategist",
            "Political Consultant",
            "Negotiator",
        ],
    },
    {
        id: "interpersonal-mentoring-001",
        name: "Mentoring",
        sphere_id: 3,
        description:
            "Kemampuan membimbing dan mengembangkan orang lain melalui hubungan jangka panjang",
        traits: ["supportive", "experienced", "patient", "insightful"],
        related_skills: [
            "interpersonal-coaching-001",
            "manajerial-leadership-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Professional development",
            "Knowledge transfer",
            "Career guidance",
            "Skill development",
        ],
        learning_resources: [
            {
                title: "Effective Mentoring Relationships",
                url: "https://www.mindtools.com/pages/article/newCDV_72.htm",
                type: "article",
            },
            {
                title: "The Mentor's Guide",
                url: "https://www.amazon.com/Mentors-Guide-Facilitating-Effective-Relationships/dp/1118103483",
                type: "book",
            },
        ],
        career_paths: [
            "Mentor",
            "Career Advisor",
            "Professional Development Specialist",
            "Training Manager",
        ],
    },
    {
        id: "fisik-precision-001",
        name: "Presisi Gerakan",
        sphere_id: 4,
        description:
            "Kemampuan melakukan gerakan halus dengan tingkat akurasi tinggi",
        traits: ["precise", "controlled", "focused", "dexterous"],
        related_skills: ["fisik-koordinasi-001", "fisik-crafting-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Surgery",
            "Fine arts",
            "Watchmaking",
            "Instrument playing",
        ],
        learning_resources: [
            {
                title: "Fine Motor Skills Development",
                url: "https://www.healthline.com/health/fine-motor-skills",
                type: "article",
            },
            {
                title: "Precision Movement Training",
                url: "https://precisionmovement.coach/",
                type: "resource",
            },
        ],
        career_paths: ["Surgeon", "Jeweler", "Watchmaker", "Microscopist"],
    },
    {
        id: "fisik-rhythm-001",
        name: "Kepekaan Ritme",
        sphere_id: 4,
        description:
            "Kemampuan merasakan, mengikuti, dan menciptakan pola ritme",
        traits: ["rhythmic", "coordinated", "musical", "timing-aware"],
        related_skills: ["fisik-koordinasi-001", "kreatif-musik-001"],
        difficulty_curve: 0.6,
        practical_applications: [
            "Music performance",
            "Dance",
            "Public speaking",
            "Athletic timing",
        ],
        learning_resources: [
            {
                title: "Rhythm Training for Musicians",
                url: "https://www.musicradar.com/how-to/rhythm-training-for-guitarists",
                type: "tutorial",
            },
            {
                title: "The Rhythm Gym",
                url: "https://www.amazon.com/Rhythm-Gym-Mark-Wessels/dp/1598067133",
                type: "book",
            },
        ],
        career_paths: ["Musician", "Dancer", "Choreographer", "Music Teacher"],
    },
    {
        id: "manajerial-feedback-001",
        name: "Pemberian Feedback",
        sphere_id: 5,
        description:
            "Kemampuan memberikan umpan balik yang konstruktif dan efektif",
        traits: ["tactful", "clear", "observant", "supportive"],
        related_skills: [
            "manajerial-leadership-001",
            "interpersonal-komunikasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Performance reviews",
            "Coaching",
            "Team development",
            "Quality improvement",
        ],
        learning_resources: [
            {
                title: "Giving Effective Feedback",
                url: "https://www.linkedin.com/learning/giving-and-receiving-feedback",
                type: "course",
            },
            {
                title: "Thanks for the Feedback",
                url: "https://www.amazon.com/Thanks-Feedback-Science-Receiving-Well/dp/0670014664",
                type: "book",
            },
        ],
        career_paths: [
            "Manager",
            "Team Leader",
            "HR Professional",
            "Quality Assurance Specialist",
        ],
    },
    {
        id: "manajerial-agile-001",
        name: "Manajemen Agile",
        sphere_id: 5,
        description:
            "Kemampuan mengelola proyek dengan pendekatan adaptif dan iteratif",
        traits: ["adaptable", "collaborative", "iterative", "customer-focused"],
        related_skills: [
            "manajerial-planning-001",
            "interpersonal-teamwork-001",
        ],
        difficulty_curve: 0.8,
        practical_applications: [
            "Software development",
            "Product management",
            "Innovation projects",
            "Startup operations",
        ],
        learning_resources: [
            {
                title: "Agile Project Management",
                url: "https://www.coursera.org/learn/agile-project-management",
                type: "course",
            },
            {
                title: "Scrum: The Art of Doing Twice the Work in Half the Time",
                url: "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X",
                type: "book",
            },
        ],
        career_paths: [
            "Agile Coach",
            "Scrum Master",
            "Product Owner",
            "Project Manager",
        ],
    },
    {
        id: "tech-cloud-001",
        name: "Komputasi Awan",
        sphere_id: 6,
        description:
            "Kemampuan merancang, mengelola, dan mengoptimalkan infrastruktur cloud",
        traits: ["technical", "scalable", "security-conscious", "cost-aware"],
        related_skills: ["tech-programming-001", "tech-security-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Cloud architecture",
            "DevOps",
            "Serverless computing",
            "Cloud migration",
        ],
        learning_resources: [
            {
                title: "AWS Certified Solutions Architect",
                url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
                type: "certification",
            },
            {
                title: "Google Cloud Platform Fundamentals",
                url: "https://cloud.google.com/training/courses/core-fundamentals",
                type: "course",
            },
        ],
        career_paths: [
            "Cloud Architect",
            "DevOps Engineer",
            "Cloud Security Specialist",
            "Site Reliability Engineer",
        ],
    },
    {
        id: "tech-ml-001",
        name: "Machine Learning",
        sphere_id: 6,
        description:
            "Kemampuan mengembangkan dan menerapkan algoritma pembelajaran mesin",
        traits: ["analytical", "mathematical", "programming", "data-driven"],
        related_skills: ["tech-programming-001", "kognitif-pattern-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Predictive analytics",
            "Computer vision",
            "Natural language processing",
            "Recommendation systems",
        ],
        learning_resources: [
            {
                title: "Machine Learning by Stanford",
                url: "https://www.coursera.org/learn/machine-learning",
                type: "course",
            },
            {
                title: "Deep Learning Specialization",
                url: "https://www.deeplearning.ai/deep-learning-specialization/",
                type: "course",
            },
        ],
        career_paths: [
            "Machine Learning Engineer",
            "AI Researcher",
            "Data Scientist",
            "ML Ops Engineer",
        ],
    },
    {
        id: "introspektif-focus-001",
        name: "Fokus dan Konsentrasi",
        sphere_id: 7,
        description:
            "Kemampuan mempertahankan perhatian dan konsentrasi dalam jangka waktu yang lama",
        traits: ["focused", "disciplined", "attentive", "present"],
        related_skills: [
            "introspektif-mindfulness-001",
            "introspektif-regulasi-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Deep work",
            "Study",
            "Meditation",
            "Complex problem solving",
        ],
        learning_resources: [
            {
                title: "Deep Work: Rules for Focused Success",
                url: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
                type: "book",
            },
            {
                title: "Learning How to Learn",
                url: "https://www.coursera.org/learn/learning-how-to-learn",
                type: "course",
            },
        ],
        career_paths: ["Researcher", "Writer", "Programmer", "Analyst"],
    },
    {
        id: "introspektif-purpose-001",
        name: "Orientasi Tujuan",
        sphere_id: 7,
        description:
            "Kemampuan menetapkan dan mengejar tujuan jangka panjang dengan konsisten",
        traits: ["purposeful", "determined", "visionary", "disciplined"],
        related_skills: ["introspektif-growth-001", "manajerial-planning-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Career planning",
            "Personal development",
            "Project completion",
            "Life design",
        ],
        learning_resources: [
            {
                title: "Goal Setting and Achievement",
                url: "https://www.mindtools.com/page6.html",
                type: "resource",
            },
            {
                title: "Atomic Habits",
                url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
                type: "book",
            },
        ],
        career_paths: [
            "Entrepreneur",
            "Executive",
            "Life Coach",
            "Professional Athlete",
        ],
    },
    {
        id: "kognitif-ethical-001",
        name: "Penalaran Etis",
        sphere_id: 1,
        description:
            "Kemampuan menganalisis dan menyelesaikan dilema etis dengan prinsip yang jelas",
        traits: ["principled", "reflective", "fair", "analytical"],
        related_skills: ["kognitif-kritis-001", "introspektif-refleksi-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Ethical decision making",
            "Policy development",
            "Leadership",
            "Research ethics",
        ],
        learning_resources: [
            {
                title: "Justice: What's the Right Thing to Do?",
                url: "https://www.edx.org/learn/ethics/harvard-university-justice",
                type: "course",
            },
            {
                title: "Practical Ethics",
                url: "https://www.amazon.com/Practical-Ethics-Peter-Singer/dp/0521707684",
                type: "book",
            },
        ],
        career_paths: [
            "Ethicist",
            "Policy Advisor",
            "Compliance Officer",
            "Ethics Consultant",
        ],
    },
    {
        id: "kreatif-game-001",
        name: "Desain Game",
        sphere_id: 2,
        description:
            "Kemampuan merancang pengalaman interaktif yang menarik dan bermakna",
        traits: ["creative", "systems-thinker", "player-focused", "iterative"],
        related_skills: ["kreatif-storytelling-001", "tech-ui-ux-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Video game design",
            "Gamification",
            "Educational games",
            "Interactive experiences",
        ],
        learning_resources: [
            {
                title: "The Art of Game Design",
                url: "https://www.amazon.com/Art-Game-Design-Book-Lenses/dp/0123694965",
                type: "book",
            },
            {
                title: "Game Design and Development",
                url: "https://www.coursera.org/specializations/game-design-and-development",
                type: "course",
            },
        ],
        career_paths: [
            "Game Designer",
            "Level Designer",
            "Narrative Designer",
            "UX Designer for Games",
        ],
    },
    {
        id: "interpersonal-teaching-001",
        name: "Pengajaran",
        sphere_id: 3,
        description:
            "Kemampuan mentransfer pengetahuan dan keterampilan kepada orang lain secara efektif",
        traits: ["clear", "patient", "adaptable", "knowledgeable"],
        related_skills: [
            "interpersonal-komunikasi-001",
            "interpersonal-coaching-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Education",
            "Training",
            "Mentoring",
            "Knowledge sharing",
        ],
        learning_resources: [
            {
                title: "Becoming a Better Teacher",
                url: "https://www.edx.org/learn/teaching/university-of-michigan-becoming-a-more-effective-teacher",
                type: "course",
            },
            {
                title: "Make It Stick: The Science of Successful Learning",
                url: "https://www.amazon.com/Make-Stick-Science-Successful-Learning/dp/0674729013",
                type: "book",
            },
        ],
        career_paths: [
            "Teacher",
            "Trainer",
            "Instructional Designer",
            "Educational Consultant",
        ],
    },
    {
        id: "fisik-flexibility-001",
        name: "Fleksibilitas Fisik",
        sphere_id: 4,
        description:
            "Kemampuan menggerakkan sendi dan otot dalam rentang gerak yang luas",
        traits: ["flexible", "body-aware", "disciplined", "patient"],
        related_skills: ["fisik-koordinasi-001", "fisik-balance-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Yoga",
            "Dance",
            "Athletics",
            "Physical therapy",
        ],
        learning_resources: [
            {
                title: "Flexibility Training",
                url: "https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/flexibility-exercises/",
                type: "resource",
            },
            {
                title: "Science of Stretching",
                url: "https://www.amazon.com/Science-Stretching-Alex-Reid/dp/1905367295",
                type: "book",
            },
        ],
        career_paths: [
            "Yoga Instructor",
            "Physical Therapist",
            "Dancer",
            "Fitness Trainer",
        ],
    },
    {
        id: "manajerial-risk-001",
        name: "Manajemen Risiko",
        sphere_id: 5,
        description:
            "Kemampuan mengidentifikasi, menilai, dan mengelola risiko secara efektif",
        traits: ["analytical", "forward-thinking", "cautious", "strategic"],
        related_skills: ["manajerial-decision-001", "kognitif-forecasting-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Business planning",
            "Investment",
            "Project management",
            "Security planning",
        ],
        learning_resources: [
            {
                title: "Risk Management Principles and Practices",
                url: "https://www.coursera.org/learn/risk-management",
                type: "course",
            },
            {
                title: "Against the Gods: The Remarkable Story of Risk",
                url: "https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639",
                type: "book",
            },
        ],
        career_paths: [
            "Risk Manager",
            "Insurance Underwriter",
            "Compliance Officer",
            "Security Consultant",
        ],
    },
    {
        id: "tech-blockchain-001",
        name: "Teknologi Blockchain",
        sphere_id: 6,
        description:
            "Kemampuan memahami dan mengembangkan aplikasi berbasis teknologi blockchain",
        traits: [
            "technical",
            "innovative",
            "security-focused",
            "distributed-systems-aware",
        ],
        related_skills: ["tech-programming-001", "tech-security-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Cryptocurrency",
            "Smart contracts",
            "Supply chain tracking",
            "Digital identity",
        ],
        learning_resources: [
            {
                title: "Blockchain Basics",
                url: "https://www.coursera.org/learn/blockchain-basics",
                type: "course",
            },
            {
                title: "Mastering Blockchain",
                url: "https://www.amazon.com/Mastering-Blockchain-distributed-consensus-cryptocurrencies/dp/1839213191",
                type: "book",
            },
        ],
        career_paths: [
            "Blockchain Developer",
            "Smart Contract Engineer",
            "Crypto Economist",
            "Blockchain Consultant",
        ],
    },
    {
        id: "introspektif-intuition-001",
        name: "Intuisi",
        sphere_id: 7,
        description:
            "Kemampuan memahami atau mengetahui sesuatu tanpa penalaran sadar",
        traits: ["intuitive", "perceptive", "insightful", "pattern-sensitive"],
        related_skills: ["introspektif-awareness-001", "kognitif-pattern-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Decision making",
            "Creative problem solving",
            "People reading",
            "Threat detection",
        ],
        learning_resources: [
            {
                title: "Thinking, Fast and Slow",
                url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
                type: "book",
            },
            {
                title: "The Power of Intuition",
                url: "https://www.amazon.com/Power-Intuition-Feelings-Better-Decisions/dp/0385502893",
                type: "book",
            },
        ],
        career_paths: [
            "Executive",
            "Investigator",
            "Counselor",
            "Creative Director",
        ],
    },
    {
        id: "kognitif-synthesis-001",
        name: "Sintesis Informasi",
        sphere_id: 1,
        description:
            "Kemampuan menggabungkan berbagai informasi untuk membentuk pemahaman yang koheren",
        traits: ["integrative", "analytical", "holistic", "conceptual"],
        related_skills: ["kognitif-sistemik-001", "kognitif-kritis-001"],
        difficulty_curve: 0.8,
        practical_applications: [
            "Research synthesis",
            "Literature review",
            "Interdisciplinary studies",
            "Complex problem solving",
        ],
        learning_resources: [
            {
                title: "Synthesizing Research",
                url: "https://www.amazon.com/Synthesizing-Research-Guide-Literature-Reviews/dp/0761913483",
                type: "book",
            },
            {
                title: "The Craft of Research",
                url: "https://www.amazon.com/Research-Chicago-Writing-Editing-Publishing/dp/0226065669",
                type: "book",
            },
        ],
        career_paths: [
            "Research Scientist",
            "Academic",
            "Policy Analyst",
            "Intelligence Analyst",
        ],
    },
    {
        id: "kognitif-spatial-reasoning-001",
        name: "Penalaran Spasial",
        sphere_id: 1,
        description:
            "Kemampuan memahami dan memanipulasi objek dalam ruang mental",
        traits: ["visual", "spatial", "geometric", "3d-thinking"],
        related_skills: ["fisik-spatial-001", "kreatif-3d-001"],
        difficulty_curve: 0.7,
        practical_applications: [
            "Engineering design",
            "Architecture",
            "Navigation",
            "Geometric problem solving",
        ],
        learning_resources: [
            {
                title: "Spatial Reasoning Practice",
                url: "https://www.psychometric-success.com/aptitude-tests/spatial-ability-tests.htm",
                type: "exercises",
            },
            {
                title: "Visual-Spatial Thinking",
                url: "https://www.amazon.com/Upside-Down-Brilliance-Visual-Spatial-Learner/dp/0967668719",
                type: "book",
            },
        ],
        career_paths: ["Architect", "Engineer", "Graphic Designer", "Surgeon"],
    },
    {
        id: "kreatif-innovation-strategy-001",
        name: "Strategi Inovasi",
        sphere_id: 2,
        description:
            "Kemampuan mengembangkan pendekatan sistematis untuk inovasi dan kreativitas",
        traits: ["strategic", "creative", "methodical", "visionary"],
        related_skills: ["kreatif-inovasi-001", "manajerial-planning-001"],
        difficulty_curve: 0.9,
        practical_applications: [
            "Product innovation",
            "Business model innovation",
            "R&D management",
            "Creative leadership",
        ],
        learning_resources: [
            {
                title: "Innovation and Entrepreneurship",
                url: "https://www.amazon.com/Innovation-Entrepreneurship-Peter-F-Drucker/dp/0060851139",
                type: "book",
            },
            {
                title: "Strategic Innovation",
                url: "https://www.coursera.org/learn/strategic-innovation",
                type: "course",
            },
        ],
        career_paths: [
            "Innovation Director",
            "R&D Manager",
            "Chief Innovation Officer",
            "Design Strategist",
        ],
    },
    {
        id: "kreatif-visual-thinking-001",
        name: "Pemikiran Visual",
        sphere_id: 2,
        description:
            "Kemampuan menggunakan gambar dan visualisasi untuk memahami dan mengkomunikasikan ide",
        traits: ["visual", "creative", "communicative", "conceptual"],
        related_skills: [
            "kreatif-desain-001",
            "kognitif-spatial-reasoning-001",
        ],
        difficulty_curve: 0.7,
        practical_applications: [
            "Information design",
            "Visual facilitation",
            "Concept mapping",
            "Visual storytelling",
        ],
        learning_resources: [
            {
                title: "The Back of the Napkin",
                url: "https://www.amazon.com/Back-Napkin-Expanded-Problems-Pictures/dp/1591842697",
                type: "book",
            },
            {
                title: "Visual Thinking Strategies",
                url: "https://vtshome.org/",
                type: "resource",
            },
        ],
        career_paths: [
            "Information Designer",
            "Visual Facilitator",
            "UX Designer",
            "Visual Strategist",
        ],
    },
];

export const questions: Question[] = [
    // Existing questions...
    // (Keeping all existing questions from the previous version)
    {
        id: "q-tech-001",
        text: "Apakah Anda menikmati memecahkan teka-teki logika?",
        follow_up_text:
            "Seberapa sering Anda menghabiskan waktu untuk teka-teki logika?",
        linked_skills: {
            "tech-programming-001": 0.7,
            "kognitif-logika-001": 0.9,
            "kognitif-matematika-001": 0.5,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "yes",
                text: "Ya, sangat",
                weight: 1.0,
            },
            {
                id: "somewhat",
                text: "Agak menikmati",
                weight: 0.7,
            },
            {
                id: "neutral",
                text: "Biasa saja",
                weight: 0.4,
            },
            {
                id: "not_really",
                text: "Tidak terlalu",
                weight: 0.2,
            },
            {
                id: "no",
                text: "Tidak sama sekali",
                weight: 0.0,
            },
        ],
        tags: ["logical", "analytical", "problem-solving"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-creative-001",
        text: "Seberapa sering Anda menemukan solusi kreatif untuk masalah yang tidak biasa?",
        linked_skills: {
            "kreatif-desain-001": 0.8,
            "tech-programming-001": 0.5,
            "kognitif-logika-001": 0.4,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["creative", "problem-solving", "innovation"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-interpersonal-001",
        text: "Apakah Anda merasa nyaman berbicara di depan banyak orang?",
        linked_skills: {
            "interpersonal-komunikasi-001": 0.9,
            "manajerial-leadership-001": 0.7,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_comfortable",
                text: "Sangat nyaman",
                weight: 1.0,
            },
            {
                id: "comfortable",
                text: "Nyaman",
                weight: 0.8,
            },
            {
                id: "neutral",
                text: "Biasa saja",
                weight: 0.5,
            },
            {
                id: "uncomfortable",
                text: "Tidak nyaman",
                weight: 0.2,
            },
            {
                id: "very_uncomfortable",
                text: "Sangat tidak nyaman",
                weight: 0.0,
            },
        ],
        tags: ["communication", "public-speaking", "confidence"],
        complexity: "easy",
        prerequisites: [],
    },
    {
        id: "q-leadership-001",
        text: "Apakah Anda cenderung mengambil peran kepemimpinan dalam situasi kelompok?",
        linked_skills: {
            "manajerial-leadership-001": 0.9,
            "interpersonal-komunikasi-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "always",
                text: "Selalu",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["leadership", "initiative", "group-dynamics"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-tech-002",
        text: "Seberapa cepat Anda belajar menggunakan teknologi atau aplikasi baru?",
        linked_skills: {
            "tech-programming-001": 0.8,
            "kreatif-desain-001": 0.5,
        },
        discriminative_value: 0.7,
        answer_options: [
            {
                id: "very_fast",
                text: "Sangat cepat",
                weight: 1.0,
            },
            {
                id: "fast",
                text: "Cepat",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "slow",
                text: "Lambat",
                weight: 0.2,
            },
            {
                id: "very_slow",
                text: "Sangat lambat",
                weight: 0.0,
            },
        ],
        tags: ["technology", "adaptability", "learning"],
        complexity: "easy",
        prerequisites: [],
    },
    {
        id: "q-kognitif-001",
        text: "Saat membaca artikel atau berita, apakah Anda secara otomatis mencari bukti pendukung untuk klaim yang dibuat?",
        linked_skills: {
            "kognitif-logika-001": 0.9,
            "kognitif-analisis-001": 0.8,
            "kognitif-kritis-001": 0.7,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "always",
                text: "Selalu",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["analytical", "critical-thinking", "information-processing"],
        complexity: "medium",
        prerequisites: [],
    },
    // Continuing with all existing questions...
    // Adding new questions related to the new skills
    {
        id: "q-research-001",
        text: "Seberapa baik Anda dalam mencari dan mengevaluasi sumber informasi akademis?",
        linked_skills: {
            "kognitif-research-001": 0.9,
            "kognitif-kritis-001": 0.7,
            "tech-data-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["research", "academic", "information-literacy"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-sistemik-001",
        text: "Seberapa mudah Anda memahami bagaimana perubahan pada satu bagian sistem dapat mempengaruhi keseluruhan?",
        linked_skills: {
            "kognitif-sistemik-001": 0.9,
            "kognitif-forecasting-001": 0.7,
            "manajerial-planning-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["systems-thinking", "holistic", "interconnections"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-musik-001",
        text: "Seberapa mudah Anda mengenali pola dan struktur dalam musik?",
        linked_skills: {
            "kreatif-musik-001": 0.9,
            "kognitif-analisis-001": 0.5,
            "fisik-koordinasi-001": 0.4,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["musical", "pattern-recognition", "auditory"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-writing-001",
        text: "Seberapa sering Anda menulis cerita, puisi, atau konten kreatif lainnya?",
        linked_skills: {
            "kreatif-writing-001": 0.9,
            "kreatif-storytelling-001": 0.8,
            "interpersonal-komunikasi-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["writing", "creative", "expression"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-coaching-001",
        text: "Seberapa baik Anda dalam membantu orang lain mengembangkan keterampilan atau mencapai tujuan mereka?",
        linked_skills: {
            "interpersonal-coaching-001": 0.9,
            "interpersonal-empati-001": 0.7,
            "manajerial-leadership-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["coaching", "mentoring", "development"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-teamwork-001",
        text: "Seberapa efektif Anda bekerja sebagai bagian dari tim?",
        linked_skills: {
            "interpersonal-teamwork-001": 0.9,
            "interpersonal-komunikasi-001": 0.7,
            "interpersonal-empati-001": 0.6,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["teamwork", "collaboration", "cooperation"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-endurance-001",
        text: "Seberapa baik Anda dalam mempertahankan aktivitas fisik untuk jangka waktu yang lama?",
        linked_skills: {
            "fisik-endurance-001": 0.9,
            "fisik-koordinasi-001": 0.6,
            "introspektif-regulasi-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["endurance", "stamina", "physical-fitness"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-spatial-001",
        text: "Seberapa mudah Anda mengorientasikan diri dalam lingkungan baru atau membaca peta?",
        linked_skills: {
            "fisik-spatial-001": 0.9,
            "kognitif-logika-001": 0.5,
            "fisik-koordinasi-001": 0.4,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["spatial-awareness", "navigation", "orientation"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-conflict-001",
        text: "Seberapa efektif Anda dalam menyelesaikan konflik antara orang lain?",
        linked_skills: {
            "manajerial-conflict-001": 0.9,
            "interpersonal-negosiasi-001": 0.8,
            "interpersonal-empati-001": 0.7,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["conflict-resolution", "mediation", "problem-solving"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-change-001",
        text: "Seberapa baik Anda dalam memimpin orang lain melalui perubahan atau transisi?",
        linked_skills: {
            "manajerial-change-001": 0.9,
            "manajerial-leadership-001": 0.8,
            "interpersonal-komunikasi-001": 0.7,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["change-management", "leadership", "adaptation"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-data-001",
        text: "Seberapa nyaman Anda menganalisis dan menginterpretasikan data digital?",
        linked_skills: {
            "tech-data-001": 0.9,
            "kognitif-analisis-001": 0.8,
            "tech-programming-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_comfortable",
                text: "Sangat nyaman",
                weight: 1.0,
            },
            {
                id: "comfortable",
                text: "Nyaman",
                weight: 0.8,
            },
            {
                id: "neutral",
                text: "Biasa saja",
                weight: 0.5,
            },
            {
                id: "uncomfortable",
                text: "Tidak nyaman",
                weight: 0.2,
            },
            {
                id: "very_uncomfortable",
                text: "Sangat tidak nyaman",
                weight: 0.0,
            },
        ],
        tags: ["data-analysis", "digital-literacy", "analytical"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-security-001",
        text: "Seberapa sadar Anda tentang risiko keamanan digital dan cara mengatasinya?",
        linked_skills: {
            "tech-security-001": 0.9,
            "tech-exploration-001": 0.6,
            "kognitif-kritis-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_aware",
                text: "Sangat sadar",
                weight: 1.0,
            },
            {
                id: "aware",
                text: "Sadar",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup sadar",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang sadar",
                weight: 0.2,
            },
            {
                id: "unaware",
                text: "Tidak sadar",
                weight: 0.0,
            },
        ],
        tags: ["cybersecurity", "digital-awareness", "risk-management"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-mindfulness-001",
        text: "Seberapa sering Anda mempraktikkan kesadaran penuh (mindfulness) dalam kehidupan sehari-hari?",
        linked_skills: {
            "introspektif-mindfulness-001": 0.9,
            "introspektif-awareness-001": 0.8,
            "introspektif-regulasi-001": 0.7,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["mindfulness", "presence", "awareness"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-resilience-001",
        text: "Seberapa cepat Anda pulih dari kegagalan atau kemunduran?",
        linked_skills: {
            "introspektif-resilience-001": 0.9,
            "introspektif-regulasi-001": 0.7,
            "introspektif-growth-001": 0.8,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_quickly",
                text: "Sangat cepat",
                weight: 1.0,
            },
            {
                id: "quickly",
                text: "Cepat",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "slowly",
                text: "Lambat",
                weight: 0.2,
            },
            {
                id: "very_slowly",
                text: "Sangat lambat",
                weight: 0.0,
            },
        ],
        tags: ["resilience", "recovery", "adaptability"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-forecasting-001",
        text: "Seberapa baik Anda dalam memprediksi hasil atau konsekuensi dari keputusan?",
        linked_skills: {
            "kognitif-forecasting-001": 0.9,
            "kognitif-sistemik-001": 0.7,
            "manajerial-decision-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["forecasting", "prediction", "decision-making"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-improv-001",
        text: "Seberapa nyaman Anda berimprovisasi atau beradaptasi dalam situasi yang tidak terencana?",
        linked_skills: {
            "kreatif-improv-001": 0.9,
            "kreatif-inovasi-001": 0.7,
            "interpersonal-komunikasi-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_comfortable",
                text: "Sangat nyaman",
                weight: 1.0,
            },
            {
                id: "comfortable",
                text: "Nyaman",
                weight: 0.8,
            },
            {
                id: "neutral",
                text: "Biasa saja",
                weight: 0.5,
            },
            {
                id: "uncomfortable",
                text: "Tidak nyaman",
                weight: 0.2,
            },
            {
                id: "very_uncomfortable",
                text: "Sangat tidak nyaman",
                weight: 0.0,
            },
        ],
        tags: ["improvisation", "adaptability", "spontaneity"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-cultural-001",
        text: "Seberapa mudah Anda beradaptasi dan berinteraksi dengan orang dari budaya yang berbeda?",
        linked_skills: {
            "interpersonal-cultural-001": 0.9,
            "interpersonal-empati-001": 0.7,
            "interpersonal-komunikasi-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["cultural-intelligence", "cross-cultural", "adaptability"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-crafting-001",
        text: "Seberapa terampil Anda dalam membuat atau memperbaiki benda dengan tangan Anda?",
        linked_skills: {
            "fisik-crafting-001": 0.9,
            "fisik-koordinasi-001": 0.7,
            "kreatif-desain-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_skilled",
                text: "Sangat terampil",
                weight: 1.0,
            },
            {
                id: "skilled",
                text: "Terampil",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "unskilled",
                text: "Kurang terampil",
                weight: 0.2,
            },
            {
                id: "very_unskilled",
                text: "Sangat kurang terampil",
                weight: 0.0,
            },
        ],
        tags: ["craftsmanship", "manual-dexterity", "hands-on"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-resource-001",
        text: "Seberapa efisien Anda dalam mengalokasikan dan mengelola sumber daya yang terbatas?",
        linked_skills: {
            "manajerial-resource-001": 0.9,
            "manajerial-planning-001": 0.8,
            "manajerial-decision-001": 0.7,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_efficient",
                text: "Sangat efisien",
                weight: 1.0,
            },
            {
                id: "efficient",
                text: "Efisien",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efisien",
                weight: 0.5,
            },
            {
                id: "inefficient",
                text: "Kurang efisien",
                weight: 0.2,
            },
            {
                id: "very_inefficient",
                text: "Sangat kurang efisien",
                weight: 0.0,
            },
        ],
        tags: ["resource-management", "efficiency", "allocation"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-digital-content-001",
        text: "Seberapa sering Anda membuat konten digital (video, podcast, blog, dll.)?",
        linked_skills: {
            "tech-digital-content-001": 0.9,
            "kreatif-storytelling-001": 0.7,
            "tech-ui-ux-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["content-creation", "digital-media", "creative"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-growth-001",
        text: "Seberapa sering Anda mencari kesempatan untuk belajar keterampilan baru?",
        linked_skills: {
            "introspektif-growth-001": 0.9,
            "introspektif-refleksi-001": 0.7,
            "tech-exploration-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["growth-mindset", "learning", "self-improvement"],
        complexity: "medium",
        prerequisites: [],
    },
    // 20 pertanyaan baru dimulai di sini
    {
        id: "q-abstraksi-001",
        text: "Seberapa mudah Anda memahami dan bekerja dengan konsep abstrak?",
        linked_skills: {
            "kognitif-abstraksi-001": 0.9,
            "kognitif-sistemik-001": 0.7,
            "tech-algorithms-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["abstract-thinking", "conceptual", "theoretical"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-pattern-001",
        text: "Seberapa cepat Anda mengenali pola atau tren dalam data atau informasi?",
        linked_skills: {
            "kognitif-pattern-001": 0.9,
            "kognitif-analisis-001": 0.7,
            "tech-data-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_quickly",
                text: "Sangat cepat",
                weight: 1.0,
            },
            {
                id: "quickly",
                text: "Cepat",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "slowly",
                text: "Lambat",
                weight: 0.2,
            },
            {
                id: "very_slowly",
                text: "Sangat lambat",
                weight: 0.0,
            },
        ],
        tags: ["pattern-recognition", "analytical", "data-analysis"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-3d-001",
        text: "Seberapa baik Anda dalam membayangkan atau membuat model tiga dimensi?",
        linked_skills: {
            "kreatif-3d-001": 0.9,
            "fisik-spatial-001": 0.8,
            "kreatif-desain-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["3d-modeling", "spatial-visualization", "design"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-culinary-001",
        text: "Seberapa kreatif Anda dalam memasak atau menyajikan makanan?",
        linked_skills: {
            "kreatif-culinary-001": 0.9,
            "kreatif-inovasi-001": 0.6,
            "fisik-precision-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_creative",
                text: "Sangat kreatif",
                weight: 1.0,
            },
            {
                id: "creative",
                text: "Kreatif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup kreatif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang kreatif",
                weight: 0.2,
            },
            {
                id: "not_at_all",
                text: "Tidak kreatif sama sekali",
                weight: 0.0,
            },
        ],
        tags: ["culinary", "cooking", "food-presentation"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-persuasion-001",
        text: "Seberapa sering Anda berhasil meyakinkan orang lain untuk menerima ide atau pendapat Anda?",
        linked_skills: {
            "interpersonal-persuasion-001": 0.9,
            "interpersonal-komunikasi-001": 0.7,
            "interpersonal-negosiasi-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["persuasion", "influence", "communication"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-mentoring-001",
        text: "Seberapa efektif Anda dalam membimbing orang lain untuk jangka waktu yang panjang?",
        linked_skills: {
            "interpersonal-mentoring-001": 0.9,
            "interpersonal-coaching-001": 0.8,
            "manajerial-leadership-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["mentoring", "guidance", "development"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-precision-001",
        text: "Seberapa baik Anda dalam melakukan gerakan yang membutuhkan presisi tinggi?",
        linked_skills: {
            "fisik-precision-001": 0.9,
            "fisik-koordinasi-001": 0.8,
            "fisik-crafting-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["precision", "fine-motor-skills", "dexterity"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-rhythm-001",
        text: "Seberapa mudah Anda mengikuti atau menciptakan ritme dalam musik atau gerakan?",
        linked_skills: {
            "fisik-rhythm-001": 0.9,
            "kreatif-musik-001": 0.8,
            "fisik-koordinasi-001": 0.6,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["rhythm", "musical", "timing"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-feedback-001",
        text: "Seberapa efektif Anda dalam memberikan umpan balik yang konstruktif kepada orang lain?",
        linked_skills: {
            "manajerial-feedback-001": 0.9,
            "interpersonal-komunikasi-001": 0.7,
            "manajerial-leadership-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["feedback", "communication", "coaching"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-agile-001",
        text: "Seberapa nyaman Anda dengan pendekatan manajemen yang adaptif dan iteratif?",
        linked_skills: {
            "manajerial-agile-001": 0.9,
            "manajerial-change-001": 0.7,
            "interpersonal-teamwork-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_comfortable",
                text: "Sangat nyaman",
                weight: 1.0,
            },
            {
                id: "comfortable",
                text: "Nyaman",
                weight: 0.8,
            },
            {
                id: "neutral",
                text: "Biasa saja",
                weight: 0.5,
            },
            {
                id: "uncomfortable",
                text: "Tidak nyaman",
                weight: 0.2,
            },
            {
                id: "very_uncomfortable",
                text: "Sangat tidak nyaman",
                weight: 0.0,
            },
        ],
        tags: ["agile", "adaptability", "iterative"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-cloud-001",
        text: "Seberapa familiar Anda dengan teknologi dan infrastruktur cloud?",
        linked_skills: {
            "tech-cloud-001": 0.9,
            "tech-programming-001": 0.6,
            "tech-security-001": 0.5,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_familiar",
                text: "Sangat familiar",
                weight: 1.0,
            },
            {
                id: "familiar",
                text: "Familiar",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup familiar",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang familiar",
                weight: 0.2,
            },
            {
                id: "not_at_all",
                text: "Tidak familiar sama sekali",
                weight: 0.0,
            },
        ],
        tags: ["cloud-computing", "technology", "infrastructure"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-ml-001",
        text: "Seberapa baik pemahaman Anda tentang konsep dan aplikasi machine learning?",
        linked_skills: {
            "tech-ml-001": 0.9,
            "tech-programming-001": 0.7,
            "kognitif-pattern-001": 0.6,
        },
        discriminative_value: 0.9,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["machine-learning", "ai", "data-science"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-focus-001",
        text: "Seberapa baik Anda dapat mempertahankan fokus pada satu tugas untuk jangka waktu yang lama?",
        linked_skills: {
            "introspektif-focus-001": 0.9,
            "introspektif-mindfulness-001": 0.7,
            "introspektif-regulasi-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["focus", "concentration", "attention"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-purpose-001",
        text: "Seberapa konsisten Anda dalam mengejar tujuan jangka panjang?",
        linked_skills: {
            "introspektif-purpose-001": 0.9,
            "introspektif-growth-001": 0.7,
            "manajerial-planning-001": 0.5,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_consistent",
                text: "Sangat konsisten",
                weight: 1.0,
            },
            {
                id: "consistent",
                text: "Konsisten",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup konsisten",
                weight: 0.5,
            },
            {
                id: "inconsistent",
                text: "Kurang konsisten",
                weight: 0.2,
            },
            {
                id: "very_inconsistent",
                text: "Sangat tidak konsisten",
                weight: 0.0,
            },
        ],
        tags: ["purpose", "goal-setting", "perseverance"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-ethical-001",
        text: "Seberapa sering Anda mempertimbangkan implikasi etis dari keputusan Anda?",
        linked_skills: {
            "kognitif-ethical-001": 0.9,
            "kognitif-kritis-001": 0.7,
            "introspektif-refleksi-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["ethics", "moral-reasoning", "decision-making"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-game-001",
        text: "Seberapa baik Anda dalam merancang aturan atau sistem untuk permainan atau aktivitas interaktif?",
        linked_skills: {
            "kreatif-game-001": 0.9,
            "kreatif-storytelling-001": 0.7,
            "tech-ui-ux-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["game-design", "interactive", "systems-thinking"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-teaching-001",
        text: "Seberapa efektif Anda dalam mengajarkan konsep atau keterampilan baru kepada orang lain?",
        linked_skills: {
            "interpersonal-teaching-001": 0.9,
            "interpersonal-komunikasi-001": 0.7,
            "interpersonal-coaching-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["teaching", "instruction", "knowledge-transfer"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-flexibility-001",
        text: "Seberapa fleksibel tubuh Anda dalam hal rentang gerak dan kelenturan?",
        linked_skills: {
            "fisik-flexibility-001": 0.9,
            "fisik-koordinasi-001": 0.6,
            "fisik-balance-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_flexible",
                text: "Sangat fleksibel",
                weight: 1.0,
            },
            {
                id: "flexible",
                text: "Fleksibel",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "inflexible",
                text: "Kurang fleksibel",
                weight: 0.2,
            },
            {
                id: "very_inflexible",
                text: "Sangat tidak fleksibel",
                weight: 0.0,
            },
        ],
        tags: ["flexibility", "range-of-motion", "physical"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-risk-001",
        text: "Seberapa baik Anda dalam mengidentifikasi dan mengelola risiko dalam proyek atau keputusan?",
        linked_skills: {
            "manajerial-risk-001": 0.9,
            "manajerial-decision-001": 0.7,
            "kognitif-forecasting-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_good",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "poor",
                text: "Kurang baik",
                weight: 0.2,
            },
            {
                id: "very_poor",
                text: "Sangat kurang",
                weight: 0.0,
            },
        ],
        tags: ["risk-management", "planning", "decision-making"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-blockchain-001",
        text: "Seberapa familiar Anda dengan teknologi blockchain dan aplikasinya?",
        linked_skills: {
            "tech-blockchain-001": 0.9,
            "tech-security-001": 0.6,
            "tech-programming-001": 0.5,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_familiar",
                text: "Sangat familiar",
                weight: 1.0,
            },
            {
                id: "familiar",
                text: "Familiar",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup familiar",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang familiar",
                weight: 0.2,
            },
            {
                id: "not_at_all",
                text: "Tidak familiar sama sekali",
                weight: 0.0,
            },
        ],
        tags: ["blockchain", "cryptocurrency", "distributed-ledger"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-intuition-001",
        text: "Seberapa sering Anda mengandalkan intuisi dalam pengambilan keputusan?",
        linked_skills: {
            "introspektif-intuition-001": 0.9,
            "introspektif-awareness-001": 0.7,
            "kognitif-pattern-001": 0.5,
        },
        discriminative_value: 0.75,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["intuition", "gut-feeling", "decision-making"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-synthesis-001",
        text: "Seberapa baik Anda dalam menggabungkan informasi dari berbagai sumber untuk membentuk kesimpulan?",
        linked_skills: {
            "kognitif-synthesis-001": 0.9,
            "kognitif-sistemik-001": 0.7,
            "kognitif-kritis-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "excellent",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "below_average",
                text: "Di bawah rata-rata",
                weight: 0.2,
            },
            {
                id: "poor",
                text: "Kurang",
                weight: 0.0,
            },
        ],
        tags: ["synthesis", "integration", "research", "analysis"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-spatial-reasoning-001",
        text: "Seberapa mudah bagi Anda untuk membayangkan dan memanipulasi objek dalam pikiran Anda?",
        linked_skills: {
            "kognitif-spatial-reasoning-001": 0.9,
            "fisik-spatial-001": 0.7,
            "kreatif-3d-001": 0.6,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_easy",
                text: "Sangat mudah",
                weight: 1.0,
            },
            {
                id: "easy",
                text: "Mudah",
                weight: 0.8,
            },
            {
                id: "moderate",
                text: "Cukup mudah",
                weight: 0.5,
            },
            {
                id: "difficult",
                text: "Sulit",
                weight: 0.2,
            },
            {
                id: "very_difficult",
                text: "Sangat sulit",
                weight: 0.0,
            },
        ],
        tags: ["spatial", "visualization", "mental-rotation", "3d-thinking"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-innovation-strategy-001",
        text: "Seberapa sering Anda mengembangkan pendekatan sistematis untuk inovasi dan kreativitas?",
        linked_skills: {
            "kreatif-innovation-strategy-001": 0.9,
            "kreatif-inovasi-001": 0.7,
            "manajerial-planning-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["innovation", "strategy", "creativity", "planning"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-visual-thinking-001",
        text: "Seberapa sering Anda menggunakan gambar atau diagram untuk memahami atau menjelaskan konsep?",
        linked_skills: {
            "kreatif-visual-thinking-001": 0.9,
            "kreatif-desain-001": 0.7,
            "kognitif-spatial-reasoning-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_often",
                text: "Sangat sering",
                weight: 1.0,
            },
            {
                id: "often",
                text: "Sering",
                weight: 0.8,
            },
            {
                id: "sometimes",
                text: "Kadang-kadang",
                weight: 0.5,
            },
            {
                id: "rarely",
                text: "Jarang",
                weight: 0.2,
            },
            {
                id: "never",
                text: "Tidak pernah",
                weight: 0.0,
            },
        ],
        tags: ["visual-thinking", "diagrams", "visualization", "communication"],
        complexity: "medium",
        prerequisites: [],
    },
    {
        id: "q-conflict-resolution-001",
        text: "Seberapa efektif Anda dalam menyelesaikan konflik antara orang lain?",
        linked_skills: {
            "interpersonal-conflict-resolution-001": 0.9,
            "interpersonal-negosiasi-001": 0.7,
            "interpersonal-empati-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "very_effective",
                text: "Sangat efektif",
                weight: 1.0,
            },
            {
                id: "effective",
                text: "Efektif",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup efektif",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang efektif",
                weight: 0.2,
            },
            {
                id: "ineffective",
                text: "Tidak efektif",
                weight: 0.0,
            },
        ],
        tags: ["conflict-resolution", "mediation", "diplomacy"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-computational-001",
        text: "Seberapa baik Anda dalam memecah masalah kompleks menjadi langkah-langkah yang lebih kecil dan sistematis?",
        linked_skills: {
            "kognitif-computational-001": 0.9,
            "tech-algorithms-001": 0.7,
            "kognitif-logika-001": 0.6,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "excellent",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "below_average",
                text: "Di bawah rata-rata",
                weight: 0.2,
            },
            {
                id: "poor",
                text: "Kurang",
                weight: 0.0,
            },
        ],
        tags: ["computational-thinking", "problem-solving", "algorithms"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-project-001",
        text: "Seberapa baik Anda dalam merencanakan dan mengelola proyek dari awal hingga selesai?",
        linked_skills: {
            "manajerial-project-001": 0.9,
            "manajerial-planning-001": 0.8,
            "manajerial-resource-001": 0.7,
        },
        discriminative_value: 0.85,
        answer_options: [
            {
                id: "excellent",
                text: "Sangat baik",
                weight: 1.0,
            },
            {
                id: "good",
                text: "Baik",
                weight: 0.8,
            },
            {
                id: "average",
                text: "Rata-rata",
                weight: 0.5,
            },
            {
                id: "below_average",
                text: "Di bawah rata-rata",
                weight: 0.2,
            },
            {
                id: "poor",
                text: "Kurang",
                weight: 0.0,
            },
        ],
        tags: ["project-management", "planning", "coordination"],
        complexity: "hard",
        prerequisites: [],
    },
    {
        id: "q-iot-001",
        text: "Seberapa familiar Anda dengan teknologi Internet of Things (IoT) dan aplikasinya?",
        linked_skills: {
            "tech-iot-001": 0.9,
            "tech-programming-001": 0.6,
            "tech-exploration-001": 0.5,
        },
        discriminative_value: 0.8,
        answer_options: [
            {
                id: "very_familiar",
                text: "Sangat familiar",
                weight: 1.0,
            },
            {
                id: "familiar",
                text: "Familiar",
                weight: 0.8,
            },
            {
                id: "somewhat",
                text: "Cukup familiar",
                weight: 0.5,
            },
            {
                id: "not_very",
                text: "Kurang familiar",
                weight: 0.2,
            },
            {
                id: "not_at_all",
                text: "Tidak familiar sama sekali",
                weight: 0.0,
            },
        ],
        tags: ["iot", "connected-devices", "smart-systems"],
        complexity: "hard",
        prerequisites: [],
    },
];
