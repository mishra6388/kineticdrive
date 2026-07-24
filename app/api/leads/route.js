import { NextResponse } from 'next/server';
import { supabaseAdmin as supabase } from '@/lib/supabaseAdmin';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      website_type,
      budget,
      requirements,
      source,
      status = 'New',
      notes,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
    } = body || {};

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    // Email is optional (e.g. for quick forms)
    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: 'Phone is required.' }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client is not initialized.' }, { status: 500 });
    }

    // Prepare full payload
    const payload = {
      name,
      email: email || null,
      phone,
      company: company || null,
      service: service || null,
      website_type: website_type || null,
      budget: budget || null,
      requirements: requirements || null,
      source: source || null,
      status,
      notes: notes || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
      gclid: gclid || null,
    };

    // Server-side self-healing insert: retry if database is missing UTM columns and append values to notes
    let currentPayload = { ...payload };
    let error = null;
    let data = null;
    const maxRetries = 10;
    
    for (let i = 0; i < maxRetries; i++) {
      const res = await supabase.from('leads').insert([currentPayload]).select();
      if (!res.error) {
        error = null;
        data = res.data;
        break;
      }
      
      error = res.error;
      const match = error.message.match(/Could not find the '([^']+)' column/);
      if (match && match[1]) {
        const missingCol = match[1];
        const val = currentPayload[missingCol];
        if (val) {
          const notesPrefix = currentPayload.notes ? `${currentPayload.notes} | ` : '';
          currentPayload.notes = `${notesPrefix}${missingCol}: ${val}`;
        }
        delete currentPayload[missingCol];
      } else {
        break;
      }
    }

    if (error) {
      console.error('Database insertion error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const recipients = [
          'mishra.pm443@gmail.com',
          'garima.komal@gmail.com',
          'khushikinetic@gmail.com ',
        ];

        const subject = `New Lead Enquiry: ${service} (${name})`;
        const text = `
You have received a new project enquiry!

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}

Service Category: ${service}
Website/Service Type: ${website_type || 'Not provided'}
Monthly Budget: ${budget || 'Not provided'}

Project Requirements / Goals:
${requirements || 'Not provided'}

Source: ${source || 'Website'}
Status: ${status}
`;

        await resend.emails.send({
          from: process.env.RESEND_FROM || 'KineticDrive Leads <info@kineticdrive.in>',
          to: recipients,
          subject,
          text,
        });
      } catch (emailErr) {
        console.error('Failed to send email notification:', emailErr);
        // We do not fail the API request if only the email notification failed
      }
    } else {
      console.warn('Resend API key is not configured, skipping email notification.');
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
