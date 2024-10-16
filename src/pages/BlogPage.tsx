import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import GmailLogo from '../components/GmailLogo'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Email Management with Gmail Automations",
      date: "2024-10-05",
      excerpt: "Discover how Gmail automations can transform your email workflow and boost productivity.",
      logo: <GmailLogo className="w-16 h-16" />,
    },
  ]

  const businessCases = [
    {
      id: 2,
      title: "FindRealEstate – Transforming lead management with AI Automation",
      date: "2024-10-15",
      logo: "https://storage.googleapis.com/bucket_rkai/FRE.png",
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-[#000428] to-[#004e92]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">RKAI Automations Blog</h1>
        
        <div className="max-w-2xl mx-auto mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl mb-8">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {post.logo}
                  <h2 className="text-2xl font-bold ml-4 text-white">{post.title}</h2>
                </div>
                <div className="flex items-center text-blue-200 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <p className="text-blue-100 mb-6">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-white">Business Cases</h2>
        <div className="max-w-2xl mx-auto">
          {businessCases.map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img src={post.logo} alt="Company Logo" className="w-48 h-48 object-contain mb-6" />
                  <h2 className="text-2xl font-bold text-white text-center">{post.title}</h2>
                </div>
                <div className="flex items-center justify-center text-blue-200 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="text-center">
                  <Link to={`/blog/${post.id}`} className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage