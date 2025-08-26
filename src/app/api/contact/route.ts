import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, reason } = await request.json()

    // Validate required fields
    if (!name || !email || !message || !reason) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email service is configured
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      console.warn('Email service not configured: Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
      return NextResponse.json(
        { message: 'Email service not configured. Please try again later.' },
        { status: 503 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'BES Website <noreply@besbristol.com>',
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `New Contact Form Submission: ${reason}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Role:</strong> ${company || 'Not specified'}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company/Role: ${company || 'Not specified'}
        Reason: ${reason}
        Message: ${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
} 