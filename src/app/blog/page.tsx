import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Sample blog posts - in a real app, these would come from MDX files or a CMS
const blogPosts = [
  {
    id: '1',
    title: 'How to Build a Successful Startup While at University',
    excerpt: 'Discover the key strategies and resources available to university students who want to launch their own startup. Learn from successful student entrepreneurs and get practical tips for balancing academics with business.',
    author: 'Alex Thompson',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'Startup Tips',
    slug: 'how-to-build-successful-startup-university',
    featured: true,
  },
  {
    id: '2',
    title: 'The Future of Entrepreneurship in the Digital Age',
    excerpt: 'Explore how emerging technologies like AI, blockchain, and the metaverse are reshaping the entrepreneurial landscape and creating new opportunities for innovative businesses.',
    author: 'Maya Patel',
    date: '2024-11-15',
    readTime: '6 min read',
    category: 'Technology',
    slug: 'future-entrepreneurship-digital-age',
    featured: false,
  },
  {
    id: '3',
    title: 'Networking Strategies for Young Entrepreneurs',
    excerpt: 'Learn effective networking techniques that can help you build valuable connections, find mentors, and discover new opportunities in the entrepreneurial ecosystem.',
    author: 'Emma Davis',
    date: '2024-11-10',
    readTime: '5 min read',
    category: 'Networking',
    slug: 'networking-strategies-young-entrepreneurs',
    featured: false,
  },
  {
    id: '4',
    title: 'Funding Your Startup: A Complete Guide for Students',
    excerpt: 'From bootstrapping to venture capital, explore all the funding options available to student entrepreneurs and learn how to pitch your ideas effectively.',
    author: 'James Wilson',
    date: '2024-11-05',
    readTime: '10 min read',
    category: 'Funding',
    slug: 'funding-startup-complete-guide-students',
    featured: false,
  },
  {
    id: '5',
    title: 'Building a Strong Team: Lessons from Successful Startups',
    excerpt: 'Discover the essential elements of building and managing a high-performing team, from hiring the right people to creating a positive company culture.',
    author: 'Sophie Chen',
    date: '2024-10-30',
    readTime: '7 min read',
    category: 'Team Building',
    slug: 'building-strong-team-lessons-successful-startups',
    featured: false,
  },
  {
    id: '6',
    title: 'Marketing Strategies for Bootstrapped Startups',
    excerpt: 'Learn cost-effective marketing strategies that can help your startup grow without breaking the bank, from social media to content marketing and partnerships.',
    author: 'Omar Hassan',
    date: '2024-10-25',
    readTime: '6 min read',
    category: 'Marketing',
    slug: 'marketing-strategies-bootstrapped-startups',
    featured: false,
  },
]

const categories = ['All', 'Startup Tips', 'Technology', 'Networking', 'Funding', 'Team Building', 'Marketing']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Breadcrumbs */}
      <Section className="bg-background pt-8 pb-4">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Blog</span>
          </nav>
        </Container>
      </Section>

      {/* Header */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-ink mb-6">
              BES Blog
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Insights, tips, and stories from the entrepreneurial community at the University of Bristol. Learn from experts, get inspired, and stay updated with the latest trends.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section>
          <Container>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-ink mb-8 text-center">Featured Post</h2>
              <Card className="p-8 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Post Image Placeholder */}
                  <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">📝</span>
                      </div>
                      <p className="text-lg text-slate-600">Featured Post Image</p>
                    </div>
                  </div>

                  {/* Featured Post Content */}
                  <div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-GB', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-ink mb-4">{featuredPost.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <Button asChild size="lg">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Category Filter */}
      <Section>
        <Container>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="flex flex-col"
              >
                <Card className="p-6 h-full flex flex-col">
                  {/* Post Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-sm text-slate-500">Post Image</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-GB', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-ink mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-ink mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Get the latest entrepreneurial insights, event updates, and success stories delivered to your inbox.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 