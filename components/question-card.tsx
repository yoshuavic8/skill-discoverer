"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/types"

interface QuestionCardProps {
  question: Question
  onAnswer: (answerId: string) => void
  disabled?: boolean
}

export default function QuestionCard({ question, onAnswer, disabled = false }: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {question.answer_options.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              className="h-auto justify-start p-4 text-left text-lg"
              onClick={() => onAnswer(option.id)}
              disabled={disabled}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        Pilih jawaban yang paling sesuai dengan diri Anda
      </CardFooter>
    </Card>
  )
}
