'use client';

import { motion } from 'framer-motion';
import Particles from './Particles';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  magneticHover,
} from '@/lib/animations';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Aurora Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/20 via-blue-600/20 to-sky-500/10 rounded-full blur-3xl animate-[aurora_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 via-sky-400/15 to-blue-500/20 rounded-full blur-3xl animate-[aurora_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-sky-400/10 via-blue-700/15 to-sky-600/10 rounded-full blur-3xl animate-[aurora_30s_ease-in-out_infinite]" />
        
        {/* Particles */}
        <Particles particleCount={80} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Logo Section */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center mb-16"
        >
          <div className="relative p-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-sm border border-sky-400/30 shadow-2xl glow-ice-blue-strong flex items-center justify-center">
              <img
                src="/images/MicroNETlogo.png"
                alt="MicroNET Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-500/20 blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={fadeInUp} className="max-w-6xl mx-auto space-y-8 mb-16">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">MicroNET — Tech that works,</span>
            <br />
            <span className="text-sky-400 glow-ice-blue">
              Service that cares
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
          >
            IT solutions, Micro Moto Garage, and Micro Cool home-appliance servicing for Malé.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary CTA Button */}
          <motion.button
            variants={magneticHover}
            whileHover="hover"
            whileTap="tap"
            onClick={() => scrollToSection('contact')}
            className="magnetic bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl glow-ice-blue transition-all duration-300 min-w-[180px]"
          >
            Contact Us
          </motion.button>
          
          {/* Secondary Buttons - All Same Size */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="https://garage.micronet.mv"
              target="_blank"
              rel="noopener noreferrer"
              variants={magneticHover}
              whileHover="hover"
              whileTap="tap"
              className="magnetic bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-xl text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px] text-center"
            >
              🏍️ Micro Moto Garage
            </motion.a>
            
            <motion.button
              variants={magneticHover}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('micro-cool')}
              className="magnetic bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 px-6 py-3 rounded-xl text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px] text-center"
            >
              ❄️ Micro Cool
            </motion.button>
            
            <motion.a
              href="https://baazaar.mv"
              target="_blank"
              rel="noopener noreferrer"
              variants={magneticHover}
              whileHover="hover"
              whileTap="tap"
              className="magnetic glass-strong border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl text-white font-medium text-sm backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px] text-center"
            >
              🛒 baazaar.mv
            </motion.a>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: "🔧",
              title: "Expert Services",
              description: "Professional motorcycle maintenance and repair services with certified technicians"
            },
            {
              icon: "❄️",
              title: "Micro Cool (NEW)",
              description: "Air-conditioning, refrigerator, and washing machine servicing for your home"
            },
            {
              icon: "🌐",
              title: "IT Solutions",
              description: "Cutting-edge digital solutions and network infrastructure for modern businesses"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 60px rgba(56, 189, 248, 0.15)"
              }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-sky-500/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-white group-hover:text-sky-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
