import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  value: number
  answeredCount?: number
  totalQuestions?: number
}

export default function ProgressIndicator({ value, answeredCount, totalQuestions }: ProgressIndicatorProps) {
  const percentage = Math.round(value * 100)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 shadow-md px-4 py-3">
      <div className="container mx-auto">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium">Progress</span>
          <div className="flex items-center gap-2">
            {answeredCount !== undefined && totalQuestions !== undefined && (
              <span className="text-sm text-muted-foreground">
                {answeredCount} dari {totalQuestions} pertanyaan
              </span>
            )}
            <span className="text-sm font-medium bg-primary text-white px-2 py-0.5 rounded-full">{percentage}%</span>
          </div>
        </div>
        <Progress value={percentage} className="h-2" />
      </div>
    </div>
  )
}
