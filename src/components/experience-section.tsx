"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Star, Sparkles, TrendingUp } from "lucide-react"

const experiences = [
  
  {
    title: "Junior Software Engineer",
   company: "Absterco pvt Ltd.",
    location: "Piliyandala, Sri Lanka",
    period: "2025",
    description: [
      "Built scalable web applications serving 10,000+ daily active users",
      "Implemented responsive UI components using React and TypeScript",
      "Collaborated with cross-functional teams to deliver features on time",
      "Fixed critical bugs and improved code quality through peer reviews"
    ],
    tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Stripe"],
    current: false
  },{
    title: "Full Stack Developer",
   company: "Absterco pvt Ltd.",
    location: "Piliyandala, Sri Lanka",
    period: "2025",
    description: [
      "Led development of enterprise-level applications using modern tech stack",
      "Architected and implemented RESTful APIs handling 1M+ requests daily",
      "Mentored junior developers and conducted code review sessions",
      "Reduced system downtime by 40% through proactive monitoring solutions"
    ],
    tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Stripe"],
    current: false
  },
  {
    title: "Frontend Developer-Intern ",
    company: "Absterco pvt Ltd.",
    location: "Piliyandala, Sri Lanka",
    period: "2024 ",
    description: [
      "Developed responsive user interfaces for 10+ client projects",
      "Collaborated with design team to implement pixel-perfect mockups",
      "Gained hands-on experience with modern JavaScript frameworks",
      "Contributed to open-source projects and improved team workflows"
    ],
    tech: ["React", "Redux", "JavaScript", "Sass", "Jest"],
    current: false
  },
 
]

const education = [
  {
    degree: "Bachelor of Science in Computing",
    school: "University in Wrexham, Wales, UK",
    period: "2025",
    description: "Currently pursuing advanced computing concepts with focus on software architecture, cloud technologies, and system design principles."
  },{
    degree: "Higher National Diploma in Information Technology",
    school: "Institute of Technology University of Moratuwa",
    period: "2022 - 2024",
    description: "Specialized in web development and database management. Completed capstone project using React and Node.js with MongoDB integration."
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Academy",
    period: "2020",
    description: "Intensive hands-on training in modern JavaScript frameworks, RESTful APIs, and deployment strategies for production applications."
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center overflow-hidden bg-tertiary-light">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-dark/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-gray/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animationDelay: '2s' }} />
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
              <Briefcase className="w-4 h-4 mr-3 animate-pulse" />
              Career Journey
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
            Professional{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative text-secondary-gray"
            >
              Experience
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
            My journey in{" "}
            <span className="font-semibold text-primary-dark">software development</span>,{" "}
            from junior developer to senior engineer, building innovative solutions and leading teams.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-primary-dark mr-3" />
                <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                  Work Experience
                </span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto w-20 h-[2px] bg-primary-dark/30 rounded-full"
              />
            </motion.div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-tertiary-light group-hover:bg-primary-dark/30 transition-colors duration-300" />
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                        exp.current 
                          ? "bg-gradient-to-br from-primary-dark to-secondary-gray text-white shadow-primary-dark/25" 
                          : "bg-white border border-tertiary-light text-secondary-gray group-hover:border-primary-dark/20 group-hover:text-primary-dark"
                      } transition-all duration-300`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </motion.div>
                    
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-tertiary-light/50 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-dark/5 group">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-primary-dark group-hover:text-secondary-gray transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <p className="text-primary-dark font-semibold">{exp.company}</p>
                          <div className="flex items-center text-sm text-secondary-gray mt-2 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            Current
                          </motion.span>
                        )}
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-secondary-gray text-sm leading-relaxed flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
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

                      {/* Hover effect overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 to-transparent rounded-2xl pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-secondary-gray mr-3" />
                  <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                    Education
                  </span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mx-auto w-16 h-[2px] bg-secondary-gray/30 rounded-full"
                />
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-tertiary-light/50 hover:border-secondary-gray/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-secondary-gray/5 group"
                  >
                    <h4 className="text-sm font-bold text-primary-dark mb-1 group-hover:text-secondary-gray transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-secondary-gray font-semibold text-sm mb-1">{edu.school}</p>
                    <p className="text-xs text-secondary-gray mb-2">{edu.period}</p>
                    <p className="text-secondary-gray text-xs leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary-dark mr-3" />
                  <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                    Achievements
                  </span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mx-auto w-16 h-[2px] bg-primary-dark/30 rounded-full"
                />
              </div>
              
              <div className="space-y-3">
                {[
                  "AWS Certified Developer Associate",
                  "Google Analytics Certified",
                  "React Developer Certification",
                  "Hackathon Winner - TechFest 2023"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-tertiary-light/50 hover:border-primary-dark/20 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 bg-primary-dark rounded-full group-hover:bg-secondary-gray transition-colors duration-300"
                    />
                    <span className="text-secondary-gray text-sm group-hover:text-primary-dark transition-colors duration-300 font-medium">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Growth & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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
                Continuous Growth
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
            Throughout my career, I&apos;ve been passionate about{" "}
            <span className="font-semibold text-primary-dark">continuous learning</span>,{" "}
            <span className="font-semibold text-primary-dark">mentoring others</span>, and{" "}
            <span className="font-semibold text-primary-dark">driving innovation</span> in every project I undertake.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
