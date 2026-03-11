'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chapter Chair',
      institution: 'IIT Kochi',
      email: 'rajesh@ieee.org',
    },
    {
      name: 'Prof. Anita Singh',
      role: 'Vice Chair',
      institution: 'Cochin University',
      email: 'anita@ieee.org',
    },
    {
      name: 'Dr. Vikas Sharma',
      role: 'Secretary',
      institution: 'CUSAT',
      email: 'vikas@ieee.org',
    },
    {
      name: 'Ms. Priya Nair',
      role: 'Treasurer',
      institution: 'TKM College',
      email: 'priya@ieee.org',
    },
    {
      name: 'Prof. Arun Menon',
      role: 'Technical Lead',
      institution: 'Amrita University',
      email: 'arun@ieee.org',
    },
    {
      name: 'Dr. Sheela Nair',
      role: 'Events Coordinator',
      institution: 'IIITM Kerala',
      email: 'sheela@ieee.org',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-white dark:bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals leading IEEE CASS Kerala Chapter.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-gradient-to-br from-white to-blue-50 dark:from-secondary dark:to-slate-900 rounded-xl border border-border overflow-hidden hover:border-primary dark:hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              {/* Avatar */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary dark:text-accent font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">{member.institution}</p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
