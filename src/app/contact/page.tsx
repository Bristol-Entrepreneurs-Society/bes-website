import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Mail, MapPin, Phone, Clock, MessageSquare, Users } from 'lucide-react'

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

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a message anytime',
    value: 'hello@besbristol.com',
    link: 'mailto:hello@besbristol.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Visit us on campus',
    value: 'University of Bristol, Bristol, BS8 1TH',
    link: 'https://maps.google.com/?q=University+of+Bristol',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'When we\'re available',
    value: 'Monday - Friday, 9:00 AM - 5:00 PM',
    link: null,
  },
  {
    icon: MessageSquare,
    title: 'Social Media',
    description: 'Follow us for updates',
    value: '@besbristol',
    link: 'https://instagram.com/besbristol',
  },
]

const faqs = [
  {
    question: 'How can I join BES?',
    answer: 'You can join BES by attending our events, becoming a member through Bristol SU, or reaching out to us directly. We welcome all University of Bristol students interested in entrepreneurship.',
  },
  {
    question: 'Do I need to be studying business to join?',
    answer: 'Not at all! BES is open to students from all academic backgrounds. Entrepreneurship is about innovation and problem-solving, which can come from any field of study.',
  },
  {
    question: 'How can I get involved with the committee?',
    answer: 'We typically recruit new committee members at the end of each academic year. Keep an eye on our social media and newsletter for announcements, or contact us directly to express your interest.',
  },
  {
    question: 'Can I host an event with BES?',
    answer: 'Absolutely! We love working with students who have ideas for events, workshops, or initiatives. Reach out to us with your proposal and we\'ll help make it happen.',
  },
  {
    question: 'How can companies partner with BES?',
    answer: 'We offer various partnership tiers for organizations interested in supporting student entrepreneurship. Contact us to learn more about our partnership opportunities and benefits.',
  },
]

export default function ContactPage() {
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
            <span className="text-slate-900 font-medium">Contact</span>
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
              Get in Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have a question, want to get involved, or interested in partnering with us? We'd love to hear from you!
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-ink mb-12 text-center">
              Ways to Reach Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Card className="p-6 h-full text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{method.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary hover:text-primary-dark font-medium transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-slate-700 font-medium">{method.value}</span>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <ContactForm />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-ink mb-12 text-center">
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-ink mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Additional Info */}
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-ink mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're a student looking to develop entrepreneurial skills, a professional wanting to share expertise, 
                or an organization interested in supporting innovation, there's a place for you in the BES community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-colors"
                >
                  View Events
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-2xl font-medium hover:bg-slate-50 transition-colors"
                >
                  Partnership Opportunities
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 