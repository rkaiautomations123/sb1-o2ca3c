import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Phone, Mail, Linkedin } from 'lucide-react'
import WhatsAppLogo from './WhatsAppLogo'

const Footer: React.FC = () => {
  const navigate = useNavigate()

  const handleQuickLinkClick = (path: string) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="https://storage.googleapis.com/bucket_rkai/Correct.png" 
                alt="RKAI Automations Logo" 
                className="h-20 md:h-24 w-auto mb-2"
              />
              <div className="text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold">
                  <span className="text-[#00FFFF]">RK</span>
                  <span className="text-[#00BFFF]">AI</span>
                </span>
                <span className="text-lg md:text-xl block">Automations</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleQuickLinkClick('/')} className="hover:text-blue-400 transition-colors duration-300">Home</button></li>
              <li><button onClick={() => handleQuickLinkClick('/services')} className="hover:text-blue-400 transition-colors duration-300">Services</button></li>
              <li><button onClick={() => handleQuickLinkClick('/about')} className="hover:text-blue-400 transition-colors duration-300">About Us</button></li>
              <li><button onClick={() => handleQuickLinkClick('/blog')} className="hover:text-blue-400 transition-colors duration-300">Cases</button></li>
              <li><button onClick={() => handleQuickLinkClick('/contact')} className="hover:text-blue-400 transition-colors duration-300">Contact</button></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-400" />
              <a href="tel:+31612674348" className="hover:text-blue-400 transition-colors duration-300">+31 6 12674348</a>
            </p>
            <p className="flex items-center mb-2">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              <a href="mailto:info@rkaiautomations.nl" className="hover:text-blue-400 transition-colors duration-300">info@rkaiautomations.nl</a>
            </p>
            <p className="flex items-center mb-2">
              <Linkedin className="w-5 h-5 mr-2 text-blue-400" />
              <a href="https://www.linkedin.com/company/rkaiautomations/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
            </p>
            <p className="flex items-center">
              <WhatsAppLogo className="w-5 h-5 mr-2" />
              <a href="https://wa.me/31612674348" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">WhatsApp</a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 RKAI Automations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer