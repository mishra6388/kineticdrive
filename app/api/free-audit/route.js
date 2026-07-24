import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, website } = body || {};

    // Basic validation for mandatory fields
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    if (!phone || !phone.toString().trim()) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }

    // 1. Store in Supabase CRM (leads table)
    if (supabase) {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([
          {
            name,
            email,
            phone,
            website: website || null,
            source: 'Free Audit Landing Page',
          },
        ]);

      if (dbError) {
        console.error('Supabase insert error:', dbError);
        // We log the error but still try to send the email so the lead isn't lost
      }
    } else {
      console.warn('Supabase client not initialized, skipping CRM insert.');
    }

    // 2. Send Email
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Resend API key is not configured.' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const recipients = [
      'mishra.pm443@gmail.com',
      'garima.komal@gmail.com',
      'khushikinetic@gmail.com'
    ];

    const subject = 'New Free Audit Request (Landing Page)';
    const text = `
You have received a new request for a Free Business Web Audit!

Name: ${name}
Email: ${email}
Phone: ${phone}
Website: ${website || 'Not provided'}

Source: Google Ads Landing Page (/free-audit)
`;

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
    console.error('free-audit api error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error.' }, { status: 500 });
  }
}
