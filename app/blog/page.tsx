"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Kubernetes Clusters on AWS",
      excerpt: "Learn how to design and implement production-ready Kubernetes clusters using AWS EKS with best practices for security, monitoring, and cost optimization.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      featured: true,
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Infrastructure as Code with Terraform: A Complete Guide",
      excerpt: "Master the fundamentals of Infrastructure as Code using Terraform, including state management, modules, and multi-cloud deployments.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Infrastructure",
      featured: false,
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Monitoring Microservices with Prometheus and Grafana",
      excerpt: "Set up comprehensive monitoring for your microservices architecture using Prometheus for metrics collection and Grafana for visualization.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Monitoring",
      featured: false,
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      title: "CI/CD Best Practices for Cloud-Native Applications",
      excerpt: "Discover proven strategies for implementing continuous integration and deployment pipelines that scale with your cloud-native applications.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "CI/CD",
      featured: true,
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      title: "Security First: Implementing Zero-Trust Architecture",
      excerpt: "Learn how to implement zero-trust security principles in your cloud infrastructure to protect against modern threats.",
      date: "2023-12-10",
      readTime: "9 min read",
      category: "Security",
      featured: false,
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      title: "Cost Optimization Strategies for AWS Workloads",
      excerpt: "Practical techniques to reduce your AWS bill while maintaining performance and reliability in production environments.",
      date: "2023-11-28",
      readTime: "7 min read",
      category: "Cloud",
      featured: false,
      image: "/placeholder.jpg"
    }
  ]

  const categories = ["All", "DevOps", "Infrastructure", "Monitoring", "CI/CD", "Security", "Cloud"]

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
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts on DevOps, cloud architecture, and engineering best practices. 
              Sharing knowledge and experiences from building scalable systems.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${
                  category === "All"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-white border-0">
                    Featured
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on DevOps, cloud architecture, and engineering best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
