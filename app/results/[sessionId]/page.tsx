"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SkillCards from "@/components/skill-cards"
import SphereRadarChart from "@/components/sphere-radar-chart"
import SkillBarChart from "@/components/skill-bar-chart"
import SkillGrowthChart from "@/components/skill-growth-chart"
import ResourceLinks from "@/components/resource-links"
import { AdaptiveQuestionSelector } from "@/lib/algorithms/question-selector"
import { SkillPredictor } from "@/lib/algorithms/skill-predictor"
import { questions, skills, spheres } from "@/lib/data"

export default function ResultsPage() {
  const router = useRouter()
  const { sessionId } = useParams()
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  // State untuk menyimpan data hasil

  // Fungsi untuk menghapus data quiz sebelumnya dari localStorage
  const clearQuizData = () => {
    // Hapus semua item localStorage yang terkait dengan quiz
    const keysToRemove = []

    // Cari semua kunci yang terkait dengan quiz
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (
        key.startsWith('quiz_') ||
        key.startsWith('preferences_')
      )) {
        keysToRemove.push(key)
      }
    }

    // Hapus semua kunci yang ditemukan
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })

    // Navigasi ke halaman quiz
    router.push('/quiz')
  }

  useEffect(() => {
    try {
      // Retrieve real user data from localStorage

    // Retrieve preferences if available
    const preferencesJson = localStorage.getItem(`preferences_${sessionId}`)
    const preferences = preferencesJson ? JSON.parse(preferencesJson) : null

    // Retrieve user answers
    const userAnswersJson = localStorage.getItem(`quiz_answers_${sessionId}`)
    const userAnswers = userAnswersJson ? JSON.parse(userAnswersJson) : {}

    // Retrieve question history
    const questionHistoryJson = localStorage.getItem(`quiz_history_${sessionId}`)
    const questionHistory = questionHistoryJson ? JSON.parse(questionHistoryJson) : []

    // Retrieve skill probabilities
    const probabilitiesJson = localStorage.getItem(`quiz_probabilities_${sessionId}`)
    const savedProbabilities = probabilitiesJson ? JSON.parse(probabilitiesJson) : null

    // Retrieve asked questions count
    const askedCountStr = localStorage.getItem(`quiz_asked_count_${sessionId}`)
    const askedCount = askedCountStr ? parseInt(askedCountStr) : 0

    // Create a question selector with real user answers and preferences
    const selector = new AdaptiveQuestionSelector(questions, userAnswers, preferences)

    // If we have saved probabilities, restore them
    if (savedProbabilities) {
      selector.currentSkillProbabilities = savedProbabilities
    }

    // Restore asked questions from history or direct askedQuestions array
    const askedQuestionsJson = localStorage.getItem(`quiz_asked_questions_${sessionId}`)
    const askedQuestions = askedQuestionsJson ? JSON.parse(askedQuestionsJson) : []

    // Add asked questions to the selector
    if (askedQuestions.length > 0) {
      // Direct restoration from askedQuestions array
      askedQuestions.forEach(questionId => {
        selector.askedQuestions.add(questionId)
      })
    } else if (questionHistory && questionHistory.length > 0) {
      // Fallback to question history
      questionHistory.forEach(questionId => {
        selector.askedQuestions.add(questionId)
      })
    }

    // Get predicted skills with improved confidence
    const predictedSkills = selector.getPredictedSkills(15)
    const overallConfidence = selector.getOverallConfidence()

    // Process results with improved algorithm
    const predictor = new SkillPredictor(skills, spheres)
    const processedResults = predictor.processResults(predictedSkills)
    const sphereDistribution = predictor.calculateSphereDistribution(processedResults)
    const relatedSuggestions = predictor.generateRelatedSkillSuggestions(processedResults)
    const skillGaps = predictor.identifySkillGaps(processedResults)

    // Check if preferences were used
    const hasPreferences = preferencesJson !== null

    // Use the actual asked count from localStorage or fallback to selector's count
    const actualQuestionCount = askedCount || selector.askedQuestions.size

    setResults({
      skills: processedResults,
      sphereDistribution,
      relatedSuggestions,
      skillGaps,
      questionCount: actualQuestionCount,
      confidenceScore: overallConfidence,
      hasPreferences: hasPreferences,
      preferences: preferences,
    })

      setLoading(false)
    } catch (error) {
      console.error("Error processing results:", error)

      // Fallback to simulated results if there's an error
      const selector = new AdaptiveQuestionSelector(questions)

      // Simulate some basic answers to provide a fallback experience
      const questionSubset = [...questions].slice(0, 5)
      questionSubset.forEach(question => {
        const answerId = question.answer_options[0].id
        selector.updateProbabilities(question.id, answerId)
      })

      // Process results with minimal data
      const predictedSkills = selector.getPredictedSkills(15)
      const overallConfidence = 0.5 // Low confidence for fallback

      const predictor = new SkillPredictor(skills, spheres)
      const processedResults = predictor.processResults(predictedSkills)
      const sphereDistribution = predictor.calculateSphereDistribution(processedResults)
      const relatedSuggestions = predictor.generateRelatedSkillSuggestions(processedResults)
      const skillGaps = predictor.identifySkillGaps(processedResults)

      setResults({
        skills: processedResults,
        sphereDistribution,
        relatedSuggestions,
        skillGaps,
        questionCount: 5,
        confidenceScore: overallConfidence,
        hasPreferences: false,
        isErrorFallback: true, // Flag to indicate this is fallback data
      })

      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Menganalisis jawaban Anda...</p>
        </div>
      </div>
    )
  }

  if (!results) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-xl">Tidak dapat memuat hasil. Silakan coba lagi.</p>
          <Button onClick={() => router.push('/')}>Kembali ke Beranda</Button>
        </div>
      </div>
    )
  }

  // Ekstrak data dari results dengan safety check
  const topSkills = results?.skills || []
  const sphereDistribution = results?.sphereDistribution || {}
  const confidenceScore = results?.confidenceScore || 0
  const skillGaps = results?.skillGaps || []

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Temukan Profil Skill Anda!</h1>
        <div className="mx-auto max-w-md">
          <div className="mb-2 flex justify-between">
            <span>Confidence Score:</span>
            <span className="font-semibold">
              {Math.round(confidenceScore * 100)}%
              {Math.round(confidenceScore * 100) >= 80 && " (Tinggi)"}
              {Math.round(confidenceScore * 100) >= 70 && Math.round(confidenceScore * 100) < 80 && " (Baik)"}
              {Math.round(confidenceScore * 100) < 70 && " (Cukup)"}
            </span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-in-out ${Math.round(confidenceScore * 100) >= 80 ? 'bg-green-500' : Math.round(confidenceScore * 100) >= 70 ? 'bg-primary' : 'bg-amber-500'}`}
              style={{ width: `${confidenceScore * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Berdasarkan {results.questionCount} pertanyaan yang dijawab
            {results.questionCount < 15 && confidenceScore >= 0.8 && " (Adaptive stopping aktif)"}
            {results.hasPreferences && " • Menggunakan preferensi awal"}
          </p>
        </div>
      </header>

      <Tabs defaultValue="overview" className="mb-12" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Detail Skill</TabsTrigger>
          <TabsTrigger value="growth">Proyeksi</TabsTrigger>
          <TabsTrigger value="resources">Sumber Daya</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Distribusi Sphere Skill</CardTitle>
                <CardDescription>Visualisasi distribusi skill Anda berdasarkan 7 sphere kemampuan</CardDescription>
              </CardHeader>
              <CardContent>
                <SphereRadarChart distribution={sphereDistribution} />
                {results.hasPreferences && (
                  <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm dark:bg-slate-800">
                    <p className="font-medium">Preferensi Awal Terdeteksi</p>
                    <p className="text-muted-foreground">Hasil ini memperhitungkan preferensi awal yang Anda berikan sebelum kuis.</p>
                  </div>
                )}
                {results.isErrorFallback && (
                  <div className="mt-4 rounded-md bg-amber-50 p-3 text-sm dark:bg-amber-900">
                    <p className="font-medium text-amber-700 dark:text-amber-300">Perhatian: Data Terbatas</p>
                    <p className="text-amber-600 dark:text-amber-400">Kami mengalami kesulitan memuat data lengkap Anda. Hasil yang ditampilkan mungkin kurang akurat.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Skills</CardTitle>
                <CardDescription>Skill dengan probabilitas tertinggi berdasarkan jawaban Anda</CardDescription>
              </CardHeader>
              <CardContent>
                {topSkills && topSkills.length > 0 ? (
                  <SkillBarChart skills={topSkills.filter(s => s && s.skill && s.probability)} limit={7} />
                ) : (
                  <p className="text-center text-muted-foreground">Tidak ada skill yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Jalur Karir Potensial</CardTitle>
              <CardDescription>
                Berdasarkan skill teratas Anda, berikut adalah jalur karir yang mungkin sesuai
              </CardDescription>
            </CardHeader>
            <CardContent>
              {topSkills && topSkills.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {topSkills
                    .filter(s => s && s.skill && s.skill.career_paths) // Filter untuk memastikan struktur data valid
                    .flatMap((s) => s.skill.career_paths)
                    .slice(0, 8)
                    .map((career, index) => {
                      // Dapatkan warna yang aman dengan pengecekan
                      const safeIndex = index % Math.max(1, topSkills.length);
                      const skill = topSkills[safeIndex];
                      const defaultColor = '#6366f1'; // Warna default jika tidak ada warna sphere
                      const sphereColor = skill && skill.sphere && skill.sphere.color
                        ? skill.sphere.color
                        : defaultColor;

                      return (
                        <div
                          key={index}
                          className="rounded-lg p-4 text-center transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                          style={{
                            backgroundColor: `${sphereColor}10`,
                            borderLeft: `3px solid ${sphereColor}`,
                          }}
                        >
                          {career}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Tidak ada jalur karir yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Detail Skill Terdeteksi</h2>
              {topSkills && topSkills.length > 0 ? (
                <SkillCards skills={topSkills
                  .filter(skill => skill && skill.skill && skill.probability)
                  .slice(0, 5)}
                />
              ) : (
                <p className="text-center text-muted-foreground">Tidak ada detail skill yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
              )}
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Skill Gap</h2>
              <p className="mb-4 text-muted-foreground">
                Area skill yang mungkin perlu Anda kembangkan berdasarkan profil Anda
              </p>
              {skillGaps && skillGaps.length > 0 ? (
                <SkillCards
                  skills={skillGaps.map((gap) => {
                    // Cari sphere yang sesuai dengan safety check
                    const sphere = gap && gap.sphere_id ?
                      spheres.find((s) => s.id === gap.sphere_id) : null;

                    // Buat sphere default yang lengkap
                    const defaultSphere = {
                      id: 0,
                      name: 'Unknown',
                      color: '#6366f1',
                      icon: '•',
                      description: 'Unknown sphere',
                      skills: []
                    };

                    // Gunakan sphere yang ditemukan atau default
                    const safeSphere = sphere || defaultSphere;

                    return {
                      skillId: gap && gap.id ? gap.id : `gap-${Math.random().toString(36).substring(2, 9)}`,
                      probability: 0.3, // Low probability since it's a gap
                      confidenceScore: 0.6,
                      skill: {
                        ...gap,
                        sphere: safeSphere
                      },
                      sphere: safeSphere
                    }
                  })}
                />
              ) : (
                <p>Tidak ada skill gap yang signifikan terdeteksi.</p>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="growth" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Proyeksi Pertumbuhan Skill</CardTitle>
              <CardDescription>
                Estimasi perkembangan skill Anda dalam jangka waktu tertentu dengan latihan yang konsisten
              </CardDescription>
            </CardHeader>
            <CardContent>
              {topSkills && topSkills.length > 0 ? (
                <SkillGrowthChart skills={topSkills.filter(s => s && s.skill && s.probability)} />
              ) : (
                <p className="text-center text-muted-foreground">Tidak ada data pertumbuhan skill yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rekomendasi Pengembangan</CardTitle>
                <CardDescription>Langkah-langkah yang disarankan untuk mengembangkan skill Anda</CardDescription>
              </CardHeader>
              <CardContent>
                {topSkills && topSkills.length > 0 ? (
                  <ul className="space-y-3">
                    {topSkills
                      .filter(skill => skill && skill.skill && skill.skill.sphere && skill.skill.practical_applications && skill.skill.practical_applications.length > 0)
                      .slice(0, 3)
                      .map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 rounded-full text-center text-sm font-bold text-white"
                            style={{ backgroundColor: skill.sphere?.color || '#6366f1' }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{skill.skill.name}</p>
                            <p className="text-sm text-muted-foreground">{skill.skill.practical_applications[0]}</p>
                          </div>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-center text-muted-foreground">Tidak ada rekomendasi yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Terkait</CardTitle>
                <CardDescription>Skill lain yang mungkin Anda miliki berdasarkan profil Anda</CardDescription>
              </CardHeader>
              <CardContent>
                {results.relatedSuggestions && results.relatedSuggestions.length > 0 ? (
                  <ul className="space-y-3">
                    {results.relatedSuggestions.map((skill, index) => {
                      // Cari sphere yang sesuai dengan safety check
                      const sphere = skill && skill.sphere_id ?
                        spheres.find((s) => s.id === skill.sphere_id) : null;

                      // Default color jika sphere tidak ditemukan
                      const defaultColor = '#6366f1';
                      const sphereColor = sphere && sphere.color ? sphere.color : defaultColor;
                      const sphereIcon = sphere && sphere.icon ? sphere.icon : '•';

                      return (
                        <li key={index} className="flex items-start">
                          <div
                            className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: `${sphereColor}20` }}
                          >
                            <span
                              className="flex h-full w-full items-center justify-center text-sm"
                              style={{ color: sphereColor }}
                            >
                              {sphereIcon}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{skill && skill.name ? skill.name : 'Skill Tidak Diketahui'}</p>
                            <p className="text-sm text-muted-foreground">{skill && skill.description ? skill.description : 'Tidak ada deskripsi'}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <p className="text-center text-muted-foreground">Tidak ada skill terkait yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sumber Daya Pembelajaran</CardTitle>
              <CardDescription>Rekomendasi sumber belajar untuk mengembangkan skill teratas Anda</CardDescription>
            </CardHeader>
            <CardContent>
              {topSkills && topSkills.length > 0 ? (
                <ResourceLinks
                  resources={topSkills
                    .filter(s => s && s.skill && s.skill.learning_resources)
                    .slice(0, 3)
                    .flatMap(s => s.skill.learning_resources || [])
                  }
                />
              ) : (
                <p className="text-center text-muted-foreground">Tidak ada sumber daya yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Praktik Aplikasi</CardTitle>
              <CardDescription>Cara menerapkan skill Anda dalam situasi nyata</CardDescription>
            </CardHeader>
            <CardContent>
              {topSkills && topSkills.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {topSkills
                    .filter(skill =>
                      skill &&
                      skill.skill &&
                      skill.skill.sphere &&
                      skill.skill.practical_applications &&
                      skill.skill.practical_applications.length > 0
                    )
                    .slice(0, 3)
                    .map((skill, skillIndex) => {
                      const defaultColor = '#6366f1';
                      const sphereColor = skill.sphere && skill.sphere.color ?
                        skill.sphere.color : defaultColor;

                      return (
                        <div key={skillIndex} className="space-y-3">
                          <h3 className="font-semibold" style={{ color: sphereColor }}>
                            {skill.skill.name}
                          </h3>
                          <ul className="space-y-2">
                            {skill.skill.practical_applications.map((application, appIndex) => (
                              <li key={appIndex} className="flex items-start">
                                <span className="mr-2 text-lg" style={{ color: sphereColor }}>
                                  •
                                </span>
                                <span className="text-sm">{application}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Tidak ada praktik aplikasi yang dapat ditampilkan. Jawab lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="lg">
          Bagikan Hasil
        </Button>
        <Button size="lg" onClick={clearQuizData}>Ambil Kuis Lagi</Button>
      </div>
    </div>
  )
}
