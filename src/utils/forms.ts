export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: ContactFormData): void {
  if (!data.name.trim()) {
    throw new ValidationError('Name is required');
  }

  if (!data.email.trim()) {
    throw new ValidationError('Email is required');
  }

  if (!validateEmail(data.email)) {
    throw new ValidationError('Please enter a valid email address');
  }

  if (!data.message.trim()) {
    throw new ValidationError('Message is required');
  }

  if (data.message.length < 10) {
    throw new ValidationError('Message must be at least 10 characters long');
  }
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  try {
    validateContactForm(data);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit form');
    }

    return;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to submit form. Please try again later.');
  }
} 