import React, { useEffect, useRef } from 'react'
import { Briefcase, Target, CheckCircle } from 'lucide-react'

const AboutUsPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-[#000428] to-[#004e92] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-5xl font-bold mb-16 text-center text-white">About RKAI Automations</h1>

        <div className="space-y-24">
          <section ref={(el) => (sectionRefs.current[0] = el)} className="opacity-0 transition-opacity duration-1000">
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md shadow-lg">
              <Briefcase className="w-16 h-16 text-blue-400 mb-4 md:mb-0 md:mr-8 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-blue-400">The Story</h2>
                <p className="text-gray-200">
                  RKAI Automations is founded by Robert Kuipers, a master's student in Data Science at Erasmus University Rotterdam. During an internship at KPMG in Ho Chi Minh City, Vietnam, Robert explored the potential of AI to transform business operations. This hands-on experience sparked the creation of RKAI Automations, with the aim of developing AI-driven solutions that make day-to-day operations more efficient for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative group overflow-hidden rounded-lg w-64 h-64">
                <img 
                  src="https://storage.googleapis.com/bucket_rkai/IMG_3879.jpeg" 
                  alt="Robert Kuipers" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
                  <p className="text-white text-lg font-semibold p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">Robert Kuipers</p>
                </div>
              </div>
            </div>
          </section>

          <section ref={(el) => (sectionRefs.current[1] = el)} className="opacity-0 transition-opacity duration-1000">
            <div className="flex flex-col md:flex-row-reverse items-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md shadow-lg">
              <Target className="w-16 h-16 text-yellow-400 mb-4 md:mb-0 md:ml-8 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-yellow-400">The Purpose</h2>
                <p className="text-gray-200">
                  RKAI Automations is created out of a passion for building cool AI automations that make businesses more efficient. Helping companies with innovative, modern tools to automate repetitive tasks and boost overall productivity is at the core of this mission.
                </p>
              </div>
            </div>
          </section>

          <section ref={(el) => (sectionRefs.current[2] = el)} className="opacity-0 transition-opacity duration-1000">
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md shadow-lg">
              <CheckCircle className="w-16 h-16 text-purple-400 mb-4 md:mb-0 md:mr-8 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-purple-400">What to Expect</h2>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                    <span><strong className="text-purple-400">Strong Collaboration:</strong> A productive partnership with clear communication ensures that the best possible outcome is delivered.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                    <span><strong className="text-purple-400">Tailored Solutions:</strong> Each solution is carefully designed to fit the specific needs of the business, ensuring it aligns perfectly with operational goals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                    <span><strong className="text-purple-400">Ongoing Support & Growth:</strong> Continued support and development are provided as the business evolves, ensuring long-term success and adaptability in a rapidly changing environment.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative group overflow-hidden rounded-lg w-96 h-64">
                <img 
                  src="https://storage.googleapis.com/bucket_rkai/Foto_HCM.JPG" 
                  alt="RKAI Team" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
                  <p className="text-white text-lg font-semibold p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">Ho Chi Minh City</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage