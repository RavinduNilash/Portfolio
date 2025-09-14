"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 72 // Fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav 
      style={{
        height: '72px',
        minHeight: '72px',
        maxHeight: '72px'
      }}
      className="navbar-simple fixed top-0 left-0 right-0 z-50 bg-pure-white/90 backdrop-blur-sm border-b border-tertiary-light"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 h-full flex items-center"
        style={{
          height: '72px',
          minHeight: '72px',
          maxHeight: '72px'
        }}
      >
        <div className="flex items-center justify-between w-full h-full"
             style={{
               height: '100%',
               minHeight: '72px',
               maxHeight: '72px'
             }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("#")}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/Logo/logo-transparent.png"
                alt="Portfolio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-secondary-gray hover:text-primary-dark transition-colors duration-200 font-medium relative group"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
                {/* Hover underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden flex items-center justify-center w-8 h-8 text-primary-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-primary-dark origin-center transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-primary-dark transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-primary-dark origin-center transition-all duration-300"
              />
            </div>
          </motion.button>

          {/* Book A Call Button - Desktop */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex bg-primary-dark text-pure-white px-6 py-2.5 rounded-full hover:bg-secondary-gray transition-colors duration-200 font-medium items-center space-x-2"
            onClick={() => handleNavClick("#contact")}
          >
            <span>Book A Call</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-pure-white/95 backdrop-blur-sm border-t border-tertiary-light"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block w-full text-left text-secondary-gray hover:text-primary-dark transition-colors duration-200 font-medium py-2"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile Book A Call Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="w-full bg-primary-dark text-pure-white px-6 py-3 rounded-full hover:bg-secondary-gray transition-colors duration-200 font-medium flex items-center justify-center space-x-2 mt-4"
              onClick={() => handleNavClick("#contact")}
            >
              <span>Book A Call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  )
}
