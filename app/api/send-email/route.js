import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone, website, name } = body || {};

    if (!phone || !phone.toString().trim()) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Resend API key is not configured.' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const recipients = [
      'mishra.pm443@gmail.com',
      'garima.komal@gmail.com',
    ];

    const subject = 'Website: Free consultation / lead';
    const text = `Name: ${name || 'Not provided'}\nPhone: ${phone}\nWebsite: ${website || 'Not provided'}\nSource: Homepage lead form`;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'KineticDrive Leads <info@kineticdrive.in>',
      to: recipients,
      subject,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('send-email error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
  }
}
