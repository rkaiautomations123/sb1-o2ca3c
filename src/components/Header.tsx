import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${isSticky ? 'sticky-header' : 'bg-gray-900 bg-opacity-80'} shadow-md transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://storage.googleapis.com/bucket_rkai/Correct.png" 
              alt="RKAI Automations Logo" 
              className="h-12 w-auto mr-2"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold">
                <span className="text-[#00FFFF]">RK</span>
                <span className="text-[#00BFFF]">AI</span>
              </span>
              <span className="text-sm text-white">Automations</span>
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><button onClick={() => handleNavClick('/')} className="text-white hover:text-blue-400 transition-colors duration-300">Home</button></li>
              <li><button onClick={() => handleNavClick('/services')} className="text-white hover:text-blue-400 transition-colors duration-300">Services</button></li>
              <li><button onClick={() => handleNavClick('/about')} className="text-white hover:text-blue-400 transition-colors duration-300">About</button></li>
              <li><button onClick={() => handleNavClick('/blog')} className="text-white hover:text-blue-400 transition-colors duration-300">Cases</button></li>
              <li><button onClick={() => handleNavClick('/contact')} className="text-white hover:text-blue-400 transition-colors duration-300">Contact</button></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick('/')} className="text-white hover:text-blue-400 transition-colors duration-300">Home</button></li>
              <li><button onClick={() => handleNavClick('/services')} className="text-white hover:text-blue-400 transition-colors duration-300">Services</button></li>
              <li><button onClick={() => handleNavClick('/about')} className="text-white hover:text-blue-400 transition-colors duration-300">About</button></li>
              <li><button onClick={() => handleNavClick('/blog')} className="text-white hover:text-blue-400 transition-colors duration-300">Cases</button></li>
              <li><button onClick={() => handleNavClick('/contact')} className="text-white hover:text-blue-400 transition-colors duration-300">Contact</button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header