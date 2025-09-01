"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Heart, X } from "lucide-react"

export function PainAwarenessDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the dialog before
    const hasSeenDialog = localStorage.getItem("pain-awareness-dialog-seen")
    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // localStorage.setItem("pain-awareness-dialog-seen", "true")
  }

  const handleLearnMore = () => {
    handleClose()
    // Scroll to the Pain Awareness Education Section
    const section = document.querySelector('[data-section="pain-awareness"]')
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-0 bg-gray-300">
        <DialogDescription className="sr-only">
            September is Pain Awareness Month - Learn more about chronic pain and effective management solutions.
        </DialogDescription>
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Image section */}
          <div className="relative h-72 overflow-hidden">
            <img
              src="/painawareness.png"
              alt="Happy elderly couple with healthcare professional"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Content section */}
          <div className="p-8">
            <DialogHeader className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-purple-700" />
                <div className="w-8 h-1 bg-primary rounded-full" />
                <Heart className="h-6 w-6 text-defaultGreen" />
              </div>

              <DialogTitle className="text-3xl text-defaultGreen font-bold text-balance text-center leading-tight">
                September is Pain Awareness Month
              </DialogTitle>

              <div className="space-y-4 text-center">
                <p className="md:text-lg text-muted-foreground text-pretty leading-relaxed">
                  Join us in raising awareness about chronic pain and breaking the stigma. This month, we're dedicated
                  to educating our community about effective pain management solutions.
                </p>

                <div className="bg-gray-200 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Did you know?</strong> Over 50 million Americans live with chronic
                    pain, yet many suffer in silence. You're not alone, and effective treatments are available.
                  </p>
                </div>
              </div>
            </DialogHeader>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button
                onClick={handleLearnMore}
                className="flex-1 bg-purple-700 py-2 text-primary-foreground"
                size="lg"
              >
                <Heart className="h-4 w-4 mr-2" />
                Learn More About Pain Awareness
              </Button>

              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-defaultGreen py-1 text-defaultGreen hover:bg-primary/5 bg-transparent"
                size="lg"
              >
                Continue to Website
              </Button>
            </div>

            {/* Small disclaimer */}
            <p className="text-xs text-muted-foreground text-center mt-4 opacity-70">
              This message will only appear once. You can always find Pain Awareness Month information throughout our
              website.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
