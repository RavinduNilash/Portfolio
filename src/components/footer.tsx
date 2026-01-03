"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, ArrowUp, Star, Code2, Coffee } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-gray to-primary-dark">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pure-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary-light/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pure-white/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-center relative z-10">
        {/* Enhanced Header Section - Removed per requirements */}

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">{/* Added top padding since header section was removed */}
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-pure-white"
              >
                <span className="text-tertiary-light">Ravindu</span> Nilash
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-tertiary-light leading-relaxed max-w-md"
              >
                Software Engineer passionate about creating{" "}
                <span className="text-pure-white font-semibold">innovative solutions</span>{" "}
                and building amazing digital experiences with{" "}
                <span className="text-pure-white font-semibold">cutting-edge technologies</span>.
              </motion.p>
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-tertiary-light" />
                <span className="text-sm text-tertiary-light/70 font-medium tracking-[0.2em] uppercase">
                  Follow My Journey
                </span>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/RavinduNilash", label: "GitHub", color: "hover:bg-secondary-gray" },
                  { icon: Linkedin, href: "https://linkedin.com/in/ravindunilash", label: "LinkedIn", color: "hover:bg-tertiary-light/20" },
                  { icon: Mail, href: "mailto:ravindu@example.com", label: "Email", color: "hover:bg-secondary-gray" }
                ].map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: "0 8px 25px rgba(31, 81, 255, 0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    className={`group relative w-12 h-12 bg-pure-white/10 backdrop-blur-sm ${color} rounded-xl flex items-center justify-center transition-all duration-300 border border-pure-white/10 hover:border-tertiary-light/30`}
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-pure-white group-hover:scale-110 transition-transform duration-300" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-tertiary-light/10 rounded-xl"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-pure-white flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-tertiary-light" />
                Navigation
              </h4>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-[2px] bg-tertiary-light/30 rounded-full"
              />
            </div>
            
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center text-tertiary-light/70 hover:text-tertiary-light transition-all duration-300"
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-1 h-1 bg-tertiary-light/50 group-hover:bg-tertiary-light rounded-full mr-3 transition-colors duration-300"
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-pure-white flex items-center">
                <Mail className="w-4 h-4 mr-2 text-tertiary-light" />
                Get In Touch
              </h4>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-[2px] bg-tertiary-light/30 rounded-full"
              />
            </div>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:ravindu@example.com"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="group flex items-center text-tertiary-light/80 hover:text-tertiary-light transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                rnilash2@gmail.com
              </motion.a>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-tertiary-light/70 flex items-center"
              >
                <span className="w-4 h-4 mr-3 flex items-center justify-center">📍</span>
                Colombo, Sri Lanka
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center text-tertiary-light/70 text-sm"
            >
              <span>© {currentYear} Ravindu Nilash. Crafted with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" fill="currentColor" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 mx-2 text-amber-500" />
              <span>in Sri Lanka.</span>
            </motion.div>

            {/* Enhanced Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 8px 25px rgba(31, 81, 255, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-12 h-12 bg-secondary-gray hover:bg-tertiary-light/20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-pure-white group-hover:-translate-y-1 transition-transform duration-300" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-secondary-gray to-tertiary-light/20 rounded-xl"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-8 w-2 h-2 bg-tertiary-light/60 rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="absolute top-16 right-16 w-1 h-12 bg-gradient-to-b from-tertiary-light/30 to-transparent rounded-full"
        />
      </div>
    </footer>
  )
}
