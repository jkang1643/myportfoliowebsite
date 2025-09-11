"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, User, ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Project } from "@/lib/projects-data"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.id)
    setProject(foundProject || null)
    setIsLoading(false)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const images = project.gallery || [project.heroImage || project.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/projects" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Projects</span>
            </Link>
            <div className="flex items-center space-x-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">View Code</span>
                </a>
              )}
              {project.blogUrl && (
                <a
                  href={project.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">How I Built It</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Project Image Gallery */}
          <div className="relative mb-12 text-reveal">
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Meta */}
              <div className="space-y-6 text-reveal text-reveal-delay-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                      {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                  {project.featured && (
                    <Badge className="bg-yellow-500 text-white border-0 shadow-lg text-sm px-3 py-1">
                      Featured Project
                    </Badge>
                  )}
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-semibold text-gray-900">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-semibold text-gray-900">{project.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Badge className="bg-orange-600 text-white border-0">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4 text-reveal text-reveal-delay-3">
                <h3 className="text-2xl font-semibold text-gray-900">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200 px-4 py-2 text-sm apple-hover"
                      style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-0 text-reveal text-reveal-delay-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {project.blogUrl && (
                    <a
                      href={project.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full px-6 py-4 button-hover hover:scale-105 hover:shadow-lg font-semibold"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span className="font-medium">How I Built It</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 button-hover hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Visit Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full px-6 py-3 button-hover hover:scale-105 hover:shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">View Source Code</span>
                    </a>
                  )}
                  
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-3 button-hover"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Projects
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Project Stats */}
              <Card className="p-6 bg-white border border-gray-200 text-reveal text-reveal-delay-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Category</span>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Technologies</span>
                    <span className="font-semibold text-gray-900">{project.tech.length}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Year</span>
                    <span className="font-semibold text-gray-900">{project.year}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{project.duration}</span>
                  </div>
                </div>
              </Card>

              {/* Related Projects */}
              <Card className="p-6 bg-white border border-gray-200 text-reveal text-reveal-delay-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Projects</h3>
                <div className="space-y-3">
                  {projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/projects/${relatedProject.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 apple-hover"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{relatedProject.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedProject.description}</p>
                      </Link>
                    ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
