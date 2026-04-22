import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('[v0] Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const formData = await request.formData()

    // Extract form fields
    const subject = formData.get('subject')
    const deadline = formData.get('deadline')
    const pages = formData.get('pages')
    const sources = formData.get('sources')
    const formatting = formData.get('formatting')
    const description = formData.get('description')
    const name = formData.get('name')
    const email = formData.get('email')
    const totalCost = formData.get('totalCost')
    
    console.log('[v0] Academic writing request received:', { name, subject, pages })

    // Build email content
    const emailContent = `
New Academic Writing Request:

CLIENT INFORMATION
Name: ${name}
Email: ${email}

REQUEST DETAILS
Subject: ${subject}
Deadline: ${deadline}
Number of Pages: ${pages}
Cited Sources: ${sources}
Formatting Style: ${formatting}
Estimated Cost: $${totalCost}

ASSIGNMENT DESCRIPTION:
${description}

---
Files attached in separate transmission.
    `

    // Get attached files
    const files: { filename: string; content: Buffer }[] = []
    const fileList = formData.getAll('files')
    
    for (const file of fileList) {
      if (file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer())
        files.push({
          filename: file.name,
          content: buffer,
        })
      }
    }

    // Send email
    const mailResponse = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'houston@remotemindssolutions.com',
      replyTo: email,
      subject: `New Academic Writing Request - ${subject} (${pages} pages)`,
      text: emailContent,
      attachments: files,
    })
    
    console.log('[v0] Email sent to business:', mailResponse.messageId)

    // Also send confirmation to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Academic Writing Request',
      text: `Hi ${name},\n\nThank you for submitting your academic writing request. We've received your submission and will review it shortly.\n\nRequest Details:\n- Subject: ${subject}\n- Pages: ${pages}\n- Deadline: ${deadline}\n- Estimated Cost: $${totalCost}\n\nWe'll contact you soon via WhatsApp or email to confirm details and proceed.\n\nBest regards,\nRemote Minds Solutions\nWhatsApp: https://wa.me/18439657071\nEmail: houston@remotemindssolutions.com`,
    })
    
    console.log('[v0] Confirmation email sent to client')

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email submission error:', error)
    if (error instanceof Error) {
      console.error('[v0] Error message:', error.message)
      console.error('[v0] Error stack:', error.stack)
    }
    return NextResponse.json(
      { error: 'Failed to submit request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
