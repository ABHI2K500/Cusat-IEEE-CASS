'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-secondary shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IEEE</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary dark:text-accent">IEEE CASS</h1>
            <p className="text-xs text-muted-foreground">Kerala Chapter</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="text-foreground dark:text-white hover:text-primary dark:hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden md:block"
        >
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Join Us
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden text-primary dark:text-accent"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-secondary border-t border-border"
      >
        <ul className="container mx-auto px-4 py-4 space-y-3">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground dark:text-white hover:text-primary dark:hover:text-accent transition-colors block py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-3 border-t border-border">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-block w-full text-center"
            >
              Join Us
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
