"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Code, Database, Server, Zap, Cloud as CloudIcon } from "lucide-react"
import Link from "next/link"

export default function TechnologiesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
              Technologies & Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern tools and frameworks for building scalable cloud solutions. 
              From infrastructure automation to monitoring and security.
            </p>
          </div>

        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across modern cloud, development, and infrastructure technologies
            </p>
          </div>

          <div className="space-y-16">
            {/* Cloud & DevOps */}
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600"> 
                  <CloudIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Cloud & DevOps</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-2xl shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="h-10 w-auto" alt="aws logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="h-10 w-auto" alt="google cloud logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="h-10 w-auto" alt="terraform logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" className="h-10 w-auto" alt="ansible logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" className="h-10 w-auto" alt="kubernetes logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-10 w-auto" alt="docker logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="h-10 w-auto" alt="jenkins logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" className="h-10 w-auto" alt="prometheus logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" className="h-10 w-auto" alt="grafana logo" />
              </div>
            </div>

            {/* Programming Languages */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-2xl shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-10 w-auto" alt="python logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-10 w-auto" alt="javascript logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="h-10 w-auto" alt="java logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-10 w-auto" alt="html5 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-10 w-auto" alt="css3 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-10 w-auto" alt="typescript logo" />
              </div>
            </div>

            {/* Databases & Data */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Databases & Data</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-2xl shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-10 w-auto" alt="mysql logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-10 w-auto" alt="postgresql logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="h-10 w-auto" alt="mongodb logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" className="h-10 w-auto" alt="redis logo" />
              </div>
            </div>

            {/* AI & Development Tools */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI & Development Tools</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-2xl shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="h-10 w-auto" alt="vscode logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="h-10 w-auto" alt="tensorflow logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="h-10 w-auto" alt="github logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" className="h-10 w-auto" alt="jupyter logo" />
              </div>
            </div>

            {/* Operating Systems & Tools */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Operating Systems & Tools</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-2xl shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="h-10 w-auto" alt="linux logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" className="h-10 w-auto" alt="ubuntu logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" className="h-10 w-auto" alt="bash logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-10 w-auto" alt="git logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ready to Build Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's leverage these technologies to create innovative solutions for your infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View My Projects
              </Button>
            </Link>
            <Link href="/technical-expertise">
              <Button
                variant="outline"
                className="px-8 py-4 border-gray-300 text-gray-700 hover:bg-white hover:scale-105 rounded-full font-medium text-lg transition-all duration-300 bg-transparent hover:shadow-md"
              >
                View Expertise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

