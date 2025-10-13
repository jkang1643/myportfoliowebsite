"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Award, CheckCircle, Star, TrendingUp, Shield, Zap, ExternalLink, Code as CodeIcon, Database, Cpu, GitBranch as GitBranchIcon, BarChart as BarChartIcon, Cloud as CloudIcon, Container as ContainerIcon, Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Clock, X } from "lucide-react"
import Link from "next/link"

export default function TechnicalExpertisePage() {
  const [selectedExpertise, setSelectedExpertise] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null)
  const [methodologyModal, setMethodologyModal] = useState<number | null>(null)

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
      }
    }
  }, [autoPlayInterval])

  const expertiseAreas = [
    {
      id: "cloud-architecture",
      title: "Cloud Architecture",
      icon: <CloudIcon className="w-8 h-8" />,
      description: "Designing and implementing scalable cloud solutions across AWS, GCP, and Azure",
      experience: "5+ years",
      level: "Expert",
      color: "blue",
      detailedDescription: "Designing and implementing scalable cloud solutions is at the heart of my expertise. I have extensive experience across AWS, GCP, and Azure, creating architectures that are resilient, highly available, and cost-effective. My approach begins with assessing business requirements, current infrastructure, and application workloads to design cloud solutions tailored to specific operational and strategic goals.\n\nI focus on building cloud-native architectures that leverage modern design patterns such as microservices, serverless computing, and event-driven systems. My portfolio highlights projects where I have successfully migrated on-premises workloads to the cloud, implemented hybrid and multi-cloud strategies, and optimized network topologies for maximum efficiency. I emphasize a holistic perspective, balancing performance, cost, and security in every solution.",
      steps: [
        {
          title: "Multi-Cloud Strategy",
          description: "Designing hybrid and multi-cloud architectures for optimal performance and cost efficiency",
          technologies: ["AWS", "GCP", "Azure", "Terraform"],
          duration: "2-3 months"
        },
        {
          title: "Infrastructure as Code",
          description: "Automating infrastructure provisioning and management using Terraform and CloudFormation",
          technologies: ["Terraform", "CloudFormation", "Ansible"],
          duration: "1-2 months"
        },
        {
          title: "Cost Optimization",
          description: "Implementing cost monitoring, rightsizing, and automated scaling strategies",
          technologies: ["CloudWatch", "Cost Explorer", "Auto Scaling"],
          duration: "1 month"
        },
        {
          title: "Security & Compliance",
          description: "Implementing security best practices and compliance frameworks",
          technologies: ["IAM", "VPC", "Security Groups", "WAF"],
          duration: "2-3 months"
        }
      ],
      achievements: [
        "Reduced cloud costs by 40% through rightsizing and reserved instances",
        "Achieved 99.99% uptime with automated failover systems",
        "Implemented zero-trust security architecture"
      ]
    },
    {
      id: "container-orchestration",
      title: "Container Orchestration",
      icon: <ContainerIcon className="w-8 h-8" />,
      description: "Building and managing containerized applications with Kubernetes and Docker",
      experience: "4+ years",
      level: "Expert",
      color: "green",
      detailedDescription: "Containers have transformed the way applications are built and deployed, and I specialize in orchestrating containerized applications using Kubernetes and Docker. My methodology involves designing container architectures that support scalability, maintainability, and reliability. I focus on creating robust cluster setups, deploying applications with automated rollouts, and integrating logging and monitoring for operational excellence.\n\nThroughout my career, I have managed end-to-end container workflows for enterprise applications, ensuring seamless deployments, autoscaling, and zero-downtime updates. My portfolio demonstrates real-world projects where container orchestration improved deployment speed, simplified environment management, and enabled teams to focus on delivering value rather than troubleshooting infrastructure issues.",
      steps: [
        {
          title: "Container Strategy",
          description: "Designing containerization strategy and microservices architecture",
          technologies: ["Docker", "Kubernetes", "Helm"],
          duration: "2-3 months"
        },
        {
          title: "Cluster Management",
          description: "Setting up and managing Kubernetes clusters across multiple environments",
          technologies: ["EKS", "GKE", "AKS", "kubectl"],
          duration: "1-2 months"
        },
        {
          title: "Service Mesh",
          description: "Implementing service mesh for microservices communication and security",
          technologies: ["Istio", "Envoy", "Linkerd"],
          duration: "2-3 months"
        },
        {
          title: "GitOps Deployment",
          description: "Implementing GitOps workflows for continuous deployment",
          technologies: ["ArgoCD", "Flux", "GitLab CI/CD"],
          duration: "1-2 months"
        }
      ],
      achievements: [
        "Scaled applications to handle 10x traffic with zero downtime",
        "Reduced deployment time from hours to minutes",
        "Implemented automated rollback mechanisms"
      ]
    },
    {
      id: "monitoring-observability",
      title: "Monitoring & Observability",
      icon: <BarChartIcon className="w-8 h-8" />,
      description: "Building comprehensive monitoring and observability solutions for cloud-native applications",
      experience: "4+ years",
      level: "Expert",
      color: "orange",
      detailedDescription: "Effective monitoring and observability are essential for maintaining cloud-native applications. I design comprehensive solutions that provide full visibility into system performance, application health, and user experience. Using tools like Prometheus, Grafana, ELK Stack, and cloud-native monitoring services, I ensure that teams can detect, analyze, and resolve issues proactively.\n\nMy approach emphasizes metrics, logs, and traces, integrating them into dashboards and alerting systems tailored to the needs of the business. In my portfolio, you will find projects where I built end-to-end observability pipelines, reduced incident response times, and enabled data-driven decision-making. I prioritize actionable insights that improve reliability, performance, and user satisfaction.",
      steps: [
        {
          title: "Metrics Collection",
          description: "Setting up comprehensive metrics collection using Prometheus and custom exporters",
          technologies: ["Prometheus", "Grafana", "Node Exporter"],
          duration: "1-2 months"
        },
        {
          title: "Log Management",
          description: "Implementing centralized logging with ELK stack and log aggregation",
          technologies: ["Elasticsearch", "Logstash", "Kibana", "Fluentd"],
          duration: "2-3 months"
        },
        {
          title: "Distributed Tracing",
          description: "Setting up distributed tracing for microservices performance monitoring",
          technologies: ["Jaeger", "Zipkin", "OpenTelemetry"],
          duration: "1-2 months"
        },
        {
          title: "Alerting & Incident Response",
          description: "Implementing intelligent alerting and automated incident response",
          technologies: ["AlertManager", "PagerDuty", "Slack"],
          duration: "1 month"
        }
      ],
      achievements: [
        "Reduced mean time to detection (MTTD) by 80%",
        "Achieved 99.9% system visibility across all services",
        "Implemented predictive alerting to prevent outages"
      ]
    },
    {
      id: "devops-automation",
      title: "DevOps & Automation",
      icon: <GitBranchIcon className="w-8 h-8" />,
      description: "Implementing CI/CD pipelines and automation workflows for efficient software delivery",
      experience: "5+ years",
      level: "Expert",
      color: "purple",
      detailedDescription: "I help organizations implement CI/CD pipelines and automation workflows to accelerate software delivery and reduce operational overhead. My expertise spans configuring pipelines with Jenkins, GitHub Actions, and GitLab CI, automating infrastructure provisioning with Terraform and Ansible, and integrating testing and deployment processes seamlessly.\n\nIn practice, this means designing workflows that support version control, automated testing, security scanning, and continuous delivery. My portfolio features projects where automation dramatically improved release cycles, reduced human error, and allowed teams to innovate faster. My approach is always pragmatic: balancing automation with maintainability, scalability, and compliance requirements.",
      steps: [
        {
          title: "CI/CD Pipeline Design",
          description: "Designing and implementing comprehensive CI/CD pipelines for multiple environments",
          technologies: ["Jenkins", "GitHub Actions", "GitLab CI/CD"],
          duration: "2-3 months"
        },
        {
          title: "Infrastructure Automation",
          description: "Automating infrastructure provisioning and configuration management",
          technologies: ["Ansible", "Terraform", "Packer"],
          duration: "2-3 months"
        },
        {
          title: "Testing Automation",
          description: "Implementing automated testing strategies including unit, integration, and E2E tests",
          technologies: ["Jest", "Cypress", "Selenium", "Pytest"],
          duration: "1-2 months"
        },
        {
          title: "Deployment Strategies",
          description: "Implementing blue-green, canary, and rolling deployment strategies",
          technologies: ["Argo Rollouts", "Flagger", "Istio"],
          duration: "1-2 months"
        }
      ],
      achievements: [
        "Reduced deployment time from 4 hours to 15 minutes",
        "Achieved 99.9% deployment success rate",
        "Implemented automated rollback for failed deployments"
      ]
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      description: "Implementing security best practices and compliance frameworks for cloud environments",
      experience: "3+ years",
      level: "Advanced",
      color: "red",
      detailedDescription: "Security and compliance are integral to every cloud implementation I deliver. I apply best practices for identity and access management, network security, encryption, and auditing to protect sensitive data and ensure regulatory compliance. I am experienced with frameworks such as ISO 27001, SOC 2, HIPAA, and GDPR, integrating them into cloud solutions from the ground up.\n\nMy methodology involves proactive threat modeling, secure design patterns, and continuous monitoring to detect and mitigate risks. My portfolio includes projects where I implemented secure multi-cloud environments, performed security assessments, and established compliance reporting mechanisms. I focus on delivering solutions that enable innovation without compromising security or regulatory requirements.",
      steps: [
        {
          title: "Security Scanning",
          description: "Implementing automated security scanning for vulnerabilities and compliance",
          technologies: ["Trivy", "Snyk", "OWASP ZAP", "SonarQube"],
          duration: "1-2 months"
        },
        {
          title: "Secrets Management",
          description: "Setting up secure secrets management and rotation policies",
          technologies: ["HashiCorp Vault", "AWS Secrets Manager", "Azure Key Vault"],
          duration: "1-2 months"
        },
        {
          title: "Network Security",
          description: "Implementing network security policies and micro-segmentation",
          technologies: ["Calico", "Cilium", "Network Policies", "WAF"],
          duration: "2-3 months"
        },
        {
          title: "Compliance Frameworks",
          description: "Implementing compliance frameworks like SOC 2, GDPR, and HIPAA",
          technologies: ["AWS Config", "CloudTrail", "Audit Logs"],
          duration: "3-4 months"
        }
      ],
      achievements: [
        "Achieved 100% vulnerability remediation rate",
        "Reduced security incident response time by 80%",
        "Maintained SOC 2 compliance for 2+ years"
      ]
    }
  ]

  const skillsMatrix = [
    { category: "Cloud Platforms", technologies: "AWS, GCP, Azure", proficiency: 5 },
    { category: "Containerization", technologies: "Docker, Kubernetes", proficiency: 5 },
    { category: "Infrastructure as Code", technologies: "Terraform, Ansible", proficiency: 5 },
    { category: "Monitoring", technologies: "Prometheus, Grafana", proficiency: 5 },
    { category: "CI/CD", technologies: "Jenkins, GitHub Actions", proficiency: 5 },
    { category: "Programming", technologies: "Python, JavaScript, Java", proficiency: 5 },
    { category: "Databases", technologies: "SQL, NoSQL, Redis", proficiency: 5 },
    { category: "AI/ML", technologies: "TensorFlow, OpenAI, Copilot", proficiency: 4 },
    { category: "DevOps", technologies: "Linux, Bash, Git", proficiency: 5 }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      year: "March 2025",
      credentialId: "SAA-C03",
      status: "Active",
      description: "This certification validates technical knowledge and skills across a wide range of AWS services",
      verifyUrl: "https://www.credly.com/badges/b5acf9a4-5f9a-4e42-abf3-453af20afab6",
      badgeImage: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      year: "August 2024",
      credentialId: "CLF-C02",
      status: "Active",
      description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud",
      verifyUrl: "https://www.credly.com/earner/earned/badge/f1a0ad8c-e609-45c8-a437-62d0301fecef",
      badgeImage: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    }
  ]

  const achievements = [
    {
      title: "Infrastructure Cost Optimization",
      description: "Reduced cloud infrastructure costs by 40% through rightsizing and reserved instances",
      impact: "Saved $2.3M annually",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Zero-Downtime Deployments",
      description: "Implemented blue-green deployment strategy achieving 99.99% uptime",
      impact: "Zero production incidents in 18 months",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Security Excellence",
      description: "Established comprehensive security scanning and compliance framework",
      impact: "100% vulnerability remediation rate",
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      red: "bg-red-100 text-red-600 border-red-200"
    }
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-600 border-gray-200"
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      // Stop auto-play
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
        setAutoPlayInterval(null)
      }
      setIsPlaying(false)
    } else {
      // Start auto-play
      setIsPlaying(true)
      const interval = setInterval(() => {
        setCurrentStep((prevStep) => {
          const currentExpertise = expertiseAreas[selectedExpertise]
          if (prevStep < currentExpertise.steps.length - 1) {
            return prevStep + 1
          } else {
            // Move to next expertise area or stop
            if (selectedExpertise < expertiseAreas.length - 1) {
              setSelectedExpertise(selectedExpertise + 1)
              return 0
            } else {
              // End of all processes, stop auto-play
              setIsPlaying(false)
              if (autoPlayInterval) {
                clearInterval(autoPlayInterval)
                setAutoPlayInterval(null)
              }
              return prevStep
            }
          }
        })
      }, 3000) // 3 seconds per step
      setAutoPlayInterval(interval)
    }
  }

  const handleNext = () => {
    const currentExpertise = expertiseAreas[selectedExpertise]
    if (currentStep < currentExpertise.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Move to next expertise area
      if (selectedExpertise < expertiseAreas.length - 1) {
        setSelectedExpertise(selectedExpertise + 1)
        setCurrentStep(0)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      // Move to previous expertise area
      if (selectedExpertise > 0) {
        setSelectedExpertise(selectedExpertise - 1)
        setCurrentStep(expertiseAreas[selectedExpertise - 1].steps.length - 1)
      }
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setSelectedExpertise(0)
    setIsPlaying(false)
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval)
      setAutoPlayInterval(null)
    }
  }

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
              Technical Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interactive journey through my technical expertise areas. 
              Explore how I approach complex infrastructure challenges and deliver scalable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Expertise Navigator */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Expertise Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any area to explore my approach and methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={area.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedExpertise === index 
                    ? `ring-2 ring-${area.color}-300 bg-${area.color}-50 shadow-lg` 
                    : 'hover:shadow-md'
                }`}
                onClick={() => {
                  setSelectedExpertise(index)
                  setCurrentStep(0)
                  setMethodologyModal(index)
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    selectedExpertise === index 
                      ? `${getColorClasses(area.color)} shadow-lg scale-105` 
                      : getColorClasses(area.color)
                  }`}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{area.title}</h3>
                    <p className="text-sm text-gray-500">{area.experience}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <Badge 
                    variant="outline" 
                    className={`${
                      area.level === "Expert" 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : "bg-blue-100 text-blue-800 border-blue-200"
                    }`}
                  >
                    {area.level}
                  </Badge>
                  {selectedExpertise === index ? (
                    <div className="flex items-center space-x-1 text-blue-600">
                      <span className="text-sm font-medium">Selected</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400">
                      Click to view methodology
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Step-by-Step Process */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              {expertiseAreas[selectedExpertise].title} Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step approach to implementing {expertiseAreas[selectedExpertise].title.toLowerCase()}
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
                <div 
                  className={`h-0.5 transition-all duration-1000 ease-out ${getColorClasses(expertiseAreas[selectedExpertise].color).split(' ')[0]}`}
                  style={{ width: `${(currentStep / (expertiseAreas[selectedExpertise].steps.length - 1)) * 100}%` }}
                />
              </div>
              
              {/* Timeline Dots */}
              <div className="flex justify-between items-center relative">
                {expertiseAreas[selectedExpertise].steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    {/* Dot */}
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`relative z-10 w-16 h-16 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                        index <= currentStep
                          ? `${getColorClasses(expertiseAreas[selectedExpertise].color).split(' ')[0]} border-current`
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className={`w-full h-full rounded-full flex items-center justify-center ${
                        index <= currentStep
                          ? 'bg-current'
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        {index < currentStep ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : index === currentStep ? (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                        ) : (
                          <span className="text-gray-400 font-semibold text-sm">{index + 1}</span>
                        )}
                      </div>
                    </button>
                    
                    {/* Step Label */}
                    <div className="mt-4 text-center max-w-32">
                      <h4 className={`text-sm font-medium transition-colors duration-300 ${
                        index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Controls */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <Button
              onClick={handlePrevious}
              disabled={selectedExpertise === 0 && currentStep === 0}
              variant="outline"
              className="px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={handlePlayPause}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={selectedExpertise === expertiseAreas.length - 1 && currentStep === expertiseAreas[selectedExpertise].steps.length - 1}
              variant="outline"
              className="px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep + 1} of {expertiseAreas[selectedExpertise].steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {expertiseAreas[selectedExpertise].title}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ease-out ${getColorClasses(expertiseAreas[selectedExpertise].color).split(' ')[0]}`}
                style={{ width: `${((currentStep + 1) / expertiseAreas[selectedExpertise].steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Step Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Main Step Card */}
              <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl ${getColorClasses(expertiseAreas[selectedExpertise].color)} shadow-lg`}>
                    {expertiseAreas[selectedExpertise].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {expertiseAreas[selectedExpertise].steps[currentStep].title}
                    </h3>
                    <p className="text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {expertiseAreas[selectedExpertise].steps[currentStep].duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {expertiseAreas[selectedExpertise].steps[currentStep].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CodeIcon className="w-5 h-5 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {expertiseAreas[selectedExpertise].steps[currentStep].technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 transition-colors duration-200 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Process Overview */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Process Overview
                </h4>
                <div className="space-y-3">
                  {expertiseAreas[selectedExpertise].steps.map((step, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-blue-100 border border-blue-200' 
                        : index < currentStep 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-gray-50'
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        index < currentStep 
                          ? 'bg-green-500 text-white' 
                          : index === currentStep 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index < currentStep ? '✓' : index + 1}
                      </div>
                      <span className={`text-sm font-medium ${
                        index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-yellow-500" />
                  Key Achievements
                </h3>
                <div className="space-y-6">
                  {expertiseAreas[selectedExpertise].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Skills Matrix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed proficiency ratings across key technology categories
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Technologies</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Proficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {skillsMatrix.map((skill, index) => (
                  <tr key={skill.category} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{skill.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{skill.technologies}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${
                              i < skill.proficiency 
                                ? "text-yellow-400 fill-current" 
                                : "text-gray-300"
                            }`} 
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications validating expertise in cloud technologies and DevOps practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <img 
                      src={cert.badgeImage} 
                      alt={`${cert.name} badge`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">{cert.name}</h3>
                    <p className="text-gray-600 text-xs mb-2">{cert.issuer}</p>
                    <p className="text-gray-700 text-xs mb-3 leading-relaxed line-clamp-2">{cert.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">{cert.year}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 text-xs px-2 py-1">
                          {cert.status}
                        </Badge>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span className="text-xs">Verify</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Key Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable impact through technical excellence and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-100 rounded-2xl text-green-600">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="inline-flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{achievement.impact}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how my technical expertise can help solve your infrastructure challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View My Projects
              </Button>
            </Link>
            <Link href="/technologies">
              <Button
                variant="outline"
                className="px-8 py-4 border-gray-300 text-gray-700 hover:bg-white hover:scale-105 rounded-full font-medium text-lg transition-all duration-300 bg-transparent hover:shadow-md"
              >
                View Technologies
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Methodology Modal */}
      {methodologyModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${getColorClasses(expertiseAreas[methodologyModal].color)}`}>
                  {expertiseAreas[methodologyModal].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {expertiseAreas[methodologyModal].title}
                  </h2>
                  <p className="text-gray-500">{expertiseAreas[methodologyModal].experience}</p>
                </div>
              </div>
              <button
                onClick={() => setMethodologyModal(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {expertiseAreas[methodologyModal].detailedDescription}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-4">
                <Badge 
                  variant="outline" 
                  className={`${
                    expertiseAreas[methodologyModal].level === "Expert" 
                      ? "bg-green-100 text-green-800 border-green-200" 
                      : "bg-blue-100 text-blue-800 border-blue-200"
                  }`}
                >
                  {expertiseAreas[methodologyModal].level}
                </Badge>
                <span className="text-sm text-gray-500">
                  {expertiseAreas[methodologyModal].steps.length} implementation steps
                </span>
              </div>
              <Button
                onClick={() => {
                  setMethodologyModal(null)
                  setSelectedExpertise(methodologyModal)
                  setCurrentStep(0)
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Process Steps
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}



