"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, Sparkles, TrendingUp, Rocket, Code2, Globe } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/RavinduNilash/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/api/placeholder/600/400",
    featured: true,
    category: "Full Stack"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/RavinduNilash/task-manager",
    demo: "https://task-manager-demo.netlify.app",
    image: "/api/placeholder/600/400",
    featured: true,
    category: "Web App"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/RavinduNilash/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    image: "/api/placeholder/600/400",
    featured: false,
    category: "Frontend"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/RavinduNilash/portfolio",
    demo: "https://ravindunilash.dev",
    image: "/api/placeholder/600/400",
    featured: false,
    category: "Frontend"
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, comment system, and SEO optimization for content creators.",
    tech: ["Next.js", "Contentful", "TypeScript", "Vercel"],
    github: "https://github.com/RavinduNilash/blog-platform",
    demo: "https://blog-demo.vercel.app",
    image: "/api/placeholder/600/400",
    featured: false,
    category: "CMS"
  },
  {
    title: "Expense Tracker",
    description: "A personal finance management app with budget tracking, expense categorization, and detailed analytics.",
    tech: ["React", "Firebase", "Chart.js", "Material-UI"],
    github: "https://github.com/RavinduNilash/expense-tracker",
    demo: "https://expense-tracker-demo.netlify.app",
    image: "/api/placeholder/600/400",
    featured: false,
    category: "Web App"
  }
]

const categoryColors = {
  "Full Stack": "from-primary-dark to-secondary-gray",
  "Web App": "from-secondary-gray to-primary-dark",
  "Frontend": "from-primary-dark to-secondary-gray",
  "CMS": "from-secondary-gray to-primary-dark"
}

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="relative min-h-screen flex items-center overflow-hidden bg-pure-white">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-dark/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-gray/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-dark/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-center section-padding relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative inline-block mb-6"
          >
            <span className="relative z-10 inline-flex items-center px-6 py-3 text-primary-dark font-semibold text-sm tracking-[0.2em] uppercase bg-primary-dark/5 rounded-full border border-primary-dark/20 backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-3 animate-pulse" />
              Portfolio Showcase
            </span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -inset-2 bg-gradient-to-r from-primary-dark/10 to-transparent rounded-full blur-md -z-10"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-dark"
          >
            Featured{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative text-secondary-gray"
            >
              Projects
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark to-secondary-gray rounded-full"
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-secondary-gray max-w-4xl mx-auto leading-relaxed font-light"
          >
            A showcase of my recent work, demonstrating{" "}
            <span className="font-semibold text-primary-dark">modern web development</span>{" "}
            skills and innovative problem-solving approaches.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
              Spotlight Projects
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-2 w-20 h-[2px] bg-primary-dark/30 rounded-full"
            />
          </motion.div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]} text-white rounded-full text-xs font-medium`}>
                        {project.category}
                      </span>
                      <Star className="w-4 h-4 text-primary-dark fill-current" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-2xl md:text-3xl font-bold text-primary-dark"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-secondary-gray text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-tertiary-light/80 hover:bg-primary-dark/10 text-secondary-gray hover:text-primary-dark rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-primary-dark hover:bg-secondary-gray text-white rounded-xl font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-secondary-gray hover:bg-primary-dark text-white rounded-xl font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      <Globe className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-secondary-gray/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-tertiary-light/50 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="aspect-video bg-gradient-to-br from-tertiary-light to-secondary-gray/20 rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="text-secondary-gray flex flex-col items-center space-y-2">
                          <Code2 className="h-12 w-12" />
                          <span className="text-sm font-medium">Project Preview</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-primary-dark mr-3" />
              <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                Other Notable Work
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mx-auto w-24 h-[2px] bg-primary-dark/30 rounded-full"
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-tertiary-light/50 hover:border-primary-dark/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary-dark/5"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]} text-white rounded-full text-xs font-medium`}>
                    {project.category}
                  </span>
                  <Star className="w-4 h-4 text-tertiary-light group-hover:text-primary-dark transition-colors duration-300" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary-dark group-hover:text-secondary-gray transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-secondary-gray text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-tertiary-light/80 hover:bg-primary-dark/10 text-secondary-gray hover:text-primary-dark rounded text-xs font-medium transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-secondary-gray hover:text-primary-dark transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-secondary-gray hover:text-primary-dark transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 to-transparent rounded-2xl pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-primary-dark mr-3" />
              <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                Innovation Focus
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="mx-auto w-20 h-[2px] bg-primary-dark/30 rounded-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-secondary-gray max-w-2xl mx-auto leading-relaxed"
          >
            Each project represents a journey of learning and innovation. I focus on building{" "}
            <span className="font-semibold text-primary-dark">scalable solutions</span>,{" "}
            <span className="font-semibold text-primary-dark">user-centric design</span>, and{" "}
            <span className="font-semibold text-primary-dark">cutting-edge technologies</span> to create meaningful digital experiences.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
