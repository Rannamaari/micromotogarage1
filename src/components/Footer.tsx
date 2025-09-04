'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900/50 to-black py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-sky-400/20 rounded-2xl flex items-center justify-center glow-ice-blue p-2">
                  <img
                    src="/images/MicroNETlogo.png"
                    alt="MicroNET Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">MicroNET</h3>
                  <p className="text-sky-400 text-lg">Tech that works, Service that cares</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md text-lg">
                Your trusted technology partner in the Maldives. We provide comprehensive 
                IT solutions, motorcycle services, and home appliance care to homes and businesses 
                across the nation.
              </p>
              
              <div className="flex gap-4">
                {[
                  { href: "tel:+960-7779493", icon: "📞", title: "Call us", bg: "from-blue-600 to-blue-700" },
                  { href: "mailto:moto@micronet.mv", icon: "📧", title: "Email us", bg: "from-purple-600 to-purple-700" },
                  { href: "https://wa.me/9607779493", icon: "💬", title: "WhatsApp", bg: "from-green-600 to-green-700", external: true },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${contact.bg} p-4 rounded-xl transition-all duration-300 text-xl hover:shadow-xl`}
                    title={contact.title}
                  >
                    {contact.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-2xl font-bold mb-8 text-white">Our Services</h4>
              <ul className="space-y-4 text-gray-300">
                {[
                  { label: "🏍️ Micro Moto Garage", href: "https://garage.micronet.mv", external: true },
                  { label: "❄️ Micro Cool (NEW)", href: "#micro-cool" },
                  { label: "🌐 Networking Solutions", href: "#services" },
                  { label: "📷 CCTV Installation", href: "#services" },
                  { label: "🛠️ IT Support", href: "#services" },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    className="transition-transform duration-200"
                  >
                    <a
                      href={service.href}
                      target={service.external ? "_blank" : undefined}
                      rel={service.external ? "noopener noreferrer" : undefined}
                      className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
                      onClick={!service.external ? (e) => {
                        e.preventDefault();
                        const element = document.getElementById(service.href.replace('#', ''));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } : undefined}
                    >
                      {service.label}
                      {service.external && <span className="text-xs opacity-60">↗</span>}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-2xl font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-300">
                {[
                  { label: "🏠 Home", href: "#home" },
                  { label: "🛒 baazaar.mv", href: "https://baazaar.mv", external: true },
                  { label: "📞 Contact Us", href: "#contact" },
                  { label: "ℹ️ About Us", href: "#about" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    className="transition-transform duration-200"
                  >
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
                      onClick={!link.external ? (e) => {
                        e.preventDefault();
                        const element = document.getElementById(link.href.replace('#', ''));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } : undefined}
                    >
                      {link.label}
                      {link.external && <span className="text-xs opacity-60">↗</span>}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Location & Hours */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-800 pt-16 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-strong rounded-2xl p-8 border border-sky-500/20">
                <h5 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  Location
                </h5>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Near Dharubaaruge<br />
                  Malé 20026, Maldives
                </p>
              </div>
              
              <div className="glass-strong rounded-2xl p-8 border border-sky-500/20">
                <h5 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-2xl">🕒</span>
                  Contact Hours
                </h5>
                <div className="text-gray-300 space-y-2">
                  <p>Monday - Thursday: 8:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  <p className="text-red-400 font-semibold">Friday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Bar */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-gray-400 text-lg">
              © 2025 MicroNET Maldives. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8 text-gray-400">
              <span className="text-sm">Built for the Maldivian community</span>
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sm">🇲🇻</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
