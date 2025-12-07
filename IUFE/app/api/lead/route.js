import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, course, message, source } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send SMS confirmation

    // For demo purposes, we'll just log the data
    console.log('New lead received:', {
      name,
      email,
      phone,
      course,
      message,
      source,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    })

    // Simulate email sending (replace with actual email service)
    const emailData = {
      to: 'admissions@iufa-academy.com',
      subject: `New Course Inquiry - ${name}`,
      html: `
        <h2>New Course Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Interest:</strong> ${course || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <p><strong>Source:</strong> ${source || 'Website'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    // You would send the email here using your preferred service
    // await sendEmail(emailData)

    // Send auto-reply to user
    const autoReplyData = {
      to: email,
      subject: 'Thank you for your interest in IUFA Accounts Academy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14264A;">Thank you for your interest!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your inquiry about our accounting courses. We have received your application and our admissions team will contact you within 24 hours.</p>
          
          <div style="background: #F6F7F9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #14264A; margin-top: 0;">Your Application Details:</h3>
            <p><strong>Course Interest:</strong> ${course || 'General Inquiry'}</p>
            <p><strong>Contact Number:</strong> ${phone}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Call us at +91 98765 43210 for immediate assistance</li>
            <li>Visit our website for more course information</li>
            <li>Follow us on social media for updates and tips</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>IUFA Accounts Academy Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated message. Please do not reply to this email.
            For any queries, contact us at admissions@iufa-academy.com
          </p>
        </div>
      `
    }

    // You would send the auto-reply here
    // await sendEmail(autoReplyData)

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully! We will contact you within 24 hours.',
      data: {
        id: `lead_${Date.now()}`,
        name,
        email,
        course
      }
    })

  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'IUFA Accounts Academy Lead API',
    endpoints: {
      POST: '/api/lead - Submit new lead'
    },
    status: 'active'
  })
}
