'use client';
import { Phone, Mail, MapPin, Clock, Code, Laptop } from 'lucide-react';
import { useState } from 'react';

export default function ContactAndLocations() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const locations = [
    {
      name: 'Prayagraj Office',
      address: '15/12A, First floor, Thornhill Road Dayanand Marg, Ashok Nagar, Prayagraj, India-211001',
      phone: '+91 9355520030',
      email: 'info@kineticdrive.in',
      hours: 'Mon-Sat: 10AM-6PM',
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114045.3729138432!2d81.8304065!3d25.4500478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbe25817eacd%3A0x190c675f6c7e7dc3!2sPrayagraj!5e0!3m2!1sen!2sin!4v1715854843044!5m2!1sen!2sin',
      mapsUrl: 'https://www.google.co.in/maps/place/Prayagraj,+Uttar+Pradesh/@25.4500478,81.8304065,17z',
    },
    {
      name: 'Lucknow Office',
      address: 'First Floor, Royal Plaza, F-101, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030',
      phone: '+91 9355520030',
      email: 'info@kineticdrive.in',
      hours: 'Mon-Sat: 10AM-6PM',
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.085438634438!2d81.0010055!3d26.7958814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be51cf4486c1b%3A0xc6609494650345ef!2sLucknow!5e0!3m2!1sen!2sin!4v1715855072056!5m2!1sen!2sin',
      mapsUrl: 'https://www.google.co.in/maps/place/Lucknow,+Uttar+Pradesh/@26.7958814,81.0010055,17z',
    },
    // {
    //   name: 'Haridwar Branch',
    //   address: 'Uttarakhand W3HR+3Q5 Haridwar, Uttarakhand',
    //   phone: '+91 9355520030',
    //   email: 'info@kineticdrive.in',
    //   hours: 'Mon-Sat: 10AM-6PM',
    //   embedUrl:
    //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2247803608716!2d78.0894203!3d29.9276314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU1JzM5LjUiTiA3OMKwMDUnMzEuMiJF!5e0!3m2!1sen!2sin!4v1715855178590!5m2!1sen!2sin',
    //   mapsUrl: 'https://www.google.com/maps/place/29%C2%B055\'39.5%22N+78%C2%B005\'31.2%22E/@29.9276314,78.0894203,17z',
    // },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Laptop className="w-10 h-10 text-amber-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Let's build innovative software solutions together. Our team of experts is ready to transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-slate-700">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold text-amber-400">Send Us a Message</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-slate-900/80 border border-slate-600 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-slate-900/80 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-slate-900/80 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                  placeholder="Project Inquiry / Consultation"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-3 rounded-md bg-slate-900/80 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Our Locations</h3>
            <div className="mb-6 flex overflow-x-auto py-2 space-x-2">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeLocation === index
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold shadow-lg'
                      : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-600'
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-4">{locations[activeLocation].name}</h4>
              <div className="space-y-4">
                <div className="flex items-start hover:bg-slate-700/30 p-2 rounded transition-colors">
                  <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{locations[activeLocation].address}</p>
                </div>
                <div className="flex items-start hover:bg-slate-700/30 p-2 rounded transition-colors">
                  <Phone className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <a href={`tel:${locations[activeLocation].phone}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                    {locations[activeLocation].phone}
                  </a>
                </div>
                <div className="flex items-start hover:bg-slate-700/30 p-2 rounded transition-colors">
                  <Mail className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <a href={`mailto:${locations[activeLocation].email}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                    {locations[activeLocation].email}
                  </a>
                </div>
                <div className="flex items-start hover:bg-slate-700/30 p-2 rounded transition-colors">
                  <Clock className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{locations[activeLocation].hours}</p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-6 h-60 rounded-md overflow-hidden shadow-lg border border-slate-600">
                <iframe
                  src={locations[activeLocation].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Get Directions Button */}
              <a
                href={locations[activeLocation].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 block text-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
          <p className="text-xl text-gray-300">Need immediate technical assistance?</p>
          <h4 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mt-2">
            Call our 24/7 Support: +91 9355520030
          </h4>
        </div>
      </div>
    </section>
  );
}