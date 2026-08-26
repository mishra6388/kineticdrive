import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, address, niche, facebook_url, instagram_url, youtube_url, youtube_followers } = body || {};

    if (!name || !phone || !address || !niche || !facebook_url || !instagram_url || !youtube_url || !youtube_followers) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    // Use service role key server-side to bypass RLS for inserts
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "";

    if (!supabaseUrl || !supabaseKey) {
       return NextResponse.json({ error: 'Database configuration missing.' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Insert into Supabase
    const { data: insertData, error: insertError } = await supabase
      .from('influencers')
      .insert([
        {
          name,
          phone,
          address,
          niche,
          facebook_url,
          instagram_url,
          youtube_url,
          youtube_followers,
          status: 'new'
        }
      ])
      .select();

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json({ error: insertError.message || 'Failed to register.' }, { status: 500 });
    }

    // 2. Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const recipients = [
          'mishra.pm443@gmail.com',
          // 'garima.komal@gmail.com',
        ];

        const subject = 'New Influencer Registration — KineticDrive';
        const text = `A new influencer has registered on KineticDrive.

Name: ${name}
Phone: ${phone}
Address: ${address}
Niche: ${niche}
Facebook: ${facebook_url}
Instagram: ${instagram_url}
YouTube: ${youtube_url}
YouTube Followers: ${youtube_followers}
Status: new
`;

        await resend.emails.send({
          from: process.env.RESEND_FROM || 'KineticDrive <info@kineticdrive.in>',
          to: recipients,
          subject,
          text,
        });
      } catch (emailError) {
        console.error('Email send error:', emailError);
        // We do not fail the registration if email fails
      }
    }

    return NextResponse.json({ success: true, data: insertData });
  } catch (error) {
    console.error('influencers route error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
