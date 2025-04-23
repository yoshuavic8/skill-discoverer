"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from "chart.js"
import { spheres } from "@/lib/data"

interface SphereRadarChartProps {
  distribution: Record<number, number>
}

// Helper function to get skill level label
function getSkillLevelLabel(probability: number): string {
  if (probability >= 0.8) return "(Ahli)"
  if (probability >= 0.6) return "(Mahir)"
  if (probability >= 0.4) return "(Baik)"
  if (probability >= 0.2) return "(Menengah)"
  return "(Dasar)"
}

export default function SphereRadarChart({ distribution }: SphereRadarChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipData, setTooltipData] = useState({ x: 0, y: 0, label: "", value: 0 })

  useEffect(() => {
    // Register the required chart components
    Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        // Prepare data for the chart
        const labels = spheres.map((sphere) => sphere.name)
        const data = spheres.map((sphere) => distribution[sphere.id] || 0)
        const colors = spheres.map((sphere) => sphere.color)
        const backgroundColors = spheres.map((sphere) => `${sphere.color}33`) // 20% opacity

        // Create new chart instance
        chartInstance.current = new Chart(ctx, {
          type: "radar",
          data: {
            labels,
            datasets: [
              {
                label: "Skill Distribution",
                data,
                backgroundColor: "rgba(74, 144, 226, 0.2)",
                borderColor: "rgba(74, 144, 226, 1)",
                pointBackgroundColor: colors,
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: colors,
                pointHoverRadius: 8,
                pointRadius: 6,
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                max: 1,
                ticks: {
                  stepSize: 0.2,
                  callback: (value) => {
                    // Menampilkan nilai sebagai persentase dengan label yang lebih informatif
                    const percent = (value as number) * 100;
                    if (percent === 0) return "0%";
                    if (percent <= 20) return percent + "% (Dasar)";
                    if (percent <= 40) return percent + "% (Menengah)";
                    if (percent <= 60) return percent + "% (Baik)";
                    if (percent <= 80) return percent + "% (Mahir)";
                    return percent + "% (Ahli)";
                  },
                  backdropColor: "rgba(255, 255, 255, 0.75)",
                  backdropPadding: 2,
                },
                grid: {
                  color: "rgba(0, 0, 0, 0.1)",
                },
                angleLines: {
                  color: "rgba(0, 0, 0, 0.1)",
                },
                pointLabels: {
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                  color: (context) => {
                    const index = context.index
                    return activePoint === index ? spheres[index].color : "#666"
                  },
                  padding: 20,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "#333",
                bodyColor: "#333",
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                  title: (context) => {
                    const index = context[0].dataIndex
                    return spheres[index].name
                  },
                  label: (context) => {
                    const value = context.raw as number
                    const index = context.dataIndex
                    const sphere = spheres[index]
                    let levelLabel = "Dasar";
                    const percent = Math.round(value * 100);

                    if (percent > 80) levelLabel = "Ahli";
                    else if (percent > 60) levelLabel = "Mahir";
                    else if (percent > 40) levelLabel = "Baik";
                    else if (percent > 20) levelLabel = "Menengah";

                    return [
                      `Score: ${percent}% (${levelLabel})`,
                      `Sphere: ${sphere.description}`
                    ]
                  },
                  labelTextColor: (context) => {
                    const index = context.dataIndex
                    return spheres[index].color
                  },
                },
              },
            },
            elements: {
              line: {
                tension: 0.2, // Smoother lines
              },
            },
            animation: {
              duration: 1500,
              easing: "easeOutQuart",
            },
            onHover: (event, elements) => {
              if (elements && elements.length > 0) {
                const index = elements[0].index
                setActivePoint(index)
              } else {
                setActivePoint(null)
              }
            },
          },
        })
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [distribution, activePoint])

  return (
    <div className="relative">
      <div className="aspect-square w-full h-[400px]">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {spheres.map((sphere) => (
          <div
            key={sphere.id}
            className="flex items-center p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            onMouseEnter={() => setActivePoint(spheres.findIndex((s) => s.id === sphere.id))}
            onMouseLeave={() => setActivePoint(null)}
          >
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: sphere.color }}></div>
            <div className="text-sm font-medium truncate">{sphere.name}</div>
            <div className="ml-auto text-sm font-bold">
              {Math.round((distribution[sphere.id] || 0) * 100)}%
              <span className="text-xs ml-1 text-muted-foreground">
                {getSkillLevelLabel(distribution[sphere.id] || 0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
