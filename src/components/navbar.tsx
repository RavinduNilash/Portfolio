"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Navbar() {
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
            className="flex items-center space-x-2"
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
      </motion.div>
    </nav>
  )
}
