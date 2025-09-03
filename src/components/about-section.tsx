"use client"

import { motion } from "framer-motion"
import { Code, Users, Zap, Sparkles, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Crafting maintainable, scalable solutions with modern best practices",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimizing every interaction for lightning-fast user experiences",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Team Synergy",
    description: "Building bridges between design, development, and business goals",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "Turning complex challenges into elegant, user-centric solutions",
    gradient: "from-purple-500 to-pink-600"
  }
]

const stats = [
  { number: "3+", label: "Years Experience", delay: 0.2 },
  { number: "30+", label: "Projects Completed", delay: 0.4 },
  { number: "100%", label: "Client Satisfaction", delay: 0.6 },
  { number: "24/7", label: "Learning Mode", delay: 0.8 }
]

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1F51FF]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1F51FF]/8 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#1F51FF]/3 to-transparent rounded-full blur-3xl" />
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
            <span className="relative z-10 inline-flex items-center px-6 py-3 text-[#1F51FF] font-semibold text-sm tracking-[0.2em] uppercase bg-[#1F51FF]/5 rounded-full border border-[#1F51FF]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-3 animate-pulse" />
              Get to know me
            </span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -inset-2 bg-gradient-to-r from-[#1F51FF]/10 to-transparent rounded-full blur-md -z-10"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Crafting Digital{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative text-[#1F51FF]"
            >
              Experiences
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F51FF] to-[#1F51FF]/50 rounded-full"
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            I&apos;m a passionate software engineer who transforms ideas into{" "}
            <span className="font-semibold text-gray-800">impactful digital solutions</span>.
            My journey is fueled by curiosity, innovation, and an unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Enhanced Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            {/* Description with enhanced typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-5xl mx-auto"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
                With a strong foundation in{" "}
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  className="relative font-semibold text-gray-900 cursor-default"
                >
                  modern web technologies
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F51FF]/30 rounded-full"
                  />
                </motion.span>{" "}
                and a keen eye for user experience, I specialize in building responsive, accessible, 
                and performant applications that exceed expectations.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                My approach combines{" "}
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  className="relative font-semibold text-gray-900 cursor-default"
                >
                  technical expertise
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F51FF]/30 rounded-full"
                  />
                </motion.span>{" "}
                with creative problem-solving to deliver solutions that not only work flawlessly 
                but also inspire and delight users.
              </p>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-[#1F51FF]/10 rounded-2xl backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#1F51FF]/20 to-[#1F51FF]/5 rounded-xl"
              />
            </motion.div>

            {/* Enhanced Tags with better spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["Problem Solver", "Innovation Driven", "Team Collaborator", "Continuous Learner"].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative px-6 py-4 bg-gradient-to-r from-[#1F51FF]/10 to-[#1F51FF]/5 text-[#1F51FF] rounded-2xl text-base font-semibold border border-[#1F51FF]/20 hover:border-[#1F51FF]/40 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-[#1F51FF]/10"
                >
                  {tag}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#1F51FF]/5 rounded-2xl"
                  />
                </motion.span>
              ))}
            </motion.div>

            {/* Redesigned Stats Section with better visual hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <span className="text-sm text-gray-500 font-medium tracking-[0.2em] uppercase">
                  By the numbers
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="mx-auto mt-2 w-16 h-[2px] bg-[#1F51FF]/30 rounded-full"
                />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    viewport={{ once: true }}
                    className="group text-center relative p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:border-[#1F51FF]/20 hover:shadow-lg hover:shadow-[#1F51FF]/5 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F51FF] mb-3 group-hover:text-[#0F3FFF] transition-colors duration-300">
                        {stat.number}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-gradient-to-r from-[#1F51FF]/40 to-[#1F51FF]/10 rounded-full"
                      />
                    </motion.div>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#1F51FF]/5 to-transparent rounded-2xl pointer-events-none"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 hover:border-[#1F51FF]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#1F51FF]/5"
            >
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`relative w-14 h-14 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <highlight.icon className="h-7 w-7 text-white" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/20 rounded-xl"
                />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1F51FF] transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {highlight.description}
              </p>
              
              {/* Subtle accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#1F51FF]/30 to-transparent rounded-full"
              />
              
              {/* Hover effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1F51FF]/5 to-transparent rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
