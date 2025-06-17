"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Video } from "@/constants/services"



interface VideoModalProps {
  video: Video
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={handleClose}
          >
            <X className="w-4 h-4" />
          </Button>

          <video ref={videoRef} controls className="w-full aspect-video" poster={video.thumbnail}>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{video.title}</h2>
            <p className="text-slate-600 leading-relaxed">{video.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
