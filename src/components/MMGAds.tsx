'use client';

import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  staggerContainer,
  magneticHover,
  scaleIn
} from '@/lib/animations';

export default function MMGAd() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with red accent */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-red-600/20 via-red-500/15 to-red-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500/15 via-red-600/10 to-red-700/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-strong rounded-3xl border border-red-500/20 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Content */}
            <motion.div 
              variants={fadeInUp}
              className="p-12 lg:p-16 bg-gradient-to-br from-red-600/90 via-red-700/90 to-red-800/90 text-white relative"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-6xl">🏍️</div>
                <div className="absolute bottom-4 left-4 text-4xl">🔧</div>
              </div>

              <div className="relative z-10">
                <motion.div 
                  variants={scaleIn}
                  className="flex items-center mb-8"
                >
                  <div className="text-5xl mr-4">🏍️</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Micro Moto Garage
                    </h2>
                    <p className="text-red-100 text-lg">Professional Motorcycle Service</p>
                  </div>
                </motion.div>
                
                <motion.h3 
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-bold mb-6 text-yellow-300"
                >
                  🚀 Full Service Promo
                </motion.h3>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-red-100 mb-8 leading-relaxed"
                >
                  Complete checks, engine oil, brake tune, chain/sprocket inspection — done by pros near Dharubaaruge.
                </motion.p>
                
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                >
                  {[
                    { icon: "🔧", title: "Expert Service", desc: "Certified technicians" },
                    { icon: "📞", title: "Easy Booking", desc: "Call or visit us" },
                    { icon: "🚚", title: "Pickup/Drop", desc: "Free in Malé area" },
                    { icon: "⚡", title: "Quick Service", desc: "Same day completion" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-red-500/30 rounded-xl p-4 backdrop-blur-sm border border-red-400/20 hover:border-red-300/40 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-red-100">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="https://garage.micronet.mv"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-center hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    Visit MMG Site
                  </motion.a>
                  <motion.a
                    href="tel:+960-7779493"
                    variants={magneticHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="magnetic border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-white hover:text-red-600 transition-all duration-300"
                  >
                    Call 7779493
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right side - Visual */}
            <motion.div 
              variants={scaleIn}
              className="bg-gradient-to-br from-red-100/10 via-red-200/10 to-red-300/10 p-12 lg:p-16 flex items-center justify-center backdrop-blur-sm"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-8xl shadow-2xl mb-8 mx-auto glow-ice-blue"
                >
                  🏍️
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Professional Care for Your Bike
                </h4>
                <p className="text-gray-300 text-lg">
                  Located near Dharubaaruge, Malé
                </p>
                
                {/* Service highlights */}
                <div className="mt-8 space-y-3">
                  {["Full Service", "Oil Change", "Brake Service"].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-white/20 mx-1"
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}