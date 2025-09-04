'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function ShopTeaser() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Shop Icon */}
          <motion.div
            variants={scaleIn}
            className="text-8xl mb-8"
          >
            🛒
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Online Shop
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Our online shop <span className="text-sky-400 font-semibold">baazaar.mv</span> is <span className="text-orange-400 font-bold">coming soon</span> — stay tuned!
          </motion.p>

          {/* Product Placeholder Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-xl p-4 border border-white/10 animate-pulse"
              >
                <div className="aspect-square bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mb-3"></div>
                <div className="h-3 bg-gray-600 rounded mb-2"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://baazaar.mv"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 gap-3 magnetic"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979s-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clipRule="evenodd" />
            </svg>
            Open baazaar.mv
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>

          {/* Note */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-500 mt-6"
          >
            Currently featuring selected items. More products coming soon!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}