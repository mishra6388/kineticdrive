"use client"

import React, { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    team: false,
    journey: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'mission', 'team', 'journey'];
      
      sections.forEach(section => {
        const element = document.getElementById(`about-${section}-section`);
        if (!element) return;
        
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(prev => ({ ...prev, [section]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const teamMembers = [
    {
      name: "Garima Kushwaha",
      role: "Founder & CEO",
      bio: "Mechanical Engineering PhD with over 10 years of tech expertise, Dr. Garima leads Kinetic Drive's strategic vision.",
      image: "/images/garimaKD.jpg"
    },
    {
      name: "Shakti Kushwaha",
      role: "Chief Marketing Officer (CMO)",
      bio: "Strategic marketing expert driving brand visibility, client acquisition, and core business growth across all channels.",
      image: "/images/ShaktikD.jpeg"
    },
    {
      name: "Prashant Mishra",
      role: "Chief Technical Officer (CTO)",
      bio: "Technical leader architecting scalable, cutting-edge software solutions that ensure reliable and secure performance.",
      image: "/images/prashantKD.png"
    },
    {
      name: "Khushi Agarwal",
      role: "Full Stack Developer",
      bio: "Versatile developer engineering scalable frontend and backend systems, delivering robust and seamless digital solutions.",
      image: "/images/KhushikD.png"
    },
    {
      name: "Deeksha Singh",
      role: "Head of Client Success",
      bio: "Client advocate coordinating projects seamlessly to ensure every delivered solution exceeds our business expectations.",
      image: "/images/deekshaKD.png"
    },
    {
      name: "Ravindra Kushwaha",
      role: "Operations Manager",
      bio: "Operations expert streamlining daily workflows and team coordination to keep projects highly efficient and on schedule.",
      image: "/images/RavindraKD.jpeg"
    },
    {
      name: "Rishabh Singh",
      role: "Social Media Manager",
      bio: "Digital strategist building dynamic online communities through engaging content and consistent brand communication.",
      image: "/images/RishabhKD.jpeg"
    },
    {
      name: "Yashi Jaiswal",
      role: "Performance Marketing Specialist",
      bio: "Growth specialist managing data-driven advertising campaigns to maximize online visibility and generate quality leads.",
      image: "/images/YashiKD.jpeg"
    },
    {
      name: "Shaurya Gupta ",
      role: "Video Editor",
      bio: "Visual storyteller crafting polished, high-impact video content for digital campaigns to maximize audience engagement.",
      image: "/images/ShauryaKD.jpeg"
    },
    {
      name: "Abhishek Sahu",
      role: "Marketing Executive",
      bio: "Dynamic outreach specialist expanding brand reach through field engagement, promotions, and strategic client relations.",
      image: "/images/AbhishekKD.jpeg"
    },
    {
      name: "Anuj Sahu",
      role: "Video Editor",
      bio: "Creative editor transforming raw footage into engaging visual stories that strengthen brand identity and communication.",
      image: "/images/AnujKD.jpeg"
    },
    {
      name: "Neha Yadav",
      role: "Sales Executive",
      bio: "Dedicated support specialist addressing client inquiries promptly and nurturing relationships to ensure high retention.",
      image: "/images/NehaKD.jpeg"
    },
    {
      name: "Navyata Kesarwani",
      role: "Telecaller & Customer Support Executive",
      bio: "Proactive support professional ensuring seamless client communication, swift inquiry resolution, and strong follow-ups.",
      image: "/images/NavyataKD.jpeg"
    }
  ];

  const journeyMilestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "Kinetic Drive Software was established with a vision to transform digital experiences through innovative technology solutions."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a transformative mobile application that set the standard for our future work."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Doubled our team size and expanded our service offerings to include full-stack development and AI integration."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized with the Regional Innovation Award for our groundbreaking approach to software development."
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Expanded operations to serve clients across three continents with specialized solutions for diverse industries."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section id="about-hero-section" className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About <span className="text-amber-400">Kinetic Drive</span></h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              We're a passionate team of innovators dedicated to creating cutting-edge software solutions that drive businesses forward in the digital age.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Our Mission Section */}
      <section id="about-mission-section" className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-6 rounded-full"></div>
              <p className="text-gray-300 mb-6">
                At Kinetic Drive, we believe in harnessing the power of technology to solve real-world challenges. Our mission is to develop innovative, scalable, and user-centric digital solutions that empower businesses to thrive in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-300 mb-6">
                We're committed to excellence in every line of code we write, every design we create, and every interaction we have with our clients. By combining technical expertise with creative thinking, we deliver solutions that not only meet current needs but anticipate future opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-amber-300/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">Innovation</h3>
                  <p className="text-gray-400">We constantly explore emerging technologies to create forward-thinking solutions.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-amber-300/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">Quality</h3>
                  <p className="text-gray-400">We maintain the highest standards in our code, design, and client relationships.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-300/20 to-amber-500/20 rounded-lg transform rotate-3 blur-lg"></div>
                <div className="relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden aspect-video">
                  <img 
                    src="/images/aboutHero.png" 
                    alt="Our Mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about-team-section" className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.team ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the talented individuals who make up Kinetic Drive. Our diverse team combines expertise across development, design, and strategy.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
                  isVisible.team ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-75 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-5 relative z-10 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">{member.name}</h3>
                  <p className="text-[11px] font-semibold text-amber-500 uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-gray-300 text-xs leading-relaxed flex-grow">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="about-journey-section" className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.journey ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to where we are today, our growth has been driven by continuous innovation and a commitment to excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative mb-12 last:mb-0 transition-all duration-1000 ${
                  isVisible.journey ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {/* Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 w-5 h-5 rounded-full bg-amber-400 border-4 border-black transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-amber-300/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <span className="text-amber-400 text-lg font-semibold mr-3">{milestone.year}</span>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.journey ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do at Kinetic Drive, from how we build our products to how we engage with our clients.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible.journey ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg hover:shadow-amber-300/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-300">We embrace cutting-edge technologies and creative approaches to solve complex problems with elegant solutions.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg hover:shadow-amber-300/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence in Execution</h3>
              <p className="text-gray-300">We hold ourselves to the highest standards in everything we do, ensuring quality, reliability, and performance.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg hover:shadow-amber-300/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Partnership</h3>
              <p className="text-gray-300">We build long-term relationships with our clients, becoming trusted advisors in their digital journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;