"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProgressIndicator from "@/components/progress-indicator"
import { AdaptiveQuestionSelector } from "@/lib/algorithms/question-selector"
import { questions } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PreferenceStage from "@/components/preference-stage"

export default function QuizPage() {
  const router = useRouter()
  const [questionSelector, setQuestionSelector] = useState<AdaptiveQuestionSelector | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [sessionId, setSessionId] = useState("")
  const [answeredCount, setAnsweredCount] = useState(0)
  const [totalQuestions] = useState(25) // Meningkatkan jumlah maksimum pertanyaan dari 20 menjadi 25
  const [showPreferenceStage, setShowPreferenceStage] = useState(true)
  const [chatHistory, setChatHistory] = useState<Array<{ type: string; text: string }>>([
    {
      type: "system",
      text: "Selamat datang di Skill Discoverer! Saya akan mengajukan beberapa pertanyaan untuk membantu menemukan skill tersembunyi Anda.",
    },
  ])

  // Fungsi untuk memulai kuis setelah tahap preferensi
  const startQuizWithPreferences = (preferences: Record<string, number>, newSessionId: string) => {
    // Initialize the question selector with preferences
    const selector = new AdaptiveQuestionSelector(questions, {}, preferences)
    setQuestionSelector(selector)

    // Set session ID
    setSessionId(newSessionId)

    // Get the first question
    const firstQuestion = selector.selectNextQuestion()
    setCurrentQuestion(firstQuestion)

    if (firstQuestion) {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "system",
          text: "Terima kasih atas informasi awalnya! Sekarang mari kita mulai kuis utama untuk menemukan skill tersembunyi Anda.",
        },
        {
          type: "question",
          text: firstQuestion.text,
        },
      ])
    }

    setShowPreferenceStage(false)
    setLoading(false)
  }

  useEffect(() => {
    // Kuis akan dimulai setelah tahap preferensi, jadi tidak perlu inisialisasi di sini
    if (!showPreferenceStage) {
      setLoading(false)
    }
  }, [])

  const handleAnswer = (answerId: string) => {
    if (!questionSelector || !currentQuestion) return

    setLoading(true)

    // Tambahkan jawaban ke chat history
    const selectedAnswer = currentQuestion.answer_options.find((option) => option.id === answerId)
    if (selectedAnswer) {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "answer",
          text: selectedAnswer.text,
        },
      ])
    }

    // Update probabilities based on the answer
    questionSelector.updateProbabilities(currentQuestion.id, answerId)

    // Save user answers to localStorage
    const userAnswers = { ...questionSelector.userAnswers }
    localStorage.setItem(`quiz_answers_${sessionId}`, JSON.stringify(userAnswers))

    // Save question history
    localStorage.setItem(`quiz_history_${sessionId}`, JSON.stringify(questionSelector.questionHistory))

    // Save skill probabilities
    localStorage.setItem(`quiz_probabilities_${sessionId}`, JSON.stringify(questionSelector.currentSkillProbabilities))

    // Save asked questions count
    localStorage.setItem(`quiz_asked_count_${sessionId}`, questionSelector.askedQuestions.size.toString())

    // Save asked questions as array
    localStorage.setItem(`quiz_asked_questions_${sessionId}`, JSON.stringify(Array.from(questionSelector.askedQuestions)))

    // Update answered count
    const newAnsweredCount = answeredCount + 1
    setAnsweredCount(newAnsweredCount)

    // Calculate progress
    setProgress(newAnsweredCount / totalQuestions)

    // Check if we've reached the maximum number of questions or high confidence
    if (newAnsweredCount >= totalQuestions || questionSelector.hasReachedHighConfidence(0.88)) {
      // Tambahkan pesan selesai
      const confidenceReached = questionSelector.hasReachedHighConfidence(0.88);
      const confidenceScore = Math.round(questionSelector.getOverallConfidence() * 100);

      setChatHistory((prev) => [
        ...prev,
        {
          type: "system",
          text: confidenceReached
            ? `Terima kasih! Kami telah mengumpulkan cukup informasi (${confidenceScore}% keyakinan) untuk memberikan hasil yang akurat. Sedang menganalisis hasil...`
            : `Terima kasih! Semua pertanyaan telah dijawab. Sedang menganalisis hasil...`,
        },
      ])

      // Delay untuk memberikan kesan proses analisis
      setTimeout(() => {
        // Redirect to results page
        router.push(`/results/${sessionId}`)
      }, 2000)
      return
    }

    // Get the next question
    const nextQuestion = questionSelector.selectNextQuestion()

    if (nextQuestion) {
      // Tambahkan pertanyaan berikutnya ke chat history
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          {
            type: "question",
            text: nextQuestion.text,
          },
        ])
        setCurrentQuestion(nextQuestion)
        setLoading(false)
      }, 800) // Delay sedikit untuk efek alami
    } else {
      setLoading(false)
    }
  }

  const handleSkip = () => {
    if (answeredCount < totalQuestions - 1) {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "system",
          text: "Pertanyaan dilewati. Beralih ke pertanyaan berikutnya...",
        },
      ])

      // Pilih pertanyaan baru tanpa memperbarui probabilitas
      if (questionSelector && currentQuestion) {
        const nextQuestion = questionSelector.selectNextQuestion(undefined, true, currentQuestion.id) // Parameter kedua true untuk skip
        if (nextQuestion) {
          setTimeout(() => {
            setChatHistory((prev) => [
              ...prev,
              {
                type: "question",
                text: nextQuestion.text,
              },
            ])
            setCurrentQuestion(nextQuestion)
          }, 800)
        }
      }
    } else {
      // Jika ini pertanyaan terakhir, tidak bisa dilewati
      setChatHistory((prev) => [
        ...prev,
        {
          type: "system",
          text: "Ini adalah pertanyaan terakhir, tidak dapat dilewati.",
        },
      ])
    }
  }

  if (showPreferenceStage) {
    return <PreferenceStage onComplete={startQuizWithPreferences} />
  }

  if (loading && !currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Mempersiapkan pertanyaan...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <ProgressIndicator value={progress} answeredCount={answeredCount} totalQuestions={totalQuestions} />
      <div className="container mx-auto flex min-h-screen flex-col px-4 py-8 pt-20">

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-6 bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.type === "answer"
                  ? "ml-auto bg-primary text-white"
                  : message.type === "question"
                    ? "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              } p-3 rounded-lg max-w-[80%]`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {currentQuestion && (
          <div className="mt-auto">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-3">
                  {currentQuestion.answer_options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className="h-auto justify-start p-4 text-left text-lg"
                      onClick={() => handleAnswer(option.id)}
                      disabled={loading}
                    >
                      {option.text}
                    </Button>
                  ))}
                  <Button variant="ghost" className="mt-2" onClick={handleSkip} disabled={loading}>
                    Lewati pertanyaan ini
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
    </>
  )
}
