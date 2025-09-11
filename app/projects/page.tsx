"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink, Github, BookOpen, Home } from "lucide-react"
import { projects, technologies, categories } from "@/lib/projects-data"
import { Project } from "@/lib/projects-data"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const techMatch = selectedTech === "All" || project.tech.some(tech => 
      tech.toLowerCase().includes(selectedTech.toLowerCase())
    )
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    return techMatch && categoryMatch
  })

  // Handle scroll and update current index
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return

    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = 400 // Approximate card width + gap
    const newIndex = Math.round(scrollLeft / cardWidth)

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < filteredProjects.length) {
      setCurrentIndex(newIndex)
    }
  }

  // Smooth scroll to specific card
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return

    setIsScrolling(true)
    const container = scrollContainerRef.current
    const cardWidth = 400
    const targetScrollLeft = index * cardWidth

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    })

    setTimeout(() => {
      setIsScrolling(false)
    }, 500)
  }

  // Navigation functions
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1
    scrollToCard(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0
    scrollToCard(newIndex)
  }

  // Reset current index when filters change
  useEffect(() => {
    setCurrentIndex(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }, [selectedTech, selectedCategory])

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-20 pb-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight text-reveal">
              Explore My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-reveal text-reveal-delay-1">
              A curated collection of DevOps, cloud infrastructure, and engineering projects 
              showcasing modern development practices and innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12 text-reveal text-reveal-delay-2">
            {/* Technology Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Technology:</span>
              {technologies.slice(0, 8).map((tech, index) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-full button-hover ${
                    selectedTech === tech
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105"
                      : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-blue-300"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  {tech}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Category:</span>
              {categories.slice(0, 6).map((category, index) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full button-hover ${
                    selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-lg scale-105"
                      : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-green-300"
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-center mb-8 text-reveal text-reveal-delay-3">
            <p className="text-gray-600">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            {filteredProjects.length > 3 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </Button>
              </>
            )}

            {/* Projects Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 carousel-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" }
              }}
              onScroll={handleScroll}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const handleCardClick = () => {
    window.location.href = `/projects/${project.id}`
  }

  return (
    <div className="flex-shrink-0 w-96 snap-start">
      <Card className="group cursor-pointer h-full bg-white border border-gray-200 rounded-3xl overflow-hidden card-hover hover:border-blue-200 text-reveal"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            onClick={handleCardClick}>
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured Badge */}
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-yellow-500 text-white border-0 shadow-lg">
              Featured
            </Badge>
          )}

          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-4 right-4 bg-white/90 text-gray-700 border-0 shadow-lg"
          >
            {project.category}
          </Badge>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          {/* Title and Year */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-sm text-gray-500 font-medium">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{project.tech.length - 4} more
              </Badge>
            )}
          </div>

          {/* Project Links */}
          <div className="flex flex-col space-y-3 pt-2">
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
              {project.blogUrl && (
                <a
                  href={project.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Blog</span>
                </a>
              )}
            </div>
            
            {/* Duration */}
            <div className="text-sm text-gray-500">
              {project.duration}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
