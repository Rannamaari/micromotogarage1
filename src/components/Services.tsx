'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  fadeInUp, 
  staggerContainer,
  cardHover
} from '@/lib/animations';

const services = [
  { 
    name: "IT & Networking", 
    icon: "🌐",
    description: "Networks, CCTV, Apple & SOPHOS reselling",
    features: ["Network Setup", "CCTV Installation", "Apple Products", "SOPHOS Security"]
  },
  { 
    name: "Micro Cool (MC)", 
    icon: "❄️",
    description: "Air-Condition • Refrigerator • Washing Machine Servicing",
    features: ["Air-Con Service", "Fridge Repair", "Washing Machine", "Home Visits"],
    isNew: true,
    comingSoon: true
  },
  { 
    name: "Micro Moto Garage", 
    icon: "🏍️",
    description: "Full service, oil change, brake service, pickup & delivery",
    features: ["Full Service", "Oil Change", "Brake Service", "Pickup/Drop"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive technology and service solutions tailored for the Maldivian market"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 25px 80px rgba(56, 189, 248, 0.15)"
              }}
              className="relative glass-strong rounded-2xl p-8 border border-white/10 hover:border-sky-400/30 transition-all duration-500 group cursor-pointer"
            >
              {/* NEW/Coming Soon Badge */}
              {service.isNew && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className={`absolute -top-3 -right-3 ${
                    service.comingSoon 
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-600' 
                      : 'bg-gradient-to-r from-emerald-500 to-green-600'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10`}
                >
                  {service.comingSoon ? 'COMING SOON' : 'NEW'}
                </motion.div>
              )}

              {/* Service Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                {service.name}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3 group-hover:bg-sky-300 transition-colors duration-300" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Need help choosing the right service for your needs?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="glass-strong px-8 py-4 rounded-2xl text-white font-semibold border border-sky-500/30 hover:border-sky-400/50 glow-ice-blue transition-all duration-300"
          >
            Get Expert Advice
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

