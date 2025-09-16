"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface IndividualPanel {
  id: string
  headline: string
  subtext: string
  background: string
  textColor: string
  image: string
  imageAlt: string
}

interface IndividualPanelScrollerProps {
  panels: IndividualPanel[]
  className?: string
}

export function IndividualPanelScroller({ panels, className = "" }: IndividualPanelScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  // Handle scroll snap and update current index
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return

    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = 288 // w-72 = 18rem = 288px
    const newIndex = Math.round(scrollLeft / cardWidth)

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < panels.length) {
      setCurrentIndex(newIndex)
    }
  }

  // Smooth scroll to specific panel
  const scrollToPanel = (index: number) => {
    if (!scrollContainerRef.current) return

    setIsScrolling(true)
    const container = scrollContainerRef.current
    const cardWidth = 288 // w-72 = 18rem = 288px
    const targetScrollLeft = index * cardWidth

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goToNext()
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
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pt-4 pb-4 gap-8"
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
            className="flex-shrink-0 w-72 md:w-80 lg:w-96 h-[32rem] snap-start relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col group"
            style={{ backgroundColor: panel.background }}
          >
            {/* Text area at the top with matching background */}
            <div 
              className="flex-shrink-0 p-6"
              style={{ 
                background: panel.background,
                minHeight: '120px'
              }}
            >
              <div className="text-center space-y-3">
                {/* Headline */}
                {panel.id === "projects" ? (
                  <Link href="/projects">
                    <h3
                      className="text-xl md:text-2xl font-semibold leading-tight cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      style={{ color: panel.textColor }}
                    >
                      {panel.headline}
                    </h3>
                  </Link>
                ) : (
                  <h3
                    className="text-xl md:text-2xl font-semibold leading-tight"
                    style={{ color: panel.textColor }}
                  >
                    {panel.headline}
                  </h3>
                )}

                {/* Subtext */}
                <p
                  className="text-sm md:text-base font-light leading-relaxed"
                  style={{ color: panel.textColor, opacity: 0.8 }}
                >
                  {panel.subtext}
                </p>
              </div>
            </div>

            {/* Image area below text */}
            <div className="flex-1 relative">
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </Button>
      </div>

      <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </Button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {panels.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPanel(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gray-700 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to panel ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
