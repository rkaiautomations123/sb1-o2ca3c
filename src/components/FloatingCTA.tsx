import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FloatingCTA: React.FC = () => {
  const navigate = useNavigate()
  const [isPulsing, setIsPulsing] = useState(false)

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000) // Pulse for 1 second
    }, 5000) // Pulse every 5 seconds

    return () => clearInterval(pulseInterval)
  }, [])

  const handleBookDemo = () => {
    navigate('/contact', { state: { scrollToForm: true } })
  }

  const buttonClass = `
    text-white font-bold py-3 px-4 md:py-5 md:px-6 rounded-full text-base md:text-lg transition-all duration-300
    transform hover:scale-105 shadow-lg
    ${isPulsing ? 'animate-pulse' : ''}
  `

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col space-y-2 md:space-y-4">
      <button 
        onClick={handleBookDemo} 
        className={`${buttonClass} bg-blue-500 hover:bg-blue-600`}
      >
        Book a Demo
      </button>
      <a 
        href="https://wa.me/31612674348" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${buttonClass} bg-green-500 hover:bg-green-600 text-center`}
      >
        WhatsApp Us
      </a>
    </div>
  )
}

export default FloatingCTA