'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const projects = [
  {
    title: 'Lucknow Homes',
    type: 'React Native · Firebase',
    desc: 'A real estate discovery app for Lucknow — browse verified property listings, connect with agents, and schedule property visits directly from your phone.',
    color: 'from-amber-400 to-orange-500',
    tags: ['Real Estate', 'React Native', 'Firebase'],
    image: '/app/lucknowhomes.jpeg',
    link: 'https://play.google.com/store/apps/details?id=com.lucknowhomes.realestate.v1',
    badge: 'Live on Play Store',
  },
  {
    title: 'EasyGo Cabs Booking',
    type: 'FlutterFlow · Firebase',
    desc: 'On-demand cab booking app with real-time driver tracking, fare estimation, ride history, and seamless booking flow built with FlutterFlow.',
    color: 'from-yellow-400 to-amber-500',
    tags: ['Cab Booking', 'FlutterFlow', 'Firebase'],
    image: null,
    link: 'https://play.google.com/store/apps/details?id=com.mycompany.easygocabsbooking',
    badge: 'Live on Play Store',
  },
  // {
  //   title: 'Healthcare Booking App',
  //   type: 'iOS Native · Swift',
  //   desc: 'HIPAA-compliant medical app allowing patients to book appointments, consult via video call, and access health records on the go.',
  //   color: 'from-sky-400 to-blue-500',
  //   tags: ['Healthcare', 'Swift', 'WebRTC'],
  //   image: null,
  //   link: null,
  //   badge: null,
  // },
  // {
  //   title: 'Fintech Wallet App',
  //   type: 'Android Native · Kotlin',
  //   desc: 'Secure digital wallet with QR payments, transaction history, and biometric authentication built for high-security environments.',
  //   color: 'from-violet-400 to-purple-500',
  //   tags: ['Fintech', 'Kotlin', 'Security'],
  //   image: null,
  //   link: null,
  //   badge: null,
  // },
  // {
  //   title: 'Food Delivery App',
  //   type: 'Flutter · Firebase',
  //   desc: 'Real-time order tracking, restaurant menus, and payment integration built with a beautiful cross-platform Flutter UI.',
  //   color: 'from-emerald-400 to-teal-500',
  //   tags: ['Food Tech', 'Flutter', 'Maps API'],
  //   image: null,
  //   link: null,
  //   badge: null,
  // },
  // {
  //   title: 'E-Commerce App',
  //   type: 'React Native · Node.js',
  //   desc: 'A full-featured mobile storefront with smooth animations, cart management, and secure checkout via Stripe.',
  //   color: 'from-rose-400 to-pink-500',
  //   tags: ['E-Commerce', 'React Native', 'Node.js'],
  //   image: null,
  //   link: null,
  //   badge: null,
  // },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/3 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real apps, real impact. Here's a glimpse of mobile experiences we've built for our clients.
          </p>
        </MotionWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col h-full rounded-2xl bg-[#050508] border border-white/8 overflow-hidden"
              >
                {/* Image / Preview area */}
                <div className="relative h-52 w-full overflow-hidden bg-[#0C0C18] flex-shrink-0">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-black/20" />
                    </>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.13] group-hover:opacity-[0.22] transition-opacity duration-500`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${project.color} shadow-2xl flex items-center justify-center opacity-40`}>
                          <span className="text-2xl">📱</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Live badge */}
                  {project.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 border border-amber-400/40 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-black font-bold text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                        <Play className="h-4 w-4 fill-current" />
                        View on Play Store
                      </span>
                    </a>
                  ) : (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        View Details <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] font-bold uppercase tracking-wider text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-400/80 font-mono mb-3">{project.type}</p>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.desc}</p>

                  {/* Bottom CTA */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors duration-200 group/link"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      View on Play Store
                      <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                      Case Study Available on Request
                    </div>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>

        <MotionWrapper className="text-center mt-12" delay={0.2}>
          <a
            href="#hero-form"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/8 px-8 py-4 text-sm font-bold text-amber-300 transition-all duration-300 hover:bg-amber-400/15 hover:border-amber-400/50 hover:text-amber-200"
          >
            Discuss Your App Idea →
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
