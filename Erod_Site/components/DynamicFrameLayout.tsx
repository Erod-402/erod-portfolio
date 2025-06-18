"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Switch } from "@/components/ui/switch"

interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
}

const initialFrames: Frame[] = [
  {
    id: 1,
    video: "/videos/erod-vid-talk.mp4", // First video (top left)
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 2,
    video: "/videos/erod-vid-build.mp4", // Second video (top right)
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 4,
    video: "/videos/erod-vid-fintech.mp4", // Third video (bottom left)
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 5,
    video: "/videos/erod-vid-life.mp4", // Fourth video (bottom right) - Updated
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(8) // Slightly larger gap
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [showFrames, setShowFrames] = useState(false) // Frames off by default
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all")

  const getRowSizes = () => {
    if (hovered === null) {
      return "1fr 1fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "1fr 1fr" // Changed to 2 columns
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ") // Changed to 2 columns
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : "bottom"
    const horizontal = x === 0 ? "left" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  // Changed to 2x2 grid layout with hover effects and frame toggle
  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-end items-center mb-4">
        <div className="flex items-center space-x-2">
          <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
          <label htmlFor="frame-toggle" className="text-sm text-white">
            {showFrames ? "Hide Frames" : "Show Frames"}
          </label>
        </div>
      </div>

      <div
        className="relative w-full h-[calc(100%-40px)]" // Adjusted height to account for toggle
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.slice(0, 4).map((frame, index) => {
          // Only show first 4 frames
          // Calculate row and col for 2x2 grid
          const row = Math.floor(index / 2)
          const col = index % 2
          const transformOrigin = getTransformOrigin(col * 4, row * 4)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                video={frame.video}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
                showFrame={showFrames}
                autoplayMode={autoplayMode}
                isHovered={hovered?.row === row && hovered?.col === col}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
