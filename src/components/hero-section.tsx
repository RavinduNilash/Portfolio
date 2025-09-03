"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import { DecryptedText } from "./decrypted-text"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1F51FF]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#1F51FF]/5 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#1F51FF]/15 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-center section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Elegant Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Greeting with modern styling */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                className="relative inline-block mb-6"
              >
                <span className="relative z-10 inline-flex items-center px-4 py-2 text-[#1F51FF] font-semibold text-sm tracking-[0.2em] uppercase bg-[#1F51FF]/5 rounded-full border border-[#1F51FF]/20 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-[#1F51FF] rounded-full mr-3 animate-pulse"></span>
                  <DecryptedText text="Hello, I'm" delay={600} speed={100} />
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -inset-1 bg-gradient-to-r from-[#1F51FF]/20 to-transparent rounded-full blur-sm -z-10"
                />
              </motion.div>
              
              {/* Name and title with clean modern design */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, type: "spring", stiffness: 100 }}
                className="relative mb-6"
              >
                <div className="relative space-y-4">
                  {/* First Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                    className="relative"
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 tracking-tight leading-none">
                      <DecryptedText text="Ravindu" delay={1000} speed={80} />
                    </h1>
                  </motion.div>
                  
                  {/* Last Name */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                    className="relative"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F51FF] uppercase tracking-wider leading-none ml-8">
                      <DecryptedText text="NILASH" delay={1400} speed={80} />
                    </h1>
                    {/* Subtle accent dot */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 2.2, type: "spring" }}
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1F51FF] rounded-full"
                    />
                  </motion.div>
                  
                  {/* Role Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.6 }}
                    className="relative pt-2"
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light tracking-wide">
                      <DecryptedText text="Software Engineer" delay={2000} speed={60} />
                    </h2>
                    {/* Single elegant accent line */}
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 2.8 }}
                      className="mt-3 h-[2px] w-24 bg-gradient-to-r from-[#1F51FF] to-[#1F51FF]/30 rounded-full"
                    />
                  </motion.div>
                  
                  {/* Minimal floating elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.6, type: "spring" }}
                    className="absolute -top-4 right-8 w-2 h-2 bg-[#1F51FF]/50 rounded-full"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="absolute -bottom-2 right-16 w-1 h-8 bg-gradient-to-b from-[#1F51FF]/30 to-transparent rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Remove the old role section since it's now integrated above */}
            </motion.div>

            {/* Mission Statement Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="relative"
            >
              {/* Animated Mission Statement */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.4 }}
                className="relative"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.6 }}
                  >
                    I craft{" "}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.8 }}
                    className="relative font-semibold text-[#1F51FF]"
                  >
                    modern
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 4.0 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F51FF]/30 rounded-full"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.0 }}
                  >
                    ,{" "}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.2 }}
                    className="relative font-semibold text-[#1F51FF]"
                  >
                    scalable
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 4.4 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F51FF]/30 rounded-full"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.4 }}
                  >
                    , and{" "}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.6 }}
                    className="relative font-semibold text-[#1F51FF]"
                  >
                    user-centric
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 4.8 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F51FF]/30 rounded-full"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.8 }}
                  >
                    {" "}digital experiences with{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 5.0 }}
                    className="font-semibold text-gray-900"
                  >
                    cutting-edge technologies
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 5.2 }}
                  >
                    {" "}and{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 5.4 }}
                    className="font-semibold text-gray-900"
                  >
                    innovative solutions
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 5.6, type: "spring" }}
                    className="text-[#1F51FF] text-3xl"
                  >
                    .
                  </motion.span>
                </p>

                {/* Subtle decorative elements */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 5.8 }}
                  className="absolute -left-4 top-2 w-1 h-12 bg-gradient-to-b from-[#1F51FF]/30 to-transparent rounded-full"
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 6.0, type: "spring" }}
                  className="absolute -right-2 -bottom-2 w-2 h-2 bg-[#1F51FF]/40 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Modern CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 6.2 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 6.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-[#1F51FF] text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-2xl hover:shadow-[#1F51FF]/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <motion.div
                    className="ml-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.div>
                </span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#0F3FFF] to-[#1F51FF]"
                />
              </motion.a>
              
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 6.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-2 px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border-2 border-[#1F51FF]/40 hover:border-[#1F51FF]/70"
              >
                {/* Text content */}
                <span className="font-medium text-lg text-[#1F51FF]">
                  Get In Touch
                </span>
                
                {/* Simple mail icon */}
                <div className="relative">
                  <Mail className="h-5 w-5 text-[#1F51FF]" />
                  
                  {/* Small dot indicator */}
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#1F51FF] rounded-full animate-pulse" />
                </div>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 6.8 }}
              className="flex items-center gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 7.0 }}
                className="relative"
              >
                <span className="text-xs text-gray-400 font-medium tracking-[0.2em] uppercase">Connect</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 7.2 }}
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#1F51FF]/30"
                />
              </motion.div>
              
              <div className="flex items-center gap-3">
                {[
                  { href: "https://github.com/ravindunilash", icon: Github, delay: 7.2 },
                  { href: "https://linkedin.com/in/ravindunilash", icon: Linkedin, delay: 7.4 },
                  { href: "mailto:contact@ravindunilash.com", icon: Mail, delay: 7.6 }
                ].map(({ href, icon: Icon, delay }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 8px 25px rgba(31, 81, 255, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-3 bg-white rounded-xl border border-gray-100 hover:border-[#1F51FF]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Icon className="h-5 w-5 text-gray-600 group-hover:text-[#1F51FF] transition-colors duration-300" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#1F51FF]/5 rounded-xl"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Modern layered background effects */}
              <div className="absolute -inset-12 bg-gradient-to-br from-[#1F51FF]/8 via-transparent to-[#1F51FF]/4 rounded-[2rem] transform rotate-2 blur-xl"></div>
              <div className="absolute -inset-8 bg-gradient-to-tl from-[#1F51FF]/6 via-[#1F51FF]/2 to-transparent rounded-[1.5rem] transform -rotate-1"></div>
              
              {/* Elegant geometric accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -top-6 -left-6 w-24 h-24 border border-[#1F51FF]/20 rounded-2xl backdrop-blur-sm bg-white/10"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#1F51FF]/10 to-transparent rounded-3xl backdrop-blur-sm"
              />
              
              {/* Main image container with modern styling */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
                <div className="relative group">
                  {/* Image */}
                  <Image
                    src="/me1.png"
                    alt="Ravindu Nilash - Software Engineer"
                    width={450}
                    height={550}
                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  
                  {/* Modern overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F51FF]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#1F51FF]/5 pointer-events-none"></div>
                  
                  {/* Modern corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute top-4 right-4 w-3 h-3 bg-[#1F51FF] rounded-full shadow-lg shadow-[#1F51FF]/50"
                  />
                </div>
              </div>
              
              {/* Modern floating elements */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#1F51FF] to-[#0F3FFF] rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-4 h-4 bg-white rounded-lg opacity-90"></div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                  rotate: [0, -3, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#1F51FF]/70 rounded-xl shadow-lg backdrop-blur-sm"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -left-2 w-6 h-6 bg-gradient-to-br from-[#1F51FF]/50 to-transparent rounded-full backdrop-blur-sm"
              />
              
              {/* Elegant corner decorations */}
              <motion.div
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-8 -left-2 w-[2px] h-12 bg-gradient-to-b from-[#1F51FF]/40 to-transparent rounded-full"
              />
              
              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -bottom-2 right-8 w-12 h-[2px] bg-gradient-to-r from-[#1F51FF]/40 to-transparent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
