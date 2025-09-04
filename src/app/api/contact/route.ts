import { NextRequest, NextResponse } from 'next/server';
import { 
  isValidPhone, 
  validateHoneypot,
  checkRateLimit,
  getClientIP 
} from '@/lib/utils';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  company: string; // honeypot field
  captchaToken: string;
}

// Verify reCAPTCHA token with Google
async function verifyCaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('RECAPTCHA_SECRET_KEY not configured');
    return true; // Allow in development
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Create Telegram message
function createTelegramMessage(data: ContactFormData): string {
  const timestamp = new Date().toLocaleString('en-MV', { 
    timeZone: 'Indian/Maldives',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return `🚨 *New Contact Form Submission*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
💬 *Message:*
${data.message}

⏰ *Received:* ${timestamp} (Maldives Time)
🌐 *Source:* MicroNET Website`;
}

// Send message to Telegram
async function sendTelegramMessage(message: string): Promise<boolean> {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error('Telegram configuration missing');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      }),
    });

    const data = await response.json();
    
    if (!response.ok || !data.ok) {
      console.error('Telegram API error:', data);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);
    
    // Check rate limit (max 3 submissions per 15 minutes)
    const rateLimitCheck = checkRateLimit(clientIP, 3, 15 * 60 * 1000);
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many submissions. Please wait before sending another message.',
          rateLimitExceeded: true 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();
    const { name, phone, message, company, captchaToken } = body;

    // Validate required fields
    if (!name || !phone || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Validate honeypot (anti-bot protection)
    if (!validateHoneypot(company)) {
      return NextResponse.json(
        { success: false, message: 'Invalid submission detected.' },
        { status: 400 }
      );
    }

    // Validate input formats
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Name is too long.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid Maldivian phone number (7 digits).' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, message: 'Message is too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Send message via Telegram
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error('Telegram configuration missing');
      return NextResponse.json(
        { success: false, message: 'Messaging service not configured. Please contact us directly.' },
        { status: 500 }
      );
    }

    const telegramMessage = createTelegramMessage(body);
    
    const telegramSuccess = await sendTelegramMessage(telegramMessage);

    if (!telegramSuccess) {
      console.error('Telegram message send failed');
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}