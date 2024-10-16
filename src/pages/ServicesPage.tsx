import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageSquare, Clock, ArrowRight, Search, Code, Zap, RefreshCw } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000428] to-[#004e92] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-5xl font-bold mb-8 text-center">Services</h1>
        
        <section ref={(el) => (sectionRefs.current[0] = el)} className="mb-16 opacity-0 transition-all duration-1000 ease-out transform translate-y-10">
          <p className="text-lg text-center max-w-3xl mx-auto">
            Does your company spend too much time on repetitive tasks or struggle with inefficiencies in daily operations? RKAI Automations focuses on transforming these challenges by delivering AI solutions designed to streamline processes and enhance productivity. By implementing innovative, easy-to-deploy automation tools, operations can be optimized, allowing businesses to focus on what truly matters.
          </p>
        </section>
        
        <section ref={(el) => (sectionRefs.current[1] = el)} className="mb-20 opacity-0 transition-all duration-1000 ease-out transform translate-y-10">
          <h2 className="text-3xl font-bold mb-8 text-center">The Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <Search className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Discovering Key Needs</h3>
              <p>The first step involves a thorough assessment of the business's unique automation and AI improvement requirements.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <Code className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tailored R&D</h3>
              <p>A focused R&D process is then carried out to develop a solution specifically designed to suit the business's operational structure and challenges.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Building & Implementing</h3>
              <p>Custom AI tools and automations are developed and seamlessly integrated into existing processes for optimal efficiency.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <RefreshCw className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Continuous Development</h3>
              <p>The tools are continuously refined and developed to ensure the business remains future-proof and fully optimized for ongoing success.</p>
            </div>
          </div>
        </section>

        <div className="text-center mb-20">
          <Link to="/contact" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center hover:bg-blue-600 transition-colors">
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <section ref={(el) => (sectionRefs.current[2] = el)} className="opacity-0 transition-all duration-1000 ease-out transform translate-y-10">
          <h2 className="text-3xl font-bold mb-8 text-center">AI-Powered Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Gmail Automations</h3>
              <p>Streamline email communications with AI-powered automations. Increase productivity and response times.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <MessageSquare className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">WhatsApp Chatbots</h3>
              <p>Engage customers 24/7 with intelligent WhatsApp chatbots. Improve customer service and sales.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Task Automations</h3>
              <p>Revolutionize workflow with smart AI-driven automations. Say goodbye to repetitive tasks and hello to enhanced productivity.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicesPage