import React, { useState } from 'react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('https://formspree.io/f/mbljjzvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      const responseData = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(responseData.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('There was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#000428] to-[#004e92] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Get in touch</h1>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-20 text-white"
                disabled={isSubmitting || isSubmitted}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-20 text-white"
                disabled={isSubmitting || isSubmitted}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-20 text-white"
                disabled={isSubmitting || isSubmitted}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors ${(isSubmitting || isSubmitted) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent' : 'Send Message'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {isSubmitted && <p className="text-green-500 mt-2">Thank you for your message. We will get back to you soon!</p>}
          </form>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex justify-center">
            <img 
              src="https://storage.googleapis.com/bucket_rkai/Correct.png" 
              alt="RKAI Automations Logo" 
              className="max-w-full h-auto md:max-w-xs"
            />
          </div>
        </div>
        
        {/* New Book an Appointment section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Book an Appointment</h2>
          <p className="text-lg text-gray-300 mb-6">Ready to discuss your automation needs? Schedule a meeting with us!</p>
          <a 
            href="https://calendar.app.google/g5FuScjMKHNKLwYs9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage