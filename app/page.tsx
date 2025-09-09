"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function JosephKangPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
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

  const projects = [
    {
      title: "Kubernetes Orchestration",
      description: "Multi-cluster deployment pipeline with automated scaling and monitoring",
      tech: "K8s, Docker, Helm",
      category: "DevOps",
    },
    {
      title: "AWS Infrastructure",
      description: "Serverless architecture with CI/CD pipeline and infrastructure as code",
      tech: "AWS, Terraform, Lambda",
      category: "Cloud",
    },
    {
      title: "Monitoring Stack",
      description: "Complete observability solution with metrics, logs, and distributed tracing",
      tech: "Prometheus, Grafana, ELK",
      category: "Monitoring",
    },
    {
      title: "Security Automation",
      description: "Automated security scanning and compliance monitoring for cloud workloads",
      tech: "Vault, SAST, DAST",
      category: "Security",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = (e.clientY - centerY) / 15
    const rotateY = (e.clientX - centerX) / 15

    setGlassRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setGlassRotation({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900">Joseph Kang</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                Projects
              </a>
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

      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight">Joseph Kang</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">DevOps Engineer & Cloud Architect</p>
          </div>

          <div
            className="relative w-64 h-64 mx-auto cursor-pointer group my-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
          >
            <div
              className="w-full h-full transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${glassRotation.x}deg) rotateY(${glassRotation.y}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl border border-slate-300 group-hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl backdrop-blur-sm" />

                {/* Cloud infrastructure layers */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-sm flex items-center justify-center">
                  <div className="text-white text-xs font-medium drop-shadow-sm">Cloud Infrastructure</div>
                </div>

                {/* Container orchestration layer */}
                <div className="absolute top-16 left-6 right-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-md shadow-sm flex items-center justify-center">
                  <div className="text-white text-xs drop-shadow-sm">Kubernetes</div>
                </div>

                {/* Microservices containers */}
                <div className="absolute top-26 left-8 w-12 h-4 bg-orange-400 rounded shadow-sm"></div>
                <div className="absolute top-26 left-22 w-12 h-4 bg-purple-400 rounded shadow-sm"></div>
                <div className="absolute top-26 right-8 w-12 h-4 bg-pink-400 rounded shadow-sm"></div>

                {/* Data flow connections */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gray-400"></div>
                <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-400"></div>

                {/* Database layer */}
                <div className="absolute bottom-8 left-8 right-8 h-6 bg-gradient-to-r from-red-400 to-rose-500 rounded-md shadow-sm flex items-center justify-center">
                  <div className="text-white text-xs drop-shadow-sm">Database Layer</div>
                </div>

                {/* Monitoring indicators */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>

                {/* Subtle highlight */}
                <div className="absolute top-2 left-4 w-8 h-1 bg-white/40 rounded-full blur-sm" />
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Cloud Architecture Visualization
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specializing in cloud infrastructure, container orchestration, and DevOps automation. Building scalable,
            secure, and efficient systems that power modern applications.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-200">
              View Projects
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-all duration-200 bg-transparent"
            >
              Download Resume
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of DevOps and cloud infrastructure projects showcasing modern engineering practices
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
              projectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white border border-gray-200 rounded-2xl transform ${
                  activeProject === index ? "ring-2 ring-blue-500 shadow-lg scale-105" : ""
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-gray-500">Tech Stack: </span>
                    <span className="text-sm text-gray-700">{project.tech}</span>
                  </div>
                </div>
              </Card>
            ))}
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
            <Button className="px-12 py-4 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:shadow-lg">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 rounded-full font-medium text-lg transition-all duration-300 bg-transparent transform hover:shadow-md"
            >
              View LinkedIn →
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
