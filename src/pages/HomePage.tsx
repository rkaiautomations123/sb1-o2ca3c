import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, MessageSquare, Clock, Zap, Users, Scale, Headphones } from 'lucide-react'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-blue-400">RKAI Automations</h1>
        <p className="text-xl sm:text-2xl mb-8 text-center">Automate. Innovate. Elevate.</p>
        <div className="text-center mb-12 sm:mb-16">
          <Link to="/contact" className="btn-book-demo inline-block">
            Book a Demo
          </Link>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-blue-400">AI Solutions Tailored for Your Business</h2>
        <p className="text-lg sm:text-xl mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          Clear, effective, and results-driven systems: RKAI Automations specializes
          in delivering AI solutions that upgrade business operations. These services will
          boost your business efficiency, streamline workflows, and help your business grow.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-400">Boost Your Efficiency with AI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Mail className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Gmail Automations</h3>
            <p className="text-sm sm:text-base">Streamline your email communications with AI-powered automations.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <MessageSquare className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">WhatsApp Chatbots</h3>
            <p className="text-sm sm:text-base">Engage your customers 24/7 with intelligent WhatsApp chatbots.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Clock className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Task Automations</h3>
            <p className="text-sm sm:text-base">Reduce time spent on repetitive tasks with smart AI-driven automations.</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-400">Why Choose RKAI Automations?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Zap className="w-12 h-12 mb-4 text-yellow-400" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Cutting-edge Technology</h3>
            <p className="text-sm sm:text-base">Solutions built on the latest breakthroughs in machine learning and natural language processing, ensuring you're always ahead of the curve.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Users className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Customized Solutions</h3>
            <p className="text-sm sm:text-base">Bespoke automations that align perfectly with your workflows, goals, and company culture. Your success is the blueprint.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Scale className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Scalable & Reliable</h3>
            <p className="text-sm sm:text-base">Robust and flexible automations adapt to your changing needs, ensuring consistent performance as you scale.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover-effect">
            <Headphones className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-sm sm:text-base">Ongoing support, continuous optimization, and regular updates. RKAI Automations is your long-term partner in the AI revolution.</p>
          </div>
        </div>

        <div className="text-center">
          <button onClick={handleGetStarted} className="btn-book-demo inline-block">Get Started Today</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage