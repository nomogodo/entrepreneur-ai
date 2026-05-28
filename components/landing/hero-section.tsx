'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary-600/20 to-accent-blue/20 rounded-full blur-3xl -top-20 -left-20 animate-float" />
        <div className="absolute w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-primary-600/10 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Tu mentor de
                <br />
                <span className="text-gradient">negocios con IA</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-foreground-500 max-w-md leading-relaxed"
                variants={itemVariants}
              >
                Lanza, valida y escala negocios con una IA diseñada para
                emprendedores. Mentoría empresarial 24/7 a tu alcance.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-full font-semibold hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Empieza Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-border-dark bg-card-dark/50 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-card-dark transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Demo
              </motion.button>
            </motion.div>

            {/* Trust Text */}
            <motion.p
              className="text-sm text-foreground-600"
              variants={itemVariants}
            >
              No se requiere tarjeta de crédito • Acceso instantáneo
            </motion.p>
          </div>

          {/* Right Side - Chat Preview */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="relative bg-card-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-blue/10 pointer-events-none" />

              {/* Chat Container */}
              <div className="p-6 space-y-4 h-96">
                {/* User Message */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="max-w-xs bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                    Tengo 2.000€, ¿qué negocio puedo montar?
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="max-w-xs bg-card-dark/50 border border-border-dark text-foreground-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-100" />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-200" />
                    </div>
                    <p>
                      Con 2.000€ tienes varias opciones sólidas:
                    </p>
                    <ul className="space-y-1 text-xs text-foreground-500">
                      <li>• Consultoría digital especializada</li>
                      <li>• Tienda dropshipping automatizada</li>
                      <li>• Membresía o comunidad online</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Input Area */}
                <motion.div
                  className="pt-4 mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="flex gap-2 bg-card-dark/50 border border-border-dark rounded-full px-4 py-2">
                    <input
                      type="text"
                      placeholder="Pregunta cualquier cosa..."
                      className="flex-1 bg-transparent outline-none text-sm text-foreground-50 placeholder-foreground-600"
                    />
                    <button className="p-2 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-full hover:shadow-glow-md transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}