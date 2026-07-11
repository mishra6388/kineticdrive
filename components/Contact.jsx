'use client';
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const locations = [
  {
    name: 'Prayagraj',
    address:
      '15/12A, First floor, Thornhill Road Dayanand Marg, Ashok Nagar, Prayagraj, India-211001',
    phone: '+91 9355520030',
    email: 'info@kineticdrive.in',
    hours: 'Mon–Sat: 10 AM – 6 PM',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114045.3729138432!2d81.8304065!3d25.4500478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbe25817eacd%3A0x190c675f6c7e7dc3!2sPrayagraj!5e0!3m2!1sen!2sin!4v1715854843044!5m2!1sen!2sin',
    mapsUrl:
      'https://www.google.co.in/maps/place/Prayagraj,+Uttar+Pradesh/@25.4500478,81.8304065,17z',
  },
  {
    name: 'Lucknow',
    address:
      'First Floor, Royal Plaza, F-101, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030',
    phone: '+91 9355520030',
    email: 'info@kineticdrive.in',
    hours: 'Mon–Sat: 10 AM – 6 PM',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.085438634438!2d81.0010055!3d26.7958814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be51cf4486c1b%3A0xc6609494650345ef!2sLucknow!5e0!3m2!1sen!2sin!4v1715855072056!5m2!1sen!2sin',
    mapsUrl:
      'https://www.google.co.in/maps/place/Lucknow,+Uttar+Pradesh/@26.7958814,81.0010055,17z',
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    getValue: (loc) => loc.address,
  },
  {
    icon: Phone,
    label: 'Phone',
    getValue: (loc) => loc.phone,
    isLink: (loc) => `tel:${loc.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    getValue: (loc) => loc.email,
    isLink: (loc) => `mailto:${loc.email}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    getValue: (loc) => loc.hours,
  },
];

export default function ContactAndLocations() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const loc = locations[activeLocation];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-20 -left-32 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 -right-32 h-96 w-96 rounded-full bg-amber-400/3 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Our team is ready to transform your ideas into reality. Reach out
            and let's build something great.
          </p>

          {/* Decorative line */}
          <div className="mt-8 mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
            <div className="h-px w-24 bg-amber-400/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ── Contact Form ── */}
          <div
            className={`relative rounded-2xl border border-white/7 bg-[#0F0F18] p-6 sm:p-8 transition-all duration-1000 delay-200 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Card top accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <div className="flex items-center gap-3 mb-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20">
                <Send size={18} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Send Us a Message
              </h3>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl animate-pulse" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <svg
                      className="h-8 w-8 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </p>
                <p className="text-sm text-gray-400 max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-white/7 bg-white/3 px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/5 focus:ring-2 focus:ring-amber-400/15 focus:shadow-lg focus:shadow-amber-400/5"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full rounded-xl border border-white/7 bg-white/3 px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/5 focus:ring-2 focus:ring-amber-400/15 focus:shadow-lg focus:shadow-amber-400/5"
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    required
                    className="w-full rounded-xl border border-white/7 bg-white/3 px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/5 focus:ring-2 focus:ring-amber-400/15 focus:shadow-lg focus:shadow-amber-400/5"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    className="w-full rounded-xl border border-white/7 bg-white/3 px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/5 focus:ring-2 focus:ring-amber-400/15 focus:shadow-lg focus:shadow-amber-400/5 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-4 font-bold text-black transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.99]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                </button>
              </form>
            )}
          </div>

          {/* ── Locations ── */}
          <div
            className={`flex flex-col gap-5 transition-all duration-1000 delay-400 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20">
                <MapPin size={18} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Our Locations
              </h3>
            </div>

            {/* Location tabs */}
            <div className="flex flex-wrap gap-2">
              {locations.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLocation(i)}
                  className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeLocation === i
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'border border-white/7 bg-white/4 text-gray-400 hover:border-amber-400/25 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {l.name} Office
                </button>
              ))}
            </div>

            {/* Info card */}
            <div className="relative flex-1 rounded-2xl border border-white/7 bg-[#0F0F18] p-6 sm:p-7">
              {/* Card top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

              <h4 className="mb-5 text-lg font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {loc.name} Office
              </h4>

              <div className="space-y-2">
                {contactInfo.map(({ icon: Icon, label, getValue, isLink }) => {
                  const val = getValue(loc);
                  const href = isLink ? isLink(loc) : null;
                  return (
                    <div
                      key={label}
                      className="flex items-start gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-white/3 group/info"
                    >
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/8 border border-amber-400/15 group-hover/info:bg-amber-400/15 group-hover/info:border-amber-400/25 transition-all duration-300">
                        <Icon
                          size={16}
                          className="text-amber-400/80 group-hover/info:text-amber-400 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-0.5">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-gray-300 hover:text-amber-300 transition-colors duration-300"
                          >
                            {val}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-300">{val}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map embed */}
              <div className="mt-5 h-44 overflow-hidden rounded-xl border border-white/6 sm:h-52 relative group/map">
                <iframe
                  src={loc.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} map`}
                />
                {/* Map overlay link */}
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-black/80 transition-all"
                >
                  Open in Maps
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.99]"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div
          className={`mt-12 relative rounded-2xl border border-white/7 bg-[#0F0F18] p-7 text-center sm:p-10 overflow-hidden transition-all duration-1000 delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-40">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
          </div>

          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-64 rounded-full bg-amber-400/5 blur-3xl" />

          <p className="relative text-base text-gray-400 font-medium">
            Need immediate assistance?
          </p>
          <a
            href="tel:+919355520030"
            className="relative mt-3 inline-flex items-center gap-3 text-2xl font-extrabold text-amber-300 hover:text-amber-200 transition-colors sm:text-4xl group/phone"
          >
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/20 group-hover/phone:bg-amber-400/15 transition-all">
              <Phone
                size={18}
                className="text-amber-400 animate-pulse"
              />
            </span>
            +91 9355520030
          </a>
          <p className="relative mt-3 text-sm text-gray-600">
            Available 24/7 for urgent support
          </p>
        </div>
      </div>
    </section>
  );
}