'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  className = '',
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mb-6 rounded-full mx-auto" />
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}