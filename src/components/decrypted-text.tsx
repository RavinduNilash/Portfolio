"use client"

import { useEffect, useState } from "react"

interface DecryptedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

export function DecryptedText({ text, className = "", delay = 0, speed = 50 }: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
      setIsDecrypting(true)
      let currentIndex = 0
      const textLength = text.length
      let iterations = 0
      
      const decryptInterval = setInterval(() => {
        if (currentIndex <= textLength) {
          const decryptedPart = text.slice(0, currentIndex)
          const remainingLength = textLength - currentIndex
          const encryptedPart = Array(remainingLength)
            .fill(0)
            .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
            .join("")
          
          setDisplayText(decryptedPart + encryptedPart)
          
          // Add some randomness to make it feel more organic
          iterations++
          if (iterations % Math.max(1, Math.floor(Math.random() * 3) + 1) === 0) {
            currentIndex++
          }
        } else {
          setDisplayText(text)
          setIsDecrypting(false)
          clearInterval(decryptInterval)
        }
      }, speed)

      return () => clearInterval(decryptInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <span 
      className={`
        ${className} 
        ${isDecrypting ? "font-mono tracking-wider" : ""} 
        ${hasStarted ? "transition-all duration-300" : ""}
        relative
      `}
    >
      {displayText || (hasStarted ? "" : text)}
      {isDecrypting && (
        <span className="absolute -right-1 top-0 w-0.5 h-full bg-[#1F51FF] animate-pulse" />
      )}
    </span>
  )
}
