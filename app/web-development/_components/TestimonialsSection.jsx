'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    company: 'MedCare Hospital, Lucknow',
    role: 'Managing Director',
    review:
      "KineticDrive completely transformed our hospital's online presence. The website they built is not just beautiful — it's generating real patient inquiries every day. Professional team, on-time delivery, and outstanding post-launch support.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
  },
  {
    name: 'Priya Verma',
    company: 'SwiftCabs India, Delhi',
    role: 'CEO & Founder',
    review:
      'We needed a complex cab booking platform with real-time features. KineticDrive delivered exactly what we envisioned and more — within the agreed timeline and budget. The platform handles thousands of bookings daily without a glitch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
  },
  {
    name: 'Amit Gupta',
    company: 'Sunrise Public School, Kanpur',
    role: 'Principal',
    review:
      'Our school ERP portal has made administration incredibly efficient. Parents love the transparency, teachers love the ease of use, and we love the reduced paperwork. The team at KineticDrive truly understood our requirements.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
  },
  {
    name: 'Sneha Patel',
    company: 'Spice Garden Restaurant, Mumbai',
    role: 'Owner',
    review:
      'Since launching our new website, our online orders have increased by 300%. The design is gorgeous, the ordering system is seamless, and our customers constantly compliment the experience. Worth every rupee!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop',
  },
  {
    name: 'Mohammed Ali',
    company: 'GreenHope NGO, Hyderabad',
    role: 'Executive Director',
    review:
      'KineticDrive built us a website that truly represents our mission. Donations have increased significantly since launch, and our online visibility has never been better. They treated our project with as much care as a commercial client.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=120&fit=crop',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </MotionWrapper>

        {/* Slider card */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/6 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-amber-400/20">
            {/* Quote icon */}
            <Quote className="h-10 w-10 text-amber-400/20 mb-6" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stars */}
                <div className="mb-5">
                  <StarRating count={t.rating} />
                </div>

                {/* Review */}
                <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-8">
                  "{t.review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-14 w-14 rounded-2xl object-cover border border-white/10 shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-white text-base">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                    <p className="text-sm text-amber-400/80 font-bold mt-0.5">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-gray-400 transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-400/8 hover:text-amber-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? 'w-6 h-2 bg-amber-400'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-gray-400 transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-400/8 hover:text-amber-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
