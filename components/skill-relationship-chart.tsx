"use client"

import { useEffect, useRef } from "react"
import type { PredictedSkill } from "@/lib/types"
import { ForceGraph2D } from "react-force-graph"

interface SkillRelationshipChartProps {
  skills: PredictedSkill[]
  limit?: number
}

interface GraphNode {
  id: string
  name: string
  val: number
  color: string
  group: number
  description: string
}

interface GraphLink {
  source: string
  target: string
  value: number
}

interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

export default function SkillRelationshipChart({ skills, limit = 10 }: SkillRelationshipChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)

  useEffect(() => {
    // Prepare graph data
    const graphData: GraphData = { nodes: [], links: [] }

    // Limit and sort skills by probability
    const topSkills = [...skills].sort((a, b) => b.probability - a.probability).slice(0, limit)

    // Add nodes for top skills
    topSkills.forEach((skill) => {
      graphData.nodes.push({
        id: skill.skillId,
        name: skill.skill.name,
        val: skill.probability * 20, // Size based on probability
        color: skill.sphere?.color || '#6366f1',
        group: skill.skill.sphere_id,
        description: skill.skill.description,
      })

      // Add related skills as nodes
      skill.skill.related_skills.forEach((relatedId) => {
        // Check if this related skill is already in our nodes
        if (!graphData.nodes.some((node) => node.id === relatedId)) {
          // Find the related skill in the full skills list
          const relatedSkill = skills.find((s) => s.skillId === relatedId)
          if (relatedSkill) {
            graphData.nodes.push({
              id: relatedId,
              name: relatedSkill.skill.name,
              val: relatedSkill.probability * 15, // Slightly smaller
              color: relatedSkill.sphere?.color || '#6366f1',
              group: relatedSkill.skill.sphere_id,
              description: relatedSkill.skill.description,
            })
          }
        }

        // Add link between skill and related skill
        graphData.links.push({
          source: skill.skillId,
          target: relatedId,
          value: 1,
        })
      })
    })

    // Render the graph
    if (containerRef.current && graphData.nodes.length > 0) {
      const width = containerRef.current.clientWidth
      const height = 400

      if (!graphRef.current) {
        graphRef.current = ForceGraph2D()
          .graphData(graphData)
          .width(width)
          .height(height)
          .nodeLabel((node: any) => `${node.name}: ${node.description}`)
          .nodeColor((node: any) => node.color)
          .nodeVal((node: any) => node.val)
          .linkWidth(2)
          .linkColor(() => "#cccccc")
          .d3AlphaDecay(0.02)
          .d3VelocityDecay(0.1)
          .cooldownTime(3000)
          .onNodeHover((node: any) => {
            containerRef.current!.style.cursor = node ? "pointer" : "default"
          })(containerRef.current)
      } else {
        graphRef.current.graphData(graphData).width(width).height(height)
      }
    }

    // Cleanup
    return () => {
      if (graphRef.current) {
        graphRef.current._destructor && graphRef.current._destructor()
      }
    }
  }, [skills, limit])

  return (
    <div
      className="w-full h-[400px] bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden"
      ref={containerRef}
    >
      {skills.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Tidak ada data skill yang tersedia</p>
        </div>
      )}
    </div>
  )
}
