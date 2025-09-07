"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "./navbar"

export function PortfolioHeroSection() {
  return (
    <section className="hero-section-height bg-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(34,34,34,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content - Full Screen Height Hero */}
      <div className="relative h-full">
        <div className="absolute inset-0 pt-20">
          {/* Container that matches other sections */}
          <div className="container-center section-padding h-full relative">
            <div className="flex h-full">
              {/* Left Content - Takes space within container */}
              <div className="flex-1 max-w-2xl flex items-center">
                <div className="w-full">

                {/* Statistics - Redesigned Layout */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="grid grid-cols-2 gap-6 mb-12"
                >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="space-y-1"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-dark tracking-tight">30+</div>
                  <div className="text-secondary-gray font-normal text-sm">Projects Completed</div>
                  <div className="w-8 h-px bg-primary-dark/20" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  className="space-y-1"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-dark tracking-tight">20+</div>
                  <div className="text-secondary-gray font-normal text-sm">Startups Helped</div>
                  <div className="w-8 h-px bg-primary-dark/20" />
                </motion.div>
              </motion.div>

              {/* Main Heading Section - Redesigned with Modern Highlighting */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Elegant Hello with Sophisticated Typography */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="relative overflow-hidden"
                >
                  {/* Main Hello Text with Elegant Styling */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50, rotateX: 15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.6, 
                      ease: [0.23, 1, 0.32, 1],
                      type: "spring",
                      damping: 20,
                      stiffness: 100
                    }}
                    className="relative z-10 select-none"
                    style={{
                      fontFamily: '"Times New Roman", "Playfair Display", serif',
                      fontSize: 'clamp(6rem, 15vw, 14rem)',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      lineHeight: 0.8,
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1a1a1a 80%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 30px rgba(26, 26, 26, 0.1)',
                    }}
                  >
                    Hello
                  </motion.h1>

                  {/* Elegant Underline Accent */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark/40 to-transparent origin-left"
                  />

                  {/* Sophisticated Highlight Elements */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 0.6 }}
                    transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
                    className="absolute -top-8 -right-8 w-2 h-16 bg-gradient-to-b from-primary-dark/20 to-transparent rotate-12 rounded-full"
                  />

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="absolute -bottom-6 -left-6 w-3 h-3 bg-primary-dark rounded-full"
                  />

                  {/* Refined Glow Effect */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute inset-0 bg-gradient-radial from-primary-dark/10 via-transparent to-transparent rounded-3xl blur-2xl -z-10"
                    style={{
                      background: 'radial-gradient(ellipse 120% 80% at 50% 60%, rgba(26, 26, 26, 0.08) 0%, transparent 70%)'
                    }}
                  />

                  {/* Elegant Serif Ornament */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-primary-dark/30 text-2xl"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    ◆
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-secondary-gray font-normal leading-relaxed">
                    — It&apos;s <span className="text-primary-dark font-medium">Ravindu Nilash</span>, a Software Engineer
                  </p>
                </motion.div>

                {/* Brief Description - REMOVED */}

                {/* Call to Action Buttons - Made Smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.0 }}
                  className="flex flex-col sm:flex-row gap-3 pt-4"
                >
                  <button className="bg-primary-dark text-pure-white px-6 py-2.5 rounded-full hover:bg-secondary-gray transition-all duration-300 font-normal text-sm flex items-center justify-center space-x-2 group">
                    <span>Let&apos;s Work Together</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="border border-primary-dark/40 text-primary-dark px-6 py-2.5 rounded-full hover:bg-primary-dark hover:text-pure-white transition-all duration-300 font-normal text-sm">
                    View Portfolio
                  </button>
                </motion.div>
              </motion.div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Responsive padding for better centering */}
            <div className="absolute right-0 top-0 bottom-0 hero-right-content" style={{ left: 'min(40%, 600px)' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="relative w-full h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2, type: "spring", bounce: 0.2 }}
                  className="relative w-full hero-image-wrapper"
                >
                  <Image
                    src="/me1.png"
                    alt="Ravindu Nilash - Software Engineer"
                    fill
                    className="hero-image object-contain object-bottom"
                    style={{
                      filter: 'contrast(1.1) brightness(0.95) saturate(0.9) sepia(0.1)',
                    }}
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Year Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="writing-mode-vertical text-secondary-gray text-sm font-medium tracking-widest">
          2025
        </div>
      </motion.div>
    </section>
  )
}
