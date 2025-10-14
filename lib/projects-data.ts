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
    description: "Microservices deployment on Amazon EKS with distributed voting application",
    longDescription: "Deployed a comprehensive microservices application on Amazon EKS using Kubernetes orchestration. The project features a distributed voting application composed of multiple containers including a Python frontend, Redis for messaging, a .NET worker service, and PostgreSQL database. Implemented complete CI/CD pipeline with automated scaling, health checks, and monitoring. The application demonstrates real-world Kubernetes deployment patterns with service mesh, load balancing, and persistent storage management.",
    tech: ["Kubernetes", "Docker", "AWS EKS", "Python", "Node.js", ".NET", "Redis", "PostgreSQL", "Docker Compose"],
    category: "DevOps",
    image: "https://i.ibb.co/CsmyyJqp/articletitle.png",
    heroImage: "https://i.ibb.co/CsmyyJqp/articletitle.png",
    gallery: ["https://i.ibb.co/CsmyyJqp/articletitle.png", "/projects.png", "/technical expertise.png", "/technolgoies.png"],
    demoUrl: "http://localhost:8080",
    githubUrl: "https://github.com/jkang1643/example-voting-app",
    blogUrl: "https://deploydiaries.vercel.app/blog/deploy-a-microservices-application-on-amazon-eks-using-kubernetes",
    featured: true,
    year: "2025",
    role: "DevOps Engineer",
    duration: "2 months"
  },
  {
    id: "aws-infrastructure",
    title: "Cloud Resume Challenge",
    description: "Full-stack serverless resume website with real-time visitor counter",
    longDescription: "Completed the Cloud Resume Challenge by building a complete serverless resume website on AWS. The project features a React frontend hosted on S3 with CloudFront CDN, a Python Lambda API for visitor counting, DynamoDB for data storage, and automated CI/CD pipeline with GitHub Actions. Implemented Infrastructure as Code with Terraform, comprehensive monitoring with CloudWatch, and security best practices with IAM roles and HTTPS. The application demonstrates real-world cloud architecture patterns and costs less than $1/month to operate.",
    tech: ["AWS Lambda", "S3", "CloudFront", "DynamoDB", "API Gateway", "Terraform", "React", "Python", "GitHub Actions", "Route53"],
    category: "Cloud",
    image: "https://i.ibb.co/mVfqmDfF/Gemini-Generated-Image-tir4fxtir4fxtir4.png",
    heroImage: "https://i.ibb.co/mVfqmDfF/Gemini-Generated-Image-tir4fxtir4fxtir4.png",
    gallery: [
      "https://i.ibb.co/mVfqmDfF/Gemini-Generated-Image-tir4fxtir4fxtir4.png",
      "https://deploydiaries-git-new-ui-joseph-kangs-projects.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGfh7yYH1%2Fmermaid-drawing.png&w=1920&q=75",
      "https://i.ibb.co/N28RpGYf/cloudresume.png"
    ],
    demoUrl: "https://josephkangresume.store/",
    githubUrl: "https://github.com/jkang1643/cloudresumechallenge",
    blogUrl: "https://deploydiaries.vercel.app/blog/completing-the-cloud-resume-challenge-a-full-stack-devops-journey",
    featured: true,
    year: "2025",
    role: "Cloud Support Engineer",
    duration: "2 months"
  },
  {
    id: "containerized-voting-platform",
    title: "VoteStream - Real-time Voting Infrastructure using Docker",
    description: "Scalable microservices voting system deployed on AWS EC2 with Docker orchestration",
    longDescription: "Deployed a distributed voting application on AWS EC2 using Docker containerization and microservices architecture. The platform features a Python frontend for voting, Redis for real-time messaging, a .NET worker service for vote processing, and PostgreSQL for persistent storage. Implemented Docker Compose for local development and container orchestration, with automated deployment scripts for AWS EC2. The system demonstrates modern containerization practices, load balancing, and scalable microservices patterns in a cloud environment.",
    tech: ["Docker", "AWS EC2", "Python", "Node.js", ".NET", "Redis", "PostgreSQL", "Docker Compose", "Linux", "Nginx"],
    category: "DevOps",
    image: "https://i.ibb.co/67VxTdQ6/Gemini-Generated-Image-a4c3ida4c3ida4c3.png",
    heroImage: "https://i.ibb.co/67VxTdQ6/Gemini-Generated-Image-a4c3ida4c3ida4c3.png",
    gallery: [
      "https://i.ibb.co/67VxTdQ6/Gemini-Generated-Image-a4c3ida4c3ida4c3.png",
      "/projects.png", 
      "/technical expertise.png", 
      "/technolgoies.png"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/jkang1643/example-voting-app",
    blogUrl: "https://deploydiaries.vercel.app/blog/how-to-deploy-a-simple-voting-app-on-aws-ec2-with-docker",
    featured: true,
    year: "2025",
    role: "DevOps Engineer",
    duration: "1 month"
  },
  {
    id: "aws-infrastructure-ecommerce",
    title: "EShopPlus: AWS E-commerce Architecture",
    description: "3-tier e-commerce application deployment on AWS EC2 with scalable architecture",
    longDescription: "Deployed a comprehensive 3-tier e-commerce application on AWS EC2 with a modern, scalable architecture. The project features a presentation tier with Apache web server and PHP, an application tier with MariaDB database, and a data tier with persistent storage. Implemented automated deployment scripts, environment configuration management, and security best practices including firewall configuration and database access controls. The application demonstrates real-world AWS infrastructure patterns, multi-tier architecture design, and production-ready deployment practices.",
    tech: ["AWS EC2", "Apache", "PHP", "MariaDB", "Linux", "FirewallD", "Git", "Shell Scripting", "SCSS", "JavaScript"],
    category: "Cloud",
    image: "https://i.ibb.co/JRbcP7pt/end-result.png",
    heroImage: "https://i.ibb.co/JRbcP7pt/end-result.png",
    gallery: [
      "https://i.ibb.co/JRbcP7pt/end-result.png",
      "/technical expertise.png", 
      "/projects.png", 
      "/technolgoies.png"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/jkang1643/learning-app-ecommerce",
    blogUrl: "https://deploydiaries.vercel.app/blog/deploying-a-3-tier-e-commerce-application-on-aws-ec2",
    featured: true,
    year: "2025",
    role: "Cloud Support Engineer",
    duration: "2 weeks"
  },
  {
    id: "socialapp-platform",
    title: "SocialApp - Modern Social Media Platform",
    description: "Full-stack social media platform with real-time features, AI integration, and complete DevOps pipeline",
    longDescription: "Built a comprehensive modern social media platform using Next.js 14, React, TypeScript, and Firebase. The application features Google OAuth authentication, real-time posts, image sharing, voice notes, and AI-powered features including image generation and text analysis. Implemented complete DevOps practices with automated CI/CD pipeline, zero-downtime deployments, and cloud-native architecture. The project demonstrates full-stack development skills, database design, API integration, and production-ready code shipping practices with enterprise-level monitoring and security.",
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS", "Vercel", "Google OAuth", "Firestore", "Deepgram", "OpenAI", "Replicate"],
    category: "Platform",
    image: "/blog.jpg",
    heroImage: "/blog.jpg",
    gallery: ["/blog.jpg", "/projects.png", "/technical expertise.png", "/technolgoies.png"],
    demoUrl: "https://myfirstsocialmediaapp.vercel.app/",
    githubUrl: "https://github.com/jkang1643/myfirstsocialmediaapp",
    blogUrl: "https://deploydiaries.vercel.app/blog/a-developer-s-complete-guide-to-shipping-code",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    duration: "3 months"
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
