'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  fadeInUp, 
  staggerContainer,
  scaleIn 
} from '@/lib/animations';

const stats = [
  { value: "10+ yrs", label: "Combined Experience" },
  { value: "Same-day", label: "Response Time" },
  { value: "Trusted", label: "by Maldivian Households" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="About MicroNET"
          subtitle="We build reliable IT and service experiences for the Maldives — from networks and CCTV to motorbike care and home-appliance servicing."
        />

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(56, 189, 248, 0.15)"
              }}
              className="glass-strong rounded-2xl p-8 text-center border border-sky-500/20 hover:border-sky-400/40 transition-all duration-500 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-3 group-hover:scale-110 group-hover:text-sky-300 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-lg group-hover:text-sky-100 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left: Company Logo & Info */}
          <motion.div
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={scaleIn}
              className="relative inline-block mb-12"
            >
              {/* MicroNET Logo */}
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-sky-400/20 flex items-center justify-center glow-ice-blue shadow-2xl p-8">
                <img
                  src="/images/MicroNETlogo.png"
                  alt="MicroNET Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Since 2018
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Comprehensive Technology Solutions Across the Maldives
            </h3>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                MicroNET is your trusted provider of comprehensive technology solutions
                across the Maldives. Our services span computer peripherals, CCTV installations, 
                network infrastructure design, and IT support for businesses and homes.
              </p>
              
              <p>
                We also operate <strong className="text-sky-400 font-semibold">Micro Moto Garage</strong>, 
                a dedicated service center for motorcycle repairs and maintenance, and our
                online retail shop serves customers nationwide with quality products.
              </p>
              
              <p>
                We also resell Apple products and SOPHOS cybersecurity 
                solutions, delivering quality hardware and software solutions tailored to 
                personal, educational, and enterprise needs.
              </p>
            </div>

            {/* Call to Action */}
            <motion.div
              variants={fadeInUp}
              className="pt-8"
            >
              <motion.a
                href="https://garage.micronet.mv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 gap-3 shadow-xl hover:shadow-2xl magnetic"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Visit Micro Moto Garage
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
