'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, User, Building, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
  reason: string
}

interface FormErrors {
  [key: string]: string
}

const reasonOptions = [
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'speak', label: 'Speak at event' },
  { value: 'committee', label: 'Join committee' },
  { value: 'general', label: 'General inquiry' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    reason: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for contacting us'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '', reason: '' })
        setErrors({})
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setStatusMessage(errorData.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <Card className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-ink mb-2">Get in Touch</h2>
        <p className="text-slate-600">
          Have a question or want to get involved? We'd love to hear from you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.name ? 'border-red-300' : 'border-slate-300'
                }`}
                placeholder="Your full name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.email ? 'border-red-300' : 'border-slate-300'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company/Role */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company/Role (Optional)
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your company or role"
            />
          </div>
        </div>

        {/* Reason */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-2">
            Reason for Contacting Us *
          </label>
          <select
            id="reason"
            value={formData.reason}
            onChange={(e) => handleInputChange('reason', e.target.value)}
            className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.reason ? 'border-red-300' : 'border-slate-300'
            }`}
          >
            <option value="">Select a reason</option>
            {reasonOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.reason}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.message ? 'border-red-300' : 'border-slate-300'
              }`}
              placeholder="Tell us more about your inquiry..."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-2xl flex items-center ${
              submitStatus === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {statusMessage}
          </motion.div>
        )}
      </form>
    </Card>
  )
} 