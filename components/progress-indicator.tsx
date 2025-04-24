import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  value: number
  answeredCount?: number
  totalQuestions?: number
  confidenceScore?: number
}

export default function ProgressIndicator({
  value,
  answeredCount,
  totalQuestions,
  confidenceScore
}: ProgressIndicatorProps) {
  const percentage = Math.round(value * 100)
  const confidencePercentage = confidenceScore !== undefined ? Math.round(confidenceScore * 100) : null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm shadow-md px-4 py-3">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium">
            {confidenceScore !== undefined ? 'Confidence' : 'Progress'}
          </span>
          <div className="flex items-center gap-2">
            {answeredCount !== undefined && (
              <span className="text-sm text-muted-foreground">
                {answeredCount} {totalQuestions ? `dari ${totalQuestions}` : ''} pertanyaan
              </span>
            )}
            <span
              className={`text-sm font-medium px-2 py-0.5 rounded-full ${
                confidenceScore !== undefined
                  ? confidencePercentage >= 80
                    ? 'bg-green-500 text-white'
                    : confidencePercentage >= 70
                      ? 'bg-primary text-white'
                      : 'bg-amber-500 text-white'
                  : 'bg-primary text-white'
              }`}
            >
              {confidencePercentage !== null ? `${confidencePercentage}%` : `${percentage}%`}
              {confidencePercentage !== null && confidencePercentage >= 80 && " (Tinggi)"}
              {confidencePercentage !== null && confidencePercentage >= 70 && confidencePercentage < 80 && " (Baik)"}
              {confidencePercentage !== null && confidencePercentage < 70 && " (Sedang)"}
            </span>
          </div>
        </div>
        <Progress
          value={confidencePercentage !== null ? confidencePercentage : percentage}
          className={`h-2 ${
            confidenceScore !== undefined
              ? confidencePercentage >= 80
                ? 'bg-green-100 dark:bg-green-950'
                : confidencePercentage >= 70
                  ? 'bg-primary/20'
                  : 'bg-amber-100 dark:bg-amber-950'
              : ''
          }`}
        />
      </div>
    </div>
  )
}
