"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js"
import type { PredictedSkill } from "@/lib/types"

interface SkillBarChartProps {
  skills: PredictedSkill[]
  limit?: number
}

export default function SkillBarChart({ skills, limit = 10 }: SkillBarChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    // Register the required chart components
    Chart.register(BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend)

    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        // Limit and sort skills by probability
        const topSkills = [...skills].sort((a, b) => b.probability - a.probability).slice(0, limit)

        // Prepare data for the chart
        const labels = topSkills.map((skill) => skill.skill.name)
        const data = topSkills.map((skill) => skill.probability * 100)
        const colors = topSkills.map((skill) => skill.sphere?.color || '#6366f1')
        const backgroundColors = topSkills.map((skill) => `${skill.sphere?.color || '#6366f1'}99`) // 60% opacity

        // Create new chart instance
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Skill Probability",
                data,
                backgroundColor: backgroundColors,
                borderColor: colors,
                borderWidth: 2,
                borderRadius: 6,
                hoverBackgroundColor: colors,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y", // Horizontal bar chart
            scales: {
              x: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: "Probability (%)",
                  font: {
                    weight: "bold",
                  },
                },
                grid: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                  callback: (value) => `${value}%`,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    weight: (context) => {
                      const index = context.index
                      const skillName = labels[index]
                      return hoveredSkill === skillName ? "bold" : "normal"
                    },
                  },
                  color: (context) => {
                    const index = context.index
                    const skillName = labels[index]
                    return hoveredSkill === skillName ? colors[index] : "#666"
                  },
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
                    return topSkills[index].skill.name
                  },
                  label: (context) => {
                    const index = context.dataIndex
                    const skill = topSkills[index]
                    return [
                      `Probability: ${Math.round(skill.probability * 100)}%`,
                      `Confidence: ${Math.round(skill.confidenceScore * 100)}%`,
                      `Sphere: ${skill.sphere?.name || 'Unknown'}`,
                    ]
                  },
                  labelTextColor: (context) => {
                    const index = context.dataIndex
                    return topSkills[index].sphere?.color || '#6366f1'
                  },
                },
              },
            },
            animation: {
              duration: 1000,
              easing: "easeOutQuart",
            },
            onHover: (event, elements) => {
              if (elements && elements.length > 0) {
                const index = elements[0].index
                setHoveredSkill(labels[index])
              } else {
                setHoveredSkill(null)
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
  }, [skills, limit, hoveredSkill])

  return (
    <div className="w-full h-[400px]">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
