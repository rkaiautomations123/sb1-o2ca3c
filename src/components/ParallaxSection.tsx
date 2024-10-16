import React, { useRef, useEffect } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.pageYOffset
        const sectionPosition = sectionRef.current.offsetTop
        const distance = scrollPosition - sectionPosition
        const parallaxEffect = distance * 0.5 // Adjust this value to control the parallax intensity
        sectionRef.current.style.backgroundPositionY = `${parallaxEffect}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={sectionRef} 
      className="relative bg-fixed bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?technology")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection