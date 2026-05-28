'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Producto',
      links: [
        { label: 'Características', href: '#features' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Seguridad', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carrera', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'GDPR', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative border-t border-border-dark bg-background-900 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-primary-600/5 to-transparent rounded-full blur-3xl -bottom-20 -left-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <motion.div
          className="py-16 md:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
            {/* Brand */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-accent-blue bg-clip-text text-transparent">
                  Entrepreneur AI
                </span>
              </Link>
              <p className="text-foreground-600 text-sm mb-6">
                Tu mentor de negocios con IA disponible 24/7.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg border border-border-dark bg-card-dark/50 flex items-center justify-center text-foreground-500 hover:text-primary-500 hover:border-primary-500/50 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-foreground-600 hover:text-primary-500 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-border-dark" />

          {/* Bottom */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            variants={itemVariants}
          >
            <div className="text-foreground-600 text-sm">
              <p>
                © {currentYear} Entrepreneur AI. Todos los derechos reservados.
              </p>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-2 rounded-lg bg-card-dark border border-border-dark text-foreground-50 placeholder-foreground-600 text-sm outline-none focus:border-primary-500/50 transition-colors"
              />
              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-lg font-medium text-sm hover:shadow-glow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribir
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}