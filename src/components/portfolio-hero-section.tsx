"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PortfolioHeroSection() {
  return (
    <section className="hero-section-height bg-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(34,34,34,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-pure-white/90 backdrop-blur-sm border-b border-tertiary-light"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary-dark rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-pure-white rounded-sm transform rotate-45" />
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              {["About Me", "Portfolio", "Services", "Blog"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-secondary-gray hover:text-primary-dark transition-colors duration-200 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>

            {/* Book A Call Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-dark text-pure-white px-6 py-2.5 rounded-full hover:bg-secondary-gray transition-colors duration-200 font-medium flex items-center space-x-2"
            >
              <span>Book A Call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

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
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid grid-cols-2 gap-6 mb-12"
                >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-1"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-dark tracking-tight">200+</div>
                  <div className="text-secondary-gray font-normal text-sm">Projects Completed</div>
                  <div className="w-8 h-px bg-primary-dark/20" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-1"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-dark tracking-tight">50+</div>
                  <div className="text-secondary-gray font-normal text-sm">Startups Helped</div>
                  <div className="w-8 h-px bg-primary-dark/20" />
                </motion.div>
              </motion.div>

              {/* Main Heading Section - Redesigned with Modern Highlighting */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-8"
              >
                {/* Enhanced Hello with Modern Highlighting */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.0, delay: 1.2 }}
                  className="relative"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-light text-primary-dark leading-[0.8] tracking-wider relative z-10"
                  >
                    Hello
                  </motion.h1>
                  
                  {/* Modern accent highlight */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-dark/10 to-secondary-gray/5 rounded-full blur-sm -z-10"
                  />
                  
                  {/* Subtle glow effect */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-dark/5 via-transparent to-secondary-gray/5 rounded-2xl blur-3xl -z-20"
                  />
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
                  transition={{ duration: 0.6, delay: 2.2 }}
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
                transition={{ duration: 0.8, delay: 1.8 }}
                className="relative w-full h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.0, type: "spring", bounce: 0.2 }}
                  className="relative w-full hero-image-wrapper"
                  style={{ 
                    height: '700px',
                    maxHeight: '700px'
                  }}
                >
                  <Image
                    src="/me1.png"
                    alt="Ravindu Nilash - Software Engineer"
                    fill
                    className="object-contain object-bottom"
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
        transition={{ duration: 0.8, delay: 2.0 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="writing-mode-vertical text-secondary-gray text-sm font-medium tracking-widest">
          2024
        </div>
      </motion.div>

      {/* Add this style block for fixed hero height and scroll on small screens */}
      <style jsx global>{`
        @media (max-height: 600px) {
          .hero-section-height,
          .container-center {
            min-height: 700px !important;
            height: 700px !important;
            overflow-y: auto !important;
          }
          .hero-image-wrapper {
            height: 700px !important;
            max-height: 700px !important;
          }
          .hero-right-content {
            left: min(40%, 600px) !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            position: absolute !important;
          }
        }
      `}</style>
    </section>
  )
}
