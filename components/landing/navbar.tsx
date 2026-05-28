'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-900/80 backdrop-blur-xl border-b border-border-dark'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-blue rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="hidden sm:inline-block text-lg font-bold bg-gradient-to-r from-primary-500 to-accent-blue bg-clip-text text-transparent">
              Entrepreneur AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-foreground-500 hover:text-foreground-50 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/login"
              className="px-4 py-2 text-foreground-50 hover:text-foreground-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.a>
            <motion.button
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-full font-medium hover:shadow-glow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 hover:bg-card-dark rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden border-t border-border-dark bg-background-900/50 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg hover:bg-card-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2 border-t border-border-dark">
              <a
                href="/login"
                className="block px-4 py-2 text-center rounded-lg hover:bg-card-dark transition-colors"
              >
                Login
              </a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}