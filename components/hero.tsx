'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const circuitPaths = [
    { delay: 0, x: 'translate(-20px, -20px)' },
    { delay: 0.1, x: 'translate(30px, 10px)' },
    { delay: 0.2, x: 'translate(-10px, 30px)' },
    { delay: 0.3, x: 'translate(20px, -10px)' },
    { delay: 0.4, x: 'translate(-30px, 15px)' },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-green-50 dark:from-secondary dark:to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {circuitPaths.map((path, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              delay: path.delay * 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute w-40 h-40 rounded-full border-2 border-primary/20 dark:border-accent/20"
            style={{
              left: `${15 + idx * 20}%`,
              top: `${20 + idx * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 text-center z-10 relative"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-64 h-20 sm:w-80 sm:h-24">
            <Image src="/CAS-logo-Black.png" alt="CAS Logo" fill className="object-contain dark:hidden block" priority />
            <Image src="/CAS-logo-White.png" alt="CAS Logo" fill className="object-contain hidden dark:block" priority />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-accent/10 rounded-full border border-primary/20 dark:border-accent/20">
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary dark:text-accent">
              IEEE Circuits and Systems Society
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Innovating the Future
          </span>
          <br />
          <span className="text-foreground dark:text-white">Through Circuits & Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join the IEEE CASS Kerala Chapter and connect with leading engineers, researchers, and
          innovators shaping the future of circuits and systems technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#events"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300"
          >
            Explore Events
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 dark:border-accent dark:text-accent dark:hover:bg-accent/10 rounded-lg font-semibold transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary dark:border-accent rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary dark:bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
