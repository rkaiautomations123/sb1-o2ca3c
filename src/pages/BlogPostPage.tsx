import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft } from 'lucide-react'
import GmailLogo from '../components/GmailLogo'

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const blogPosts = {
    1: {
      id: 1,
      title: "Revolutionizing Email Management with Gmail Automations",
      date: "October 5, 2024",
      logo: <GmailLogo className="w-12 h-12 mr-4" />,
      content: `
        <p class="mb-6">In today's fast-paced business environment, efficient email management is crucial for productivity and success. Gmail automations offer a powerful solution to streamline your email workflow and save valuable time. Let's explore how these automations can transform your email management process.</p>

        <h2 class="text-2xl font-semibold mb-4 mt-8">Key Features of Gmail Automations:</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Automatic email categorization and labeling</li>
          <li>Smart filters for prioritizing important messages</li>
          <li>Customizable auto-responders for common inquiries</li>
          <li>Scheduled sending for optimal timing</li>
          <li>Integration with other productivity tools</li>
        </ul>

        <p class="mb-6">By leveraging these features, businesses can significantly reduce time spent on email management, allowing teams to focus on more critical tasks and strategic initiatives.</p>

        <h2 class="text-2xl font-semibold mb-4 mt-8">Benefits of Implementing Gmail Automations:</h2>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>Increased productivity and efficiency</li>
          <li>Improved response times to important emails</li>
          <li>Reduced email overload and stress</li>
          <li>Better organization and searchability of emails</li>
          <li>Enhanced collaboration through integrated tools</li>
        </ol>

        <p class="mb-6">Implementing Gmail automations can lead to significant improvements in your overall email management strategy, ultimately contributing to increased productivity and better communication within your organization.</p>
      `,
    },
    2: {
      id: 2,
      title: "Case Study: FindRealEstate – Transforming Lead Management with AI Automation",
      date: "October 15, 2024",
      logo: "https://storage.googleapis.com/bucket_rkai/FRE.png",
      content: `
        <p class="mb-6">FindRealEstate, a thriving real estate agency in Amsterdam, was overwhelmed by daily inquiries due to the housing shortage in the Netherlands. Agents were inundated with WhatsApp messages and emails from potential buyers, leaving them little time to focus on closing deals.</p>

        <p class="mb-6">RKAI Automations stepped in to streamline their operations:</p>

        <ul class="list-none pl-6 mb-6 space-y-4">
          <li class="flex items-start">
            <span class="text-2xl mr-2">💬</span>
            <span><strong>Smart Onboarding:</strong> An intuitive WhatsApp bot now guides buyers to quickly input their preferences.</span>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-2">🏡</span>
            <span><strong>Effortless Listing Uploads:</strong> Agents can easily add new properties for rent or sale.</span>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-2">🔍</span>
            <span><strong>Automated Lead Matching:</strong> AI instantly matches buyer preferences with new listings.</span>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-2">📲</span>
            <span><strong>Seamless Communication:</strong> With one click, matched leads receive personalized notifications via their preferred channel—email or WhatsApp.</span>
          </li>
        </ul>

        <p class="mb-6">This AI-driven workflow didn't just make processes smoother—it saved FindRealEstate over 8 hours each week on administrative tasks. Agents could refocus on what truly matters: helping clients find their dream homes.</p>

        <p class="mb-6">Are you a real estate agency facing similar challenges? Imagine reclaiming those lost hours and boosting your efficiency. RKAI Automations can tailor these innovative solutions to fit your needs.</p>

        <p class="mb-6">And it's not just for real estate. These automations can revolutionize agencies across various industries, unlocking endless opportunities for lead conversion and operational excellence.</p>
      `,
    },
  }

  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-[#000428] to-[#004e92]">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <article className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg p-8">
          <header className="mb-8">
            <div className="flex flex-col items-center mb-4">
              {typeof post.logo=== typeof post.logo === 'string' ? (
                <img src={post.logo} alt="Company Logo" className="w-32 h-32 object-contain mb-4" />
              ) : (
                post.logo
              )}
              <h1 className="text-4xl font-bold text-white text-center">{post.title}</h1>
            </div>
            <div className="flex items-center justify-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
          </header>
          <div className="prose prose-invert max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      </div>
    </div>
  )
}

export default BlogPostPage