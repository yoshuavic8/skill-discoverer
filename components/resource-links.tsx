import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LearningResource } from "@/lib/types"

interface ResourceLinksProps {
  resources: LearningResource[]
}

export default function ResourceLinks({ resources }: ResourceLinksProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {resources.map((resource, index) => (
        <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="outline" className="h-auto w-full justify-between p-4 text-left">
            <div>
              <div className="font-medium">{resource.title}</div>
              <div className="text-sm text-muted-foreground">{resource.type}</div>
            </div>
            <ExternalLink className="h-4 w-4 flex-shrink-0" />
          </Button>
        </a>
      ))}
    </div>
  )
}
