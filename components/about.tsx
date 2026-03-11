'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Users, Award } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const features = [
    {
      icon: Cpu,
      title: 'Cutting-Edge Technology',
      description: 'Explore the latest advancements in circuits and systems design.',
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Collaborate with experts and drive technological innovation forward.',
    },
    {
      icon: Users,
      title: 'Community & Networking',
      description: 'Connect with professionals and expand your professional network.',
    },
    {
      icon: Award,
      title: 'Excellence & Recognition',
      description: 'Achieve recognition in the circuits and systems field.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            About IEEE CASS Kerala Chapter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Part of the IEEE Circuits and Systems Society, our chapter is dedicated to advancing
            knowledge and fostering innovation in circuits and systems.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-6 rounded-xl border border-border bg-white dark:bg-secondary hover:border-primary dark:hover:border-accent transition-colors duration-300 hover:shadow-lg overflow-hidden h-[220px]"
              >
                {/* Top Border Badge */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Default State (Translates up and fades on hover) */}
                <div className="flex flex-col items-center justify-center h-full text-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-8 group-hover:opacity-0 w-full z-10 relative">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 dark:bg-accent/10">
                    <Icon className="text-primary dark:text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>

                {/* Hover Reveal State (Slides up from the bottom) */}
                <div className="absolute inset-0 bg-white dark:bg-secondary p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-20">
                  <div className="mb-3 inline-flex p-2 rounded-lg bg-primary/10 dark:bg-accent/10">
                    <Icon className="text-primary dark:text-accent" size={20} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-primary dark:text-accent">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-accent/10 dark:to-primary/10 border border-primary/20 dark:border-accent/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-foreground dark:text-gray-200 mb-4 leading-relaxed">
              The IEEE Circuits and Systems Society Kerala Chapter is committed to fostering
              professional growth, advancing technical knowledge, and promoting collaboration among
              engineers and researchers working with circuits and systems.
            </p>
            <p className="text-lg text-foreground dark:text-gray-200 leading-relaxed">
              We organize technical seminars, workshops, and networking events to keep our members
              updated with the latest trends in the field and to create opportunities for knowledge
              exchange and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
