"use client";

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function QuickLeadModal({ isOpen, onClose, source, utmParams, initialWebsiteUrl }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Google Ads');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setName('');
      setPhone('');
      setService('Google Ads');
      setErrorMsg('');
      setSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        service,
        source: source || 'Quick Lead Modal',
        requirements: initialWebsiteUrl ? `Website URL: ${initialWebsiteUrl}` : null,
        utm_source: utmParams?.utm_source || null,
        utm_medium: utmParams?.utm_medium || null,
        utm_campaign: utmParams?.utm_campaign || null,
        utm_term: utmParams?.utm_term || null,
        utm_content: utmParams?.utm_content || null,
        gclid: utmParams?.gclid || null,
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit lead.');
      }

      sessionStorage.setItem('kd_lead_submitted', 'true');
      setSuccess(true);
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Error submitting lead:', err);
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
      <div 
        className="relative w-full max-w-md bg-[#0F0F18]/95 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-amber-500/5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-amber-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-gray-400 text-sm">
              We have received your request. An expert will reach out to you shortly.
            </p>
            <p className="text-xs text-gray-500">Closing window...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                Quick Enquiry
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Get Free Consultation</h3>
              <p className="text-gray-400 text-sm mt-1">
                Tell us about your project and boost your conversions.
              </p>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-amber-500">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Phone Number <span className="text-amber-500">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Required Service
                </label>
                <select
                  id="modal-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="Google Ads">Google Ads</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="App Development">App Development</option>
                </select>
              </div>

              {initialWebsiteUrl && (
                <div className="text-xs text-gray-400 italic">
                  Website URL: {initialWebsiteUrl}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-3 px-4 rounded-lg transition-transform duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Request Callback</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
