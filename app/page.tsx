"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HorizontalPanels } from "@/components/horizontal-panels"
import { IndividualPanelScroller } from "@/components/individual-panel-scroller"
import { CloudArchitectureContent, MacScreenContent, NightWorkContent, AppIconsContent, iPhoneContent } from "@/components/panel-content"
import { projects } from "@/lib/projects-data"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function JosephKangPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [glassRotation, setGlassRotation] = useState({ x: 0, y: 0 })
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [expertiseVisible, setExpertiseVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  const projectsRef = useRef<HTMLElement>(null)
  const expertiseRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === projectsRef.current) {
              setProjectsVisible(true)
            } else if (entry.target === expertiseRef.current) {
              setExpertiseVisible(true)
            } else if (entry.target === ctaRef.current) {
              setCtaVisible(true)
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    if (projectsRef.current) observer.observe(projectsRef.current)
    if (expertiseRef.current) observer.observe(expertiseRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)

    return () => observer.disconnect()
  }, [])


  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = (e.clientY - centerY) / 15
    const rotateY = (e.clientX - centerX) / 15

    setGlassRotation({ x: rotateX, y: rotateY })
  }, [])

  const resetRotation = useCallback(() => {
    setGlassRotation({ x: 0, y: 0 })
  }, [])

  // Apple-inspired panel data
  const panels = [
    {
      id: "architecture",
      headline: "Think different. Build better.",
      subtext: "Joseph Kang - DevOps Engineer & Cloud Architect",
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      textColor: "#1a1a1a",
      content: <CloudArchitectureContent glassRotation={glassRotation} onMouseMove={handleMouseMove} onMouseLeave={resetRotation} />,
    },
    {
      id: "intelligence",
      headline: "Simple solutions. Complex problems.",
      subtext: "The DevOps engineer who makes the impossible, possible.",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      textColor: "#1a1a1a",
      content: <MacScreenContent />,
    },
    {
      id: "performance",
      headline: "Every detail matters. Every process counts.",
      subtext: "Methodical problem-solving with precision and purpose.",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      textColor: "#000000",
      content: <NightWorkContent />,
    },
    {
      id: "ecosystem",
      headline: "Dream team.",
      subtext: "Let's work together.",
      background: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)",
      textColor: "#1a1a1a",
      content: <iPhoneContent />,
    },
    {
      id: "compatibility",
      headline: "I run your production apps.",
      subtext: "Reliable, scalable, always-on solutions.",
      background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      textColor: "#1a1a1a",
      content: <AppIconsContent />,
    },
  ]

  // Individual panel scroller data
  const individualPanels = [
    {
      id: "projects",
      headline: "Featured Projects",
      subtext: "DevOps and cloud infrastructure projects showcasing modern engineering practices",
      background: "#f3f3f3",
      textColor: "#1a1a1a",
      image: "/projects.png",
      imageAlt: "Featured Projects",
    },
    {
      id: "technical-expertise",
      headline: "Technical Expertise",
      subtext: "Cloud platforms, container orchestration, and infrastructure as code",
      background: "#161a23",
      textColor: "#ffffff",
      image: "/technical expertise.png",
      imageAlt: "Technical Expertise",
    },
    {
      id: "technologies",
      headline: "Technologies",
      subtext: "Modern tools and frameworks for scalable cloud solutions",
      background: "#dff3fd",
      textColor: "#1a1a1a",
      image: "/technolgoies.png",
      imageAlt: "Technologies",
    },
    {
      id: "blog",
      headline: "Blog & Insights",
      subtext: "Thoughts on DevOps, cloud architecture, and engineering best practices",
      background: "#DBDBDB",
      textColor: "#1a1a1a",
      image: "/blog.jpg",
      imageAlt: "Blog & Insights",
    },
    {
      id: "contact",
      headline: "Get In Touch",
      subtext: "Ready to discuss your next cloud infrastructure project or DevOps transformation?",
      background: "linear-gradient(to bottom, #0a0f2e 0%, #16205C 100%)",
      textColor: "#ffffff",
      image: "/contact.png",
      imageAlt: "Contact",
    },
  ]

  return (
    <div className="min-h-screen bg-white optimize-rendering">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900">Joseph Kang</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <a href="#resume" className="text-gray-700 hover:text-gray-900 transition-colors">
                Resume
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Apple-inspired horizontal panels */}
      <HorizontalPanels panels={panels} className="h-screen" />

      {/* Individual Panel Scroller Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Get to know me</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover my work, expertise, and insights through these interactive panels
            </p>
          </div>
          
          <IndividualPanelScroller panels={individualPanels} />
        </div>
      </section>

      {/* Apple-Inspired Video Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">This is Me. This is Joseph Kang.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the world of cloud architecture and DevOps engineering
            </p>
          </div>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/placeholder.jpg"
            >
              <source src="/Cinematic_iPad_Resume_Product_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay for text readability if needed */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Minimalistic Resume Download Link */}
          <div className="mt-16 text-center">
            <a
              href="/resume.pdf"
              download="Joseph_Kang_Resume.pdf"
              className="inline-flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
            >
              <svg 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="text-2xl font-medium tracking-wide">Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      <section ref={projectsRef} id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              projectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <Link href="/projects">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                Featured Projects
              </h2>
            </Link>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of DevOps and cloud infrastructure projects showcasing modern engineering practices
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
              projectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            {projects.slice(0, 4).map((project, index) => {
              const handleCardClick = () => {
                window.location.href = `/projects/${project.id}`
              }

              return (
                <Card
                  key={project.id}
                  className="group p-8 cursor-pointer project-card-hover bg-white border border-gray-200 rounded-2xl"
                  onClick={handleCardClick}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-yellow-500 text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="pt-2">
                      <span className="text-sm font-medium text-gray-500">Tech Stack: </span>
                      <span className="text-sm text-gray-700">{project.tech.slice(0, 3).join(", ")}{project.tech.length > 3 ? "..." : ""}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        View Details →
                      </div>
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
                  </div>
                </Card>
              )
            })}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Projects →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section ref={expertiseRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              expertiseVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Technical Expertise</h2>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
              expertiseVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Cloud Platforms</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">AWS</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Google Cloud</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Azure</span>
                    <span className="text-sm text-gray-500">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Container & Orchestration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Kubernetes</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Docker</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Helm</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Infrastructure as Code</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Terraform</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">CloudFormation</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ansible</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Monitoring & Observability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prometheus & Grafana</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ELK Stack</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Jaeger</span>
                    <span className="text-sm text-gray-500">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-20 px-6 bg-gray-50">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to discuss your next cloud infrastructure project or DevOps transformation?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button className="px-12 py-4 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:shadow-lg">
                Explore Projects
              </Button>
            </Link>
            <Button
              variant="outline"
              className="px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 rounded-full font-medium text-lg transition-all duration-300 bg-transparent transform hover:shadow-md"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
