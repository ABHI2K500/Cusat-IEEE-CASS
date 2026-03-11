'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax background elements
  const bgY1 = useTransform(scrollY, [0, 4000], [0, 600]); 
  const bgY2 = useTransform(scrollY, [0, 4000], [0, 300]);

  useEffect(() => {
    const handleStart = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsScrolling(true);
      // Automatically end visual effects slightly before scroll finishes for a smooth settle
      setTimeout(() => {
        setIsScrolling(false);
      }, customEvent.detail.duration - 100);
    };

    window.addEventListener('nav-scroll-start', handleStart);
    return () => window.removeEventListener('nav-scroll-start', handleStart);
  }, []);

  return (
    <div className="relative w-full flex-1 flex flex-col">
      {/* Background Parallax Layer 1 - Slowest */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-20 opacity-40 dark:opacity-20 flex flex-col items-center justify-around"
      >
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] transform -translate-x-1/2" />
        <div className="w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] transform translate-x-1/2 mt-96" />
        <div className="w-[900px] h-[900px] bg-primary/5 rounded-full blur-[120px] transform -translate-x-1/3 mt-96" />
      </motion.div>

      {/* Background Parallax Layer 2 - Medium */}
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 dark:opacity-20 flex flex-col items-center justify-around"
      >
         <div className="w-[400px] h-[400px] bg-secondary/10 border-[1px] border-primary/20 rounded-full transform translate-x-1/3 mt-32" />
         <div className="w-[500px] h-[500px] bg-secondary/10 border-[1px] border-accent/20 rounded-full transform -translate-x-1/4 mt-96" />
         <div className="w-[300px] h-[300px] bg-secondary/10 border-[2px] border-primary/10 rounded-full transform translate-x-1/2 mt-96" />
      </motion.div>

      {/* Foreground Content with Cinematic Motion Blur Effect */}
      <motion.div
        animate={{
          filter: isScrolling ? 'blur(6px) brightness(0.95)' : 'blur(0px) brightness(1)',
          y: isScrolling ? 10 : 0,
        }}
        transition={{ 
          duration: 0.4, 
          ease: 'easeInOut'
        }}
        className="relative z-10 flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
