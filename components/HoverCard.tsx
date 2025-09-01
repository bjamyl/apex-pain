"use client"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface HoverCardProps {
  icon: LucideIcon
  title: string
  description: string
  backgroundImage: string
}

export function HoverCard({ icon: Icon, title, description, backgroundImage }: HoverCardProps) {
  return (
    <Card className="group h-fit border-none text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer border-2 hover:border-transparent overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <CardHeader className="relative z-10">
        <div className="w-16 h-16 bg-purple-700/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
          <Icon className="h-8 w-8 text-purple-700 group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="group-hover:text-white transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="group-hover:text-white/90 transition-colors font-light duration-300">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}