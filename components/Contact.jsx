'use client';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    name: 'Prayagraj',
    address: '15/12A, First floor, Thornhill Road Dayanand Marg, Ashok Nagar, Prayagraj, India-211001',
    phone: '+91 9355520030',
    email: 'info@kineticdrive.in',
    hours: 'Mon–Sat: 10 AM – 6 PM',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114045.3729138432!2d81.8304065!3d25.4500478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbe25817eacd%3A0x190c675f6c7e7dc3!2sPrayagraj!5e0!3m2!1sen!2sin!4v1715854843044!5m2!1sen!2sin',
    mapsUrl: 'https://www.google.co.in/maps/place/Prayagraj,+Uttar+Pradesh/@25.4500478,81.8304065,17z',
  },
  {
    name: 'Lucknow',
    address: 'First Floor, Royal Plaza, F-101, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030',
    phone: '+91 9355520030',
    email: 'info@kineticdrive.in',
    hours: 'Mon–Sat: 10 AM – 6 PM',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.085438634438!2d81.0010055!3d26.7958814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be51cf4486c1b%3A0xc6609494650345ef!2sLucknow!5e0!3m2!1sen!2sin!4v1715855072056!5m2!1sen!2sin',
    mapsUrl: 'https://www.google.co.in/maps/place/Lucknow,+Uttar+Pradesh/@26.7958814,81.0010055,17z',
  },
];

const contactInfo = [
  { icon: MapPin, label: 'Address', getValue: (loc) => loc.address },
  { icon: Phone, label: 'Phone', getValue: (loc) => loc.phone, isLink: (loc) => `tel:${loc.phone}` },
  { icon: Mail, label: 'Email', getValue: (loc) => loc.email, isLink: (loc) => `mailto:${loc.email}` },
  { icon: Clock, label: 'Hours', getValue: (loc) => loc.hours },
];

export default function ContactAndLocations() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const loc = locations[activeLocation];

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-amber-500/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-400/4 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Our team is ready to transform your ideas into reality. Reach out and let's build something great.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* ── Contact Form ── */}
          <div className="rounded-2xl border border-white/7 bg-[#0F0F18] p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-amber-400 sm:text-2xl">Send Us a Message</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/25">
                  <svg className="h-7 w-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white">Message sent!</p>
                <p className="text-sm text-gray-400">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text" id="name" value={formData.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/7 bg-white/4 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">Your Email</label>
                    <input
                      type="email" id="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/7 bg-white/4 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text" id="subject" value={formData.subject} onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    className="w-full rounded-xl border border-white/7 bg-white/4 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message" value={formData.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border border-white/7 bg-white/4 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3.5 font-bold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── Locations ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-amber-400 sm:text-2xl">Our Locations</h3>

            {/* Location tabs — wrap on mobile */}
            <div className="flex flex-wrap gap-2">
              {locations.map((l, i) => (
                <button key={i} onClick={() => setActiveLocation(i)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    activeLocation === i
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'border border-white/7 bg-white/5 text-gray-300 hover:border-amber-400/25 hover:text-white'
                  }`}
                >
                  {l.name} Office
                </button>
              ))}
            </div>

            {/* Info card */}
            <div className="flex-1 rounded-2xl border border-white/7 bg-[#0F0F18] p-6">
              <h4 className="mb-4 text-lg font-bold text-white">{loc.name} Office</h4>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, getValue, isLink }) => {
                  const val = getValue(loc);
                  const href = isLink ? isLink(loc) : null;
                  return (
                    <div key={label} className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/3">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/10">
                        <Icon size={15} className="text-amber-400" />
                      </div>
                      {href ? (
                        <a href={href} className="text-sm text-gray-400 hover:text-amber-300 transition-colors">{val}</a>
                      ) : (
                        <p className="text-sm text-gray-400">{val}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Map embed */}
              <div className="mt-5 h-48 overflow-hidden rounded-xl border border-white/6 sm:h-56">
                <iframe
                  src={loc.embedUrl}
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} map`}
                />
              </div>

              <a
                href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-2.5 text-sm font-bold text-black transition-all hover:brightness-110"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-10 rounded-2xl border border-white/7 bg-[#0F0F18] p-6 text-center sm:p-8">
          <p className="text-base text-gray-400">Need immediate assistance?</p>
          <a
            href="tel:+919355520030"
            className="mt-2 inline-block text-2xl font-bold text-amber-300 hover:text-amber-200 transition-colors sm:text-3xl"
          >
            +91 9355520030
          </a>
          <p className="mt-1 text-sm text-gray-600">Available 24/7 for urgent support</p>
        </div>
      </div>
    </section>
  );
}