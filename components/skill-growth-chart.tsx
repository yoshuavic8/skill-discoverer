"use client"

import { useEffect, useRef } from "react"
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"
import type { PredictedSkill } from "@/lib/types"

interface SkillGrowthChartProps {
  skills: PredictedSkill[]
  limit?: number
}

export default function SkillGrowthChart({ skills, limit = 5 }: SkillGrowthChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    // Register the required chart components
    Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        // Limit and sort skills by probability
        const topSkills = [...skills].sort((a, b) => b.probability - a.probability).slice(0, limit)

        // Simulate growth data (in a real app, this would come from historical data)
        const timeLabels = ["Awal", "1 Bulan", "3 Bulan", "6 Bulan", "1 Tahun"]

        // Create datasets for each skill
        const datasets = topSkills.map((skill) => {
          // Simulate growth curve based on difficulty_curve
          const difficulty = skill.skill.difficulty_curve || 0.5
          const currentLevel = skill.probability

          // Generate growth projection
          // Higher difficulty = slower initial growth but potentially higher ceiling
          const growthData = [
            currentLevel * 0.7, // Starting point (70% of current)
            currentLevel, // Current level
            Math.min(currentLevel * (1 + (1 - difficulty) * 0.5), 0.95), // 3 month projection
            Math.min(currentLevel * (1 + (1 - difficulty) * 0.8), 0.98), // 6 month projection
            Math.min(currentLevel * (1 + (1 - difficulty) * 1.2), 0.99), // 1 year projection
          ]

          return {
            label: skill.skill.name,
            data: growthData.map((v) => v * 100), // Convert to percentage
            borderColor: skill.sphere?.color || '#6366f1',
            backgroundColor: `${skill.sphere?.color || '#6366f1'}20`,
            pointBackgroundColor: skill.sphere?.color || '#6366f1',
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: skill.sphere?.color || '#6366f1',
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            fill: false,
          }
        })

        // Create new chart instance
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: timeLabels,
            datasets,
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                title: {
                  display: true,
                  text: "Proyeksi Waktu",
                  font: {
                    weight: "bold",
                  },
                },
              },
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: "Skill Level (%)",
                  font: {
                    weight: "bold",
                  },
                },
                grid: {
                  color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                  callback: (value) => `${value}%`,
                },
              },
            },
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  boxWidth: 8,
                  padding: 15,
                },
              },
              tooltip: {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "#333",
                bodyColor: "#333",
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                  label: (context) => {
                    const datasetIndex = context.datasetIndex
                    const skill = topSkills[datasetIndex]
                    return [`${skill.skill.name}: ${context.formattedValue}%`, `Sphere: ${skill.sphere?.name || 'Unknown'}`]
                  },
                },
              },
            },
            animation: {
              duration: 2000,
            },
            elements: {
              line: {
                borderWidth: 3,
              },
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
  }, [skills, limit])

  return (
    <div className="w-full h-[400px]">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
