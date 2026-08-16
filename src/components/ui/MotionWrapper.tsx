'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function MotionWrapper({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: MotionWrapperProps) {
  // Use vertical y-axis animation only to prevent horizontal viewport overflow on mobile devices
  const getVariants = () => {
    switch (direction) {
      case 'down':
        return { initial: { opacity: 0, y: -25 }, animate: { opacity: 1, y: 0 } };
      case 'up':
      default:
        return { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 } };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
