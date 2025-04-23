import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { PredictedSkill } from "@/lib/types"

interface SkillCardsProps {
  skills: PredictedSkill[]
}

export default function SkillCards({ skills }: SkillCardsProps) {
  return (
    <div className="space-y-4">
      {skills.map((item) => (
        <Card key={item.skillId} className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
                  style={{ backgroundColor: item.sphere?.color }}
                >
                  {item.sphere?.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{item.skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.sphere?.name}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium dark:bg-slate-700">
                  {Math.round(item.probability * 100)}%
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  Confidence: {Math.round(item.confidenceScore * 100)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <div className="mb-1 flex justify-between text-xs">
                <span>Skill Level</span>
                <span className="font-medium">{getSkillLevelLabel(item.probability)}</span>
              </div>
              <Progress
                value={item.probability * 100}
                className="h-2"
                indicatorClassName="transition-all duration-500"
                style={{
                  backgroundColor: `${item.sphere?.color}20`,
                }}
                indicatorStyle={{
                  backgroundColor: item.sphere?.color,
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{item.skill.description}</p>

            {item.skill.related_skills.length > 0 && (
              <div className="mt-3">
                <p className="mb-1 text-xs font-medium">Related Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {item.skill.related_skills.map((relatedId) => {
                    const relatedSkill = skills.find((s) => s.skillId === relatedId)
                    return (
                      <span
                        key={relatedId}
                        className="inline-flex items-center rounded-full px-2 py-1 text-xs"
                        style={{
                          backgroundColor: relatedSkill ? `${relatedSkill.sphere?.color}20` : "rgba(0,0,0,0.1)",
                          color: relatedSkill ? relatedSkill.sphere?.color : "inherit",
                        }}
                      >
                        {relatedSkill ? relatedSkill.skill.name : relatedId}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function getSkillLevelLabel(probability: number): string {
  if (probability >= 0.9) return "Expert"
  if (probability >= 0.75) return "Advanced"
  if (probability >= 0.6) return "Intermediate"
  if (probability >= 0.4) return "Basic"
  return "Novice"
}
