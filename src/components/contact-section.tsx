"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Star, Sparkles, Heart } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with a service like Formspree, Netlify Forms, or your own backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden bg-tertiary-light">
      {/* Elegant background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-gray/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-dark/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary-gray/3 to-transparent rounded-full blur-3xl" />
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
              <MessageCircle className="w-4 h-4 mr-3 animate-pulse" />
              Let&apos;s Connect
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
            Get In{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative text-primary-dark"
            >
              Touch
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
            I&apos;m always open to discussing{" "}
            <span className="font-semibold text-primary-dark">new opportunities</span>,{" "}
            interesting projects, or just having a chat about technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-dark">Let&apos;s Create Something Amazing</h3>
              <p className="text-secondary-gray leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I&apos;d love to hear from you. Let&apos;s build something incredible together!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center space-x-4 p-4 bg-pure-white/80 backdrop-blur-sm rounded-2xl border border-secondary-gray/20 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-dark/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-dark to-secondary-gray rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Mail className="h-6 w-6 text-pure-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary-dark group-hover:text-primary-dark transition-colors duration-300">Email</p>
                    <a 
                      href="mailto:ravindu@example.com" 
                      className="text-secondary-gray hover:text-primary-dark transition-colors duration-300"
                    >
                      rnilash2@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center space-x-4 p-4 bg-pure-white/80 backdrop-blur-sm rounded-2xl border border-secondary-gray/20 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-dark/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-secondary-gray to-primary-dark rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Phone className="h-6 w-6 text-pure-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary-dark group-hover:text-primary-dark transition-colors duration-300">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-secondary-gray hover:text-primary-dark transition-colors duration-300"
                    >
                      +94 77 869 5283
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center space-x-4 p-4 bg-pure-white/80 backdrop-blur-sm rounded-2xl border border-secondary-gray/20 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-dark/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-dark to-secondary-gray rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <MapPin className="h-6 w-6 text-pure-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary-dark group-hover:text-primary-dark transition-colors duration-300">Location</p>
                    <p className="text-secondary-gray">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-primary-dark mr-3" />
                  <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                    Follow My Journey
                  </span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mx-auto w-20 h-[2px] bg-primary-dark/30 rounded-full"
                />
              </div>
              
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Github, href: "https://github.com/RavinduNilash", label: "GitHub", color: "from-primary-dark to-secondary-gray" },
                  { icon: Linkedin, href: "https://linkedin.com/in/ravindunilash", label: "LinkedIn", color: "from-secondary-gray to-primary-dark" },
                  { icon: Twitter, href: "https://twitter.com/ravindunilash", label: "Twitter", color: "from-primary-dark to-secondary-gray" }
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gradient-to-br ${color} text-pure-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-pure-white/80 backdrop-blur-sm p-8 rounded-2xl border border-secondary-gray/20 hover:border-primary-dark/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-dark/5"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-primary-dark mr-3" />
                  <span className="text-sm text-secondary-gray font-medium tracking-[0.2em] uppercase">
                    Send Message
                  </span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mx-auto w-16 h-[2px] bg-primary-dark/30 rounded-full"
                />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl focus:ring-2 focus:ring-primary-dark/20 focus:border-primary-dark bg-pure-white/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary-gray"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl focus:ring-2 focus:ring-primary-dark/20 focus:border-primary-dark bg-pure-white/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary-gray"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl focus:ring-2 focus:ring-primary-dark/20 focus:border-primary-dark bg-pure-white/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary-gray"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-xl focus:ring-2 focus:ring-primary-dark/20 focus:border-primary-dark bg-pure-white/50 backdrop-blur-sm transition-all duration-300 resize-none hover:border-secondary-gray"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full bg-gradient-to-r from-primary-dark to-secondary-gray hover:from-secondary-gray hover:to-primary-dark text-pure-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl hover:shadow-primary-dark/25"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Collaboration Call to Action */}
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
                Ready to Collaborate
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
            I believe great things happen when{" "}
            <span className="font-semibold text-primary-dark">creative minds collaborate</span>.{" "}
            Let&apos;s turn your ideas into{" "}
            <span className="font-semibold text-primary-dark">digital reality</span> together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
