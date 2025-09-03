"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Centered Glass Morphism Navigation */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-auto"
        >
          <motion.div
            className={`
              bg-white/80 backdrop-blur-xl border border-white/20 
              rounded-full px-6 py-3 shadow-lg shadow-black/5
              transition-all duration-500 ease-out
              ${isScrolled 
                ? "bg-white/90 shadow-xl shadow-black/10 border-gray-200/30" 
                : "bg-white/70 shadow-lg shadow-black/5"
              }
            `}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                  className="text-sm font-medium text-gray-700 hover:text-[#1F51FF] transition-all duration-300 relative group px-3 py-2 rounded-full whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute inset-x-3 -bottom-0 h-0.5 bg-[#1F51FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </motion.a>
              ))}
            </div>
              
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-gray-700" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-700" />
                  )}
                </motion.div>
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[90vw]"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1F51FF] hover:bg-[#1F51FF]/5 rounded-xl transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}