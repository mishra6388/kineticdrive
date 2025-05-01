"use client";

import React, { useState, useEffect } from "react";

function Contact() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    form: false,
    info: false,
    map: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "form", "info", "map"];

      sections.forEach((section) => {
        const element = document.getElementById(`contact-${section}-section`);
        if (!element) return;

        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible((prev) => ({ ...prev, [section]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section id="contact-hero-section" className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.hero ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              We're excited to hear about your project. Let's discuss how Kinetic Drive can help bring your vision to life.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div id="contact-form-section" className="w-full lg:w-2/3">
            <div
              className={`transition-all duration-1000 ${
                isVisible.form ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-8 rounded-full"></div>

              {formSubmitted ? (
                <div className="bg-amber-400/20 border border-amber-400/50 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-2">Thank you for reaching out!</h3>
                  <p>We've received your message and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border ${
                          formErrors.name ? "border-red-500" : "border-gray-700"
                        } rounded-lg focus:ring-2 focus:ring-amber-400/50 text-white`}
                        placeholder="Your name"
                      />
                      {formErrors.name && <p className="mt-2 text-sm text-red-500">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border ${
                          formErrors.email ? "border-red-500" : "border-gray-700"
                        } rounded-lg focus:ring-2 focus:ring-amber-400/50 text-white`}
                        placeholder="Your email"
                      />
                      {formErrors.email && <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        formErrors.message ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:ring-2 focus:ring-amber-400/50 text-white`}
                      placeholder="Tell us about your project"
                    ></textarea>
                    {formErrors.message && <p className="mt-2 text-sm text-red-500">{formErrors.message}</p>}
                  </div>

                  <button type="submit" className="px-8 py-3 bg-amber-500 text-white font-medium rounded-lg">
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
