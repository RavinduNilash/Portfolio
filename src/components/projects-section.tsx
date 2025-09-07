"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Star, Sparkles, TrendingUp, Rocket, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Ziyo E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Firebase", "Prisma"],
    github: "https://github.com/RavinduNilash/ecommerce-platform",
    demo: "https://ziyo-ecommerce-web.vercel.app/",
    images: [
      "/Ziyo/1.png",
      "/Ziyo/2.png",
      "/Ziyo/3.png",
      "/Ziyo/4.png"
    ],
    featured: true,
    category: "Full Stack"
  },
  {
    title: "Aspire Badminton Webshowcase",
    description: "A comprehensive web showcase for a badminton sports center featuring court booking system, facility overview, membership plans, and real-time availability tracking for court rentals.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/RavinduNilash/aspire-badminton",
    demo: "https://aspirebd.lk/",
    images: [
      "/Aspireweb/1.png", "/Aspireweb/2.png", "/Aspireweb/3.png", "/Aspireweb/4.png", "/Aspireweb/5.png"
    ],
    featured: true,
    category: "Web App"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/RavinduNilash/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    images: ["/api/placeholder/600/400"],
    featured: false,
    category: "Frontend"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/RavinduNilash/portfolio",
    demo: "https://ravindunilash.dev",
    images: ["/api/placeholder/600/400"],
    featured: false,
    category: "Frontend"
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, comment system, and SEO optimization for content creators.",
    tech: ["Next.js", "Contentful", "TypeScript", "Vercel"],
    github: "https://github.com/RavinduNilash/blog-platform",
    demo: "https://blog-demo.vercel.app",
    images: ["/api/placeholder/600/400"],
    featured: false,
    category: "CMS"
  },
  {
    title: "Expense Tracker",
    description: "A personal finance management app with budget tracking, expense categorization, and detailed analytics.",
    tech: ["React", "Firebase", "Chart.js", "Material-UI"],
    github: "https://github.com/RavinduNilash/expense-tracker",
    demo: "https://expense-tracker-demo.netlify.app",
    images: ["/api/placeholder/600/400"],
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

// Project Carousel Component
function ProjectCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const isPlaceholder = images[0]?.includes('/api/placeholder') || images[0]?.includes('placeholder')

  if (images.length === 1) {
    // Single image - no carousel needed
    return (
      <div className="aspect-video bg-gradient-to-br from-tertiary-light to-secondary-gray/20 rounded-xl overflow-hidden">
        {isPlaceholder || imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-secondary-gray flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-dark/40" />
              </div>
              <span className="text-sm font-medium">Project Preview</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={images[0]}
              alt="Project preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-gradient-to-br from-tertiary-light to-secondary-gray/20 rounded-xl overflow-hidden group">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {isPlaceholder || imageError ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-secondary-gray flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary-dark/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary-dark/40" />
                </div>
                <span className="text-sm font-medium">Preview {currentIndex + 1}</span>
              </div>
            </div>
          ) : (
            <Image
              src={images[currentIndex]}
              alt={`Project preview ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          )}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-dark scale-110' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-3 right-3 bg-primary-dark/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
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
                    className="flex flex-wrap gap-3"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: techIndex * 0.08,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="relative px-4 py-2.5 bg-gradient-to-r from-pure-white/90 to-pure-white/80 backdrop-blur-sm border border-primary-dark/15 hover:border-primary-dark/30 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden">
                          {/* Tech name */}
                          <span className="relative z-10 text-sm font-semibold text-primary-dark group-hover:text-secondary-gray transition-colors duration-300">
                            {tech}
                          </span>
                          
                          {/* Hover gradient overlay */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-gradient-to-r from-primary-dark/8 via-secondary-gray/5 to-primary-dark/8 rounded-xl"
                          />
                          
                          {/* Subtle shine effect */}
                          <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            whileHover={{ x: '100%', opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                            style={{ transform: 'skewX(-20deg)' }}
                          />
                        </div>
                        
                        {/* Decorative dot */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.08 + 0.2 }}
                          viewport={{ once: true }}
                          className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-primary-dark to-secondary-gray rounded-full opacity-60"
                        />
                      </motion.div>
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
                      className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
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
                      <ProjectCarousel images={project.images} />
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
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: techIndex * 0.05,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="relative px-3 py-1.5 bg-gradient-to-r from-pure-white/95 to-pure-white/85 backdrop-blur-sm border border-primary-dark/10 hover:border-primary-dark/25 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-default overflow-hidden">
                          <span className="relative z-10 text-xs font-medium text-secondary-gray group-hover:text-primary-dark transition-colors duration-300">
                            {tech}
                          </span>
                          
                          {/* Hover gradient overlay */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-gradient-to-r from-primary-dark/5 to-secondary-gray/5 rounded-lg"
                          />
                          
                          {/* Mini shine effect */}
                          <motion.div
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-lg"
                            style={{ transform: 'skewX(-15deg)' }}
                          />
                        </div>
                      </motion.div>
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
