'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Globe, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const additionalLinks = [
    { label: 'Conference Activities', href: '#' },
    { label: 'Student Activities', href: '#' },
    { label: 'Offices', href: '#' },
    { label: 'Organizational Units', href: '#' },
    { label: 'Gallery', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'IEEE' },
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
    <footer className="bg-green-200 dark:bg-primary/20 text-foreground dark:text-gray-200 relative border-t-[6px] border-primary">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 w-full text-foreground">
        {/* Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-48 h-16 flex items-center justify-center shrink-0">
                <Image src="/CAS-logo-Black.png" alt="IEEE CASS Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-sm text-foreground/70 dark:text-gray-300 mb-8 leading-relaxed">
              The IEEE Circuits and Systems Society (CASS) Kerala Chapter is part of the IEEE Kerala Section and promotes technological innovation and research in circuits, systems, signal processing, and emerging electronic technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/5 hover:bg-accent text-foreground hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-foreground border-b border-black/10 dark:border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 dark:text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Links */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-6 text-foreground border-b border-black/10 dark:border-white/20 pb-2 inline-block">Additional Links</h4>
            <ul className="space-y-3">
              {additionalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-foreground/70 dark:text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-6 text-foreground border-b border-black/10 dark:border-white/20 pb-2 inline-block">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-foreground/70 dark:text-gray-300">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <a href="mailto:ieeekerala@gmail.com" className="hover:text-accent transition-colors break-all">
                  ieeekerala@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground/70 dark:text-gray-300">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <a href="tel:+918848905673" className="hover:text-accent transition-colors">
                  +91 8848905673
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground/70 dark:text-gray-300">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  IEEE Kerala Section Office<br />
                  HarmonIEEE, 1st Floor<br />
                  Cherian’s Square, Ambujavilasam Rd<br />
                  PB77, GPO<br />
                  Thiruvananthapuram<br />
                  Kerala 695001<br />
                  India
                </address>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-black/40 dark:via-white/40 to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <motion.p variants={itemVariants} className="text-sm text-foreground/60 dark:text-gray-400">
            © 2026 IEEE Circuits and Systems Society – Kerala Chapter. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-sm text-foreground/60 dark:text-gray-400"
          >
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
    </footer>
  );
}
