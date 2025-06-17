"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Clock, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoModal } from "./VideoModal"
import { Video } from "@/constants/services"



interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Card
        className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-0 shadow-md"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              width={320}
              height={240}
              className={`w-full h-48 lg:h-72 xl:h-80 object-cover transition-transform duration-300 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-full p-4 transition-all duration-300 ${
                  isHovered ? "scale-110 bg-white" : "scale-100"
                }`}
              >
                <Play className="w-8 h-8 text-slate-800 fill-slate-800" />
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {video.duration}
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-slate-700 hover:bg-white">
                <Tag className="w-3 h-3 mr-1" />
                {video.category}
              </Badge>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {video.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{video.description}</p>
          </div>
        </CardContent>
      </Card>

      <VideoModal video={video} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
