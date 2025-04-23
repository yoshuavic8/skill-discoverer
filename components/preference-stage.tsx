"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const preferenceQuestions = [
  {
    id: "cognitive-creative",
    question: "Mana yang lebih menggambarkan cara Anda menyelesaikan masalah?",
    options: [
      { id: "cognitive", text: "Saya lebih suka pendekatan analitis dan logis", spheres: { 1: 0.7, 6: 0.6 } },
      { id: "creative", text: "Saya lebih suka pendekatan kreatif dan inovatif", spheres: { 2: 0.7, 7: 0.5 } },
      { id: "balanced-1", text: "Saya menggunakan keduanya secara seimbang", spheres: { 1: 0.6, 2: 0.6 } },
    ],
  },
  {
    id: "technical-interpersonal",
    question: "Dalam pekerjaan atau proyek, mana yang lebih Anda nikmati?",
    options: [
      { id: "technical", text: "Bekerja dengan teknologi, data, atau sistem", spheres: { 6: 0.7, 1: 0.6 } },
      { id: "interpersonal", text: "Berinteraksi dan berkolaborasi dengan orang lain", spheres: { 3: 0.7, 4: 0.6 } },
      { id: "balanced-2", text: "Keduanya sama-sama menarik bagi saya", spheres: { 3: 0.6, 6: 0.6 } },
    ],
  },
  {
    id: "managerial-introspective",
    question: "Bagaimana Anda lebih suka menghabiskan waktu pengembangan diri?",
    options: [
      { id: "managerial", text: "Mengembangkan keterampilan kepemimpinan dan manajemen", spheres: { 5: 0.7, 4: 0.6 } },
      { id: "introspective", text: "Memperdalam pemahaman diri dan kesadaran", spheres: { 7: 0.7, 3: 0.5 } },
      { id: "balanced-3", text: "Keduanya penting bagi saya", spheres: { 5: 0.6, 7: 0.6 } },
    ],
  },
]

interface PreferenceStageProps {
  onComplete: (preferences: Record<string, number>, sessionId: string) => void
}

export default function PreferenceStage({ onComplete }: PreferenceStageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(Math.random().toString(36).substring(2, 15))

  const currentQuestion = preferenceQuestions[currentQuestionIndex]

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }))

    if (currentQuestionIndex < preferenceQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Process answers and complete
      setLoading(true)
      
      // Combine sphere preferences from all answers
      const preferences: Record<string, number> = {}
      
      // Process previous answers
      Object.entries(answers).forEach(([questionId, optionId]) => {
        const question = preferenceQuestions.find(q => q.id === questionId)
        if (!question) return
        
        const option = question.options.find(o => o.id === optionId)
        if (!option) return
        
        // Add sphere preferences
        Object.entries(option.spheres).forEach(([sphereId, value]) => {
          if (preferences[sphereId]) {
            preferences[sphereId] = (preferences[sphereId] + value) / 2 // Average if already exists
          } else {
            preferences[sphereId] = value
          }
        })
      })
      
      // Add the last answer
      const lastOption = currentQuestion.options.find(o => o.id === optionId)
      if (lastOption) {
        Object.entries(lastOption.spheres).forEach(([sphereId, value]) => {
          if (preferences[sphereId]) {
            preferences[sphereId] = (preferences[sphereId] + value) / 2
          } else {
            preferences[sphereId] = value
          }
        })
      }
      
      // Save preferences to localStorage
      localStorage.setItem(`preferences_${sessionId}`, JSON.stringify(preferences))
      
      // Complete the preference stage
      setTimeout(() => {
        onComplete(preferences, sessionId)
      }, 500)
    }
  }

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Sebelum Kita Mulai</h1>
        <p className="text-muted-foreground">
          Mari jawab beberapa pertanyaan umum untuk menyesuaikan pengalaman Anda
        </p>
      </div>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Pertanyaan {currentQuestionIndex + 1} dari {preferenceQuestions.length}</CardTitle>
          <CardDescription>{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup className="space-y-4" defaultValue={answers[currentQuestion.id]}>
            {currentQuestion.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={option.id}
                  value={option.id}
                  onClick={() => handleAnswer(option.id)}
                  disabled={loading}
                />
                <Label htmlFor={option.id} className="flex-1 cursor-pointer py-2">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="mt-6 flex justify-between">
            {currentQuestionIndex > 0 ? (
              <Button
                variant="outline"
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                disabled={loading}
              >
                Kembali
              </Button>
            ) : (
              <div></div>
            )}
            <div className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} / {preferenceQuestions.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
