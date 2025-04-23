import type { Sphere } from "@/lib/types"

interface SphereGridProps {
  spheres: Sphere[]
}

export default function SphereGrid({ spheres }: SphereGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {spheres.map((sphere) => (
        <div
          key={sphere.id}
          className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform hover:scale-105 dark:bg-slate-800"
          style={{ borderTop: `4px solid ${sphere.color}` }}
        >
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
            style={{ backgroundColor: `${sphere.color}20` }}
          >
            {sphere.icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold">{sphere.name}</h3>
          <p className="text-sm text-muted-foreground">{sphere.description}</p>
        </div>
      ))}
    </div>
  )
}
