import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone, website } = body;

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: 'Please enter your phone number.' },
        { status: 400 }
      );
    }

    const subject = 'Free consultation request';
    const text = `
Phone: ${phone}
Website: ${website || 'Not provided'}

Source: Homepage lead capture form
`;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'KineticDrive <onboarding@resend.dev>',
        to: ['kcabdigital@gmail.com'],
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || 'Failed to send email.');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
