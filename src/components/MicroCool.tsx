'use client';

import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  staggerContainer,
  scaleIn,
  magneticHover
} from '@/lib/animations';

const features = [
  "Experienced Staff",
  "Quick Turnaround",
  "Genuine Parts",
  "Warranty on Work"
];

export default function MicroCool() {
  return (
    <section id="micro-cool" className="py-24 px-4 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/15 via-cyan-500/10 to-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-sky-400/15 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* NEW Badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center mb-8"
          >
            <div className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl glow-ice-blue">
              <span className="mr-2">🚧</span>
              COMING SOON
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            Introducing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Micro Cool (MC)
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              We saw huge demand — and service gaps — in home appliance care. Micro Cool brings experienced technicians and honest pricing for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "❄️", service: "Air-Condition Servicing" },
                { icon: "🧊", service: "Refrigerator Servicing" },
                { icon: "👕", service: "Washing Machine Servicing" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-strong rounded-2xl p-6 border border-sky-400/20 hover:border-sky-400/40 transition-all duration-500 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    {item.service}
                  </h4>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 font-medium"
            >
              We fix it right, on time, with clear communication.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="https://wa.me/9607779493?text=Hello%21%20I%20need%20help%20with%20my%20home%20appliances.%20Can%20Micro%20Cool%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              variants={magneticHover}
              whileHover="hover"
              whileTap="tap"
              className="magnetic inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 gap-3 glow-ice-blue"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.703" />
              </svg>
              Book / Enquire on WhatsApp
            </motion.a>
            
            <motion.a
              href="tel:+960-9996210"
              variants={magneticHover}
              whileHover="hover"
              whileTap="tap"
              className="magnetic inline-flex items-center glass-strong border border-sky-500/30 hover:border-sky-400/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 9996210
            </motion.a>
          </motion.div>

          {/* Features Checklist */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center glass rounded-xl p-4 border border-white/10 hover:border-sky-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}