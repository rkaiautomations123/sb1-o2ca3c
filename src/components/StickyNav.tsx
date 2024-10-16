import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, Mail, Info, BookOpen, Phone } from 'lucide-react'

const StickyNav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">
              <Home className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
              <Info className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-white hover:text-blue-400 transition-colors">
              <BookOpen className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              <Phone className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default StickyNav