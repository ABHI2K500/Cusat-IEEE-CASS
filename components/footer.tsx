'use client';

import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    About: ['Mission', 'Team', 'History', 'Careers'],
    Resources: ['Events', 'Publications', 'Workshops', 'Documentation'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact'],
    Connect: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram'],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-secondary dark:bg-primary/20 text-white dark:text-gray-200 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">IEEE</span>
              </div>
              <div>
                <h3 className="font-bold">IEEE CASS</h3>
                <p className="text-xs text-gray-300">Kerala Chapter</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Advancing circuits and systems technology through innovation and collaboration.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-accent text-white transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(links).map(([category, items], idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p variants={itemVariants} className="text-sm text-gray-300">
            © {currentYear} IEEE Circuits and Systems Society, Kerala Chapter. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-sm text-gray-300"
          >
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
    </footer>
  );
}
