'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import SectionHeader from './SectionHeader';
import { 
  fadeInUp, 
  staggerContainer,
  magneticHover
} from '@/lib/animations';

interface FormData {
  name: string;
  phone: string;
  message: string;
  company: string; // honeypot
}

export default function ContactLocation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
    company: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    if (formData.company) {
      // Honeypot detected - silently reject
      setErrorMessage('Submission failed. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '', company: '' });
        setCaptchaToken(null);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Contact & Location"
          subtitle="Get in touch with us for all your technology and service needs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass-strong rounded-2xl p-8 border border-sky-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {/* Phone Numbers */}
                  <motion.a
                    href="tel:+960-7779493"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic flex items-center gap-4 p-4 rounded-xl glass hover:border-sky-400/30 transition-all duration-300 group"
                  >
                    <div className="text-2xl">📱</div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                        Primary: 7779493
                      </div>
                      <div className="text-sm text-gray-400">Main service line</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+960-9996210"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic flex items-center gap-4 p-4 rounded-xl glass hover:border-sky-400/30 transition-all duration-300 group"
                  >
                    <div className="text-2xl">☎️</div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                        Secondary: 9996210
                      </div>
                      <div className="text-sm text-gray-400">Support line</div>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/9607779493"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 hover:border-green-400/40 transition-all duration-300 group"
                  >
                    <div className="text-2xl">💬</div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                        WhatsApp
                      </div>
                      <div className="text-sm text-gray-400">Quick messaging</div>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:moto@micronet.mv"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic flex items-center gap-4 p-4 rounded-xl glass hover:border-sky-400/30 transition-all duration-300 group"
                  >
                    <div className="text-2xl">📧</div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                        moto@micronet.mv
                      </div>
                      <div className="text-sm text-gray-400">Email support</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Location Info */}
              <motion.div
                variants={fadeInUp}
                className="glass-strong rounded-2xl p-8 border border-sky-500/20"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  Our Location
                </h4>
                <p className="text-gray-300 mb-4">
                  Micro Moto Garage, Malé — Maldives
                </p>
                <p className="text-sm text-gray-400">
                  Professional motorcycle service center in the heart of Malé
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="glass-strong rounded-2xl p-8 border border-sky-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400"
                >
                  ✅ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400"
                >
                  ❌ {errorMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-sky-400/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-sky-400/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-sky-400/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={handleCaptchaChange}
                    theme="dark"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                  variants={magneticHover}
                  whileHover={!isSubmitting ? "hover" : undefined}
                  whileTap={!isSubmitting ? "tap" : undefined}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 disabled:cursor-not-allowed magnetic"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeInUp}
              className="glass-strong rounded-2xl overflow-hidden border border-sky-500/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.70320016623566!2d73.51547925208867!3d4.170952480173003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7f70ec752915%3A0xa50f30954afb5a8e!2sMicro%20Moto%20Garage!5e0!3m2!1sen!2smv!4v1756971298330!5m2!1sen!2smv"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Micro Moto Garage - Professional Motorcycle Service in Malé, Maldives"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}