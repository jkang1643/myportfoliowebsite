"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Panel {
  id: string
  headline: string
  subtext: string
  background: string
  textColor: string
  image?: string
  content?: React.ReactNode
}

interface HorizontalPanelsProps {
  panels: Panel[]
  className?: string
}

export function HorizontalPanels({ panels, className = "" }: HorizontalPanelsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isAutoTransitioning, setIsAutoTransitioning] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const autoTransitionRef = useRef<NodeJS.Timeout>()

  // Handle scroll snap and update current index
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return

    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth
    const newIndex = Math.round(scrollLeft / containerWidth)

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  // Smooth scroll to specific panel
  const scrollToPanel = (index: number) => {
    if (!scrollContainerRef.current) return

    setIsScrolling(true)
    const container = scrollContainerRef.current
    const containerWidth = container.clientWidth
    const targetScrollLeft = index * containerWidth

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    })

    // Reset scrolling state after animation
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 500)
  }

  // Navigation functions
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : panels.length - 1
    scrollToPanel(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex < panels.length - 1 ? currentIndex + 1 : 0
    scrollToPanel(newIndex)
  }

  // Navigation with auto-transition pause
  const handlePrevious = () => {
    pauseAutoTransition()
    goToPrevious()
    resumeAutoTransition()
  }

  const handleNext = () => {
    pauseAutoTransition()
    goToNext()
    resumeAutoTransition()
  }

  // Auto-transition effect
  useEffect(() => {
    if (!isAutoTransitioning) return

    const startAutoTransition = () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current)
      }
      
      autoTransitionRef.current = setTimeout(() => {
        goToNext()
      }, 4000) // Transition every 4 seconds
    }

    startAutoTransition()

    return () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current)
      }
    }
  }, [currentIndex, isAutoTransitioning])

  // Pause auto-transition on user interaction
  const pauseAutoTransition = () => {
    setIsAutoTransitioning(false)
    if (autoTransitionRef.current) {
      clearTimeout(autoTransitionRef.current)
    }
  }

  // Resume auto-transition after a delay
  const resumeAutoTransition = () => {
    setTimeout(() => {
      setIsAutoTransitioning(true)
    }, 5000) // Resume after 5 seconds of inactivity
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        pauseAutoTransition()
        goToPrevious()
        resumeAutoTransition()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        pauseAutoTransition()
        goToNext()
        resumeAutoTransition()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    pauseAutoTransition()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
    
    resumeAutoTransition()
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className="flex-shrink-0 w-full h-screen snap-start relative"
            style={{ backgroundColor: panel.background }}
          >
            <div className="h-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                {/* Headline */}
                <h2
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight px-4"
                  style={{ color: panel.textColor }}
                >
                  {panel.headline}
                </h2>

                {/* Subtext */}
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto px-4"
                  style={{ color: panel.textColor, opacity: 0.8 }}
                >
                  {panel.subtext}
                </p>

                {/* Custom content or image */}
                {panel.content ? (
                  <div className="mt-8 sm:mt-12 px-4">{panel.content}</div>
                ) : panel.image ? (
                  <div className="mt-8 sm:mt-12 px-4">
                    <img
                      src={panel.image}
                      alt={panel.headline}
                      className="max-w-full h-auto max-h-64 sm:max-h-96 mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            {/* Plus icon indicator - hidden on mobile */}
            <div className="hidden sm:block absolute bottom-8 right-8">
              <div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                style={{ 
                  borderColor: panel.textColor, 
                  color: panel.textColor,
                  opacity: 0.6 
                }}
              >
                <span className="text-lg font-light">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      </div>

      <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {panels.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              pauseAutoTransition()
              scrollToPanel(index)
              resumeAutoTransition()
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to panel ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-transition indicator */}
      {isAutoTransitioning && (
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <span className="text-xs text-white/80 font-light">Auto</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Add scrollbar styles to global CSS instead
