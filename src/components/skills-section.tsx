"use client"

import { motion } from "framer-motion"
import { Code2, Database, Settings, Sparkles, Star, TrendingUp, Cloud, TestTube2, Package, Smartphone } from "lucide-react"

// Core skills with proficiency levels
const coreSkills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Flutter", level: 75, category: "Mobile Development" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" }
]

// Comprehensive technology categories
const techCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "blue" as const,
    technologies: [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Styled Components", "Sass", "Responsive Design", 
    ]
  },
  {
    name: "Backend",
    icon: Database,
    color: "green" as const,
    technologies: [
      "Node.js", "Express.js", "Firebase","Superbase", "Django", "FastAPI", "PostgreSQL", 
      "MongoDB",  "REST APIs", "GraphQL", "Microservices", "WebSockets"
    ]
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "emerald" as const,
    technologies: [
      "Flutter", "Dart","FlutterFlow", "React Native", "iOS Development", "Android Development",
      "Firebase", "SQLite", "Native APIs", "App Store", "Play Store", "Push Notifications"
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "purple" as const,
    technologies: [
      "AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", 
       "DigitalOcean",  "Linux", "Monitoring"
    ]
  },
  {
    name: "Tools & Workflow",
    icon: Settings,
    color: "orange" as const,
    technologies: [
      "Git", "GitHub", "VS Code", "Figma", "Webpack", "Vite", "ESLint", 
      "Prettier", "NPM", "Yarn", "Postman", "Notion"
    ]
  },
  {
    name: "Testing & Quality",
    icon: TestTube2,
    color: "red" as const,
    technologies: [
      "Cypress", "Playwright", "Testing Library", "Vitest", "Storybook", 
      "Jest", "SonarQube", "E2E Testing", "TDD", "Unit Testing"
    ]
  },
  {
    name: "Libraries & Frameworks",
    icon: Package,
    color: "indigo" as const,
    technologies: [
      "React Query", "Zustand", "Redux", "Framer Motion", "Three.js", "Chart.js",
      "Date-fns", "Lodash", "Axios", "Socket.io", "Prisma", "Stripe"
    ]
  }
]

const colorMap = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-emerald-600", 
  emerald: "from-emerald-500 to-teal-600",
  purple: "from-purple-500 to-violet-600",
  orange: "from-orange-500 to-amber-600",
  red: "from-red-500 to-pink-600",
  indigo: "from-indigo-500 to-purple-600"
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1F51FF]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animationDelay: '2s' }} />
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
              <Star className="w-4 h-4 mr-3 animate-pulse" />
              Technical Expertise
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
            Technical{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative text-[#1F51FF]"
            >
              Skills
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
            A comprehensive arsenal of{" "}
            <span className="font-semibold text-gray-800">modern technologies</span>{" "}
            and tools that I leverage to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Core Skills Highlight */}
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
            <span className="text-sm text-gray-500 font-medium tracking-[0.2em] uppercase">
              Core Expertise
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-2 w-20 h-[2px] bg-[#1F51FF]/30 rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100/50 hover:border-[#1F51FF]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#1F51FF]/5"
              >
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1F51FF] transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <div className="relative w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-[#1F51FF] to-[#0F3FFF] h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-[#1F51FF]">{skill.level}%</span>
                </div>
                
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

        {/* Technology Categories */}
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
              <TrendingUp className="w-5 h-5 text-[#1F51FF] mr-3" />
              <span className="text-sm text-gray-500 font-medium tracking-[0.2em] uppercase">
                Technology Stack
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mx-auto w-24 h-[2px] bg-[#1F51FF]/30 rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100/50 hover:border-[#1F51FF]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#1F51FF]/5"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-10 h-10 bg-gradient-to-br ${colorMap[category.color]} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1F51FF] transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-gray-100/80 hover:bg-[#1F51FF]/10 text-gray-700 hover:text-[#1F51FF] rounded-lg text-xs font-medium transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Category accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#1F51FF]/30 to-transparent rounded-full"
                />
                
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

        {/* Learning & Growth */}
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
              <Sparkles className="w-5 h-5 text-[#1F51FF] mr-3" />
              <span className="text-sm text-gray-500 font-medium tracking-[0.2em] uppercase">
                Always Learning
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="mx-auto w-20 h-[2px] bg-[#1F51FF]/30 rounded-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m constantly exploring new technologies and methodologies to stay at the forefront 
            of web development. Currently diving deeper into{" "}
            <span className="font-semibold text-[#1F51FF]">AI/ML integration</span>,{" "}
            <span className="font-semibold text-[#1F51FF]">Web3</span>, and{" "}
            <span className="font-semibold text-[#1F51FF]">Advanced Cloud Architecture</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
