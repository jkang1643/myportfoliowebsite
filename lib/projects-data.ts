export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  image: string
  heroImage?: string
  gallery?: string[]
  demoUrl?: string
  githubUrl?: string
  blogUrl?: string
  featured: boolean
  year: string
  role: string
  duration: string
}

export const projects: Project[] = [
  {
    id: "kubernetes-orchestration",
    title: "Kubernetes Orchestration",
    description: "Multi-cluster deployment pipeline with automated scaling and monitoring",
    longDescription: "Designed and implemented a comprehensive Kubernetes orchestration system that manages multi-cluster deployments across AWS, GCP, and Azure. The system features automated scaling based on custom metrics, advanced monitoring with Prometheus and Grafana, and seamless CI/CD integration. Built with GitOps principles using ArgoCD for continuous deployment and Flux for configuration management.",
    tech: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Prometheus", "Grafana", "AWS EKS", "Terraform"],
    category: "DevOps",
    image: "/projects.png",
    heroImage: "/projects.png",
    gallery: ["/projects.png", "/technical expertise.png", "/technolgoies.png"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/kubernetes-orchestration",
    blogUrl: "https://blog.example.com/how-i-built-kubernetes-orchestration",
    featured: true,
    year: "2024",
    role: "DevOps Engineer",
    duration: "6 months"
  },
  {
    id: "aws-infrastructure",
    title: "AWS Infrastructure",
    description: "Serverless architecture with CI/CD pipeline and infrastructure as code",
    longDescription: "Architected a complete serverless infrastructure on AWS using Lambda, API Gateway, DynamoDB, and CloudFront. Implemented Infrastructure as Code with Terraform, automated CI/CD pipelines with GitHub Actions, and comprehensive monitoring with CloudWatch and X-Ray. The system handles over 1M requests per day with 99.9% uptime and automatic scaling.",
    tech: ["AWS Lambda", "Terraform", "GitHub Actions", "DynamoDB", "CloudFront", "CloudWatch", "X-Ray"],
    category: "Cloud",
    image: "/technical expertise.png",
    heroImage: "/technical expertise.png",
    gallery: ["/technical expertise.png", "/projects.png"],
    demoUrl: "https://aws-demo.example.com",
    githubUrl: "https://github.com/example/aws-infrastructure",
    blogUrl: "https://blog.example.com/building-serverless-aws-infrastructure",
    featured: true,
    year: "2024",
    role: "Cloud Architect",
    duration: "4 months"
  },
  {
    id: "monitoring-stack",
    title: "Monitoring Stack",
    description: "Complete observability solution with metrics, logs, and distributed tracing",
    longDescription: "Built a comprehensive observability platform using the ELK stack (Elasticsearch, Logstash, Kibana) combined with Prometheus and Grafana for metrics collection. Implemented distributed tracing with Jaeger for microservices monitoring. The solution provides real-time alerting, custom dashboards, and automated incident response workflows.",
    tech: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "AlertManager", "Python", "Docker"],
    category: "Monitoring",
    image: "/technolgoies.png",
    heroImage: "/technolgoies.png",
    gallery: ["/technolgoies.png", "/technical expertise.png"],
    demoUrl: "https://monitoring-demo.example.com",
    githubUrl: "https://github.com/example/monitoring-stack",
    blogUrl: "https://blog.example.com/complete-observability-stack-setup",
    featured: true,
    year: "2023",
    role: "SRE Engineer",
    duration: "5 months"
  },
  {
    id: "security-automation",
    title: "Security Automation",
    description: "Automated security scanning and compliance monitoring for cloud workloads",
    longDescription: "Developed an automated security scanning platform that continuously monitors cloud workloads for vulnerabilities and compliance violations. Integrated SAST and DAST tools, implemented automated remediation workflows, and created comprehensive security dashboards. Reduced security incident response time by 80% and improved compliance score to 98%.",
    tech: ["HashiCorp Vault", "SAST", "DAST", "AWS Security Hub", "Python", "Terraform", "GitHub Actions"],
    category: "Security",
    image: "/contact.png",
    heroImage: "/contact.png",
    gallery: ["/contact.png", "/projects.png"],
    demoUrl: "https://security-demo.example.com",
    githubUrl: "https://github.com/example/security-automation",
    blogUrl: "https://blog.example.com/automated-security-scanning-platform",
    featured: true,
    year: "2023",
    role: "Security Engineer",
    duration: "3 months"
  },
  {
    id: "microservices-platform",
    title: "Microservices Platform",
    description: "Containerized microservices platform with service mesh and API gateway",
    longDescription: "Designed and implemented a production-ready microservices platform using Docker containers, Kubernetes orchestration, and Istio service mesh. Built a centralized API gateway with rate limiting, authentication, and monitoring. Implemented distributed logging and tracing for better observability across services.",
    tech: ["Docker", "Kubernetes", "Istio", "Kong", "Jaeger", "Fluentd", "Go", "React"],
    category: "Platform",
    image: "/blog.jpg",
    heroImage: "/blog.jpg",
    gallery: ["/blog.jpg", "/technolgoies.png"],
    demoUrl: "https://microservices-demo.example.com",
    githubUrl: "https://github.com/example/microservices-platform",
    blogUrl: "https://blog.example.com/microservices-platform-with-istio",
    featured: false,
    year: "2023",
    role: "Platform Engineer",
    duration: "8 months"
  },
  {
    id: "data-pipeline",
    title: "Real-time Data Pipeline",
    description: "Streaming data pipeline with Apache Kafka and real-time analytics",
    longDescription: "Built a high-throughput data streaming pipeline using Apache Kafka, Apache Flink, and ClickHouse for real-time analytics. Implemented data quality monitoring, automated schema evolution, and disaster recovery mechanisms. The pipeline processes over 10TB of data daily with sub-second latency.",
    tech: ["Apache Kafka", "Apache Flink", "ClickHouse", "Python", "Kubernetes", "Prometheus", "Grafana"],
    category: "Data",
    image: "/placeholder.jpg",
    heroImage: "/placeholder.jpg",
    gallery: ["/placeholder.jpg", "/projects.png"],
    demoUrl: "https://data-demo.example.com",
    githubUrl: "https://github.com/example/data-pipeline",
    blogUrl: "https://blog.example.com/real-time-data-pipeline-kafka-flink",
    featured: false,
    year: "2022",
    role: "Data Engineer",
    duration: "7 months"
  }
]

export const technologies = [
  "All",
  "Kubernetes",
  "Docker",
  "AWS",
  "Terraform",
  "Python",
  "React",
  "Go",
  "Prometheus",
  "Grafana",
  "Apache Kafka",
  "Istio"
]

export const categories = [
  "All",
  "DevOps",
  "Cloud",
  "Monitoring",
  "Security",
  "Platform",
  "Data"
]
