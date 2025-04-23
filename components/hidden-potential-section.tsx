"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HiddenPotentialProps, ContradictionInsight } from "@/lib/types"
import { analyzeContradictions } from "@/lib/algorithms/contradiction-analyzer"
import { Sparkles, Scale, ArrowRight } from "lucide-react"

export default function HiddenPotentialSection({
  userAnswers,
  questions,
  topSkills,
  allSkillProbabilities,
  allSkills
}: HiddenPotentialProps) {
  // Dapatkan wawasan dari analisis kontradiksi
  const contradictionInsights = analyzeContradictions(userAnswers, questions);

  // Jika tidak ada wawasan dan kita memiliki cukup jawaban, tampilkan contoh potensi tersembunyi
  const userAnswersCount = Object.keys(userAnswers || {}).length;
  const showExamples = contradictionInsights.length === 0 && userAnswersCount >= 5;

  // Jika tidak ada wawasan dan tidak perlu menampilkan contoh, jangan tampilkan apa-apa
  if (contradictionInsights.length === 0 && !showExamples) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-amber-500" />
          Potensi Tersembunyi
        </CardTitle>
        <CardDescription>
          Wawasan tambahan tentang kemampuan unik dan potensi pengembangan Anda
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {contradictionInsights.length > 0 ? (
            /* Tampilkan Wawasan Kontradiksi */
            <div>
              <h3 className="text-lg font-medium mb-3">Keseimbangan Kognitif</h3>
              <div className="space-y-4">
                {contradictionInsights.map((insight, index) => (
                  <ContradictionCard key={index} insight={insight} />
                ))}
              </div>
            </div>
          ) : showExamples ? (
            /* Tampilkan penjelasan potensi tersembunyi tanpa contoh */
            <div>
              <h3 className="text-lg font-medium mb-3">Potensi Tersembunyi</h3>
              <div className="mb-4 text-sm text-muted-foreground">
                <p>Berdasarkan jawaban Anda, kami belum mendeteksi potensi tersembunyi yang spesifik. Potensi tersembunyi adalah kemampuan unik yang muncul dari kombinasi skill yang tampaknya bertentangan.</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="h-5 w-5 text-blue-500" />
                    <h4 className="font-medium">Tentang Potensi Tersembunyi</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Potensi tersembunyi muncul ketika Anda menunjukkan kemampuan di dua area yang biasanya bertentangan, seperti struktur dan kreativitas, atau analisis dan emosi. Ini menunjukkan fleksibilitas kognitif dan kemampuan adaptasi yang tinggi.</p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Cara Mendeteksi Potensi Tersembunyi</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Jawab lebih banyak pertanyaan dari berbagai kategori untuk membantu kami mendeteksi potensi tersembunyi Anda. Semakin beragam jawaban Anda, semakin baik kami dapat mengidentifikasi kemampuan unik Anda.</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

// Komponen untuk menampilkan satu wawasan kontradiksi
function ContradictionCard({ insight }: { insight: ContradictionInsight }) {
  return (
    <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <Scale className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <h4 className="font-medium text-primary">{insight.dimensionName}</h4>
          <p className="text-sm mt-1">{insight.description}</p>

          {/* Contoh jawaban dihapus sesuai permintaan */}

          <div className="mt-4 pt-3 border-t">
            <div className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-amber-500" />
              <p className="text-sm font-medium">Potensi Skill Tersembunyi:</p>
            </div>
            <div className="mt-2">
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                {insight.potentialSkillName}
              </Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                {insight.potentialSkillDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
