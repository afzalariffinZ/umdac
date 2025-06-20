import { NextResponse } from 'next/server'
import { ContactFormData, validateContactForm } from '@/utils/forms'

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()
    
    // Validate form data
    validateContactForm(data)

    // Here you would typically:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Integrate with your preferred backend service
    
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ 
      message: 'Message sent successfully' 
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
} 