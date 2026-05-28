'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Zap, BarChart3, Pencil, Search } from 'lucide-react';

const tools = [
  {
    id: 'idea-validator',
    name: 'Validador de Ideas',
    description: 'Valida tu idea de negocio con insights de mercado y análisis de viabilidad',
    icon: CheckCircle2,
    color: 'from-emerald-500 to-emerald-600',
    demo: 'Analiza mercado + competencia + demanda',
  },
  {
    id: 'marketing-generator',
    name: 'Plan de Marketing',
    description: 'Crea estrategias de marketing personalizadas para tu negocio',
    icon: BarChart3,
    color: 'from-blue-500 to-blue-600',
    demo: 'Funnel completo + canales + métricas',
  },
  {
    id: 'ad-copy',
    name: 'Generador de Anuncios',
    description: 'Genera copy publicitario que convierte y vende',
    icon: Pencil,
    color: 'from-orange-500 to-orange-600',
    demo: 'Headlines + body copy + CTAs',
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas',
    description: 'Crea tu modelo de negocio en minutos',
    icon: Lock,
    color: 'from-purple-500 to-purple-600',
    demo: 'Problema + solución + mercado',
  },
  {
    id: 'pricing-strategy',
    name: 'Estrategia de Precios',
    description: 'Optimiza tu precio para máxima rentabilidad',
    icon: Zap,
    color: 'from-pink-500 to-pink-600',
    demo: 'Psicología de precios + tiers',
  },
  {
    id: 'competitor-analyzer',
    name: 'Análisis de Competencia',
    description: 'Analiza competidores y encuentra oportunidades',
    icon: Search,
    color: 'from-cyan-500 to-cyan-600',
    demo: 'FODA + diferenciación + gaps',
  },
];

export function FeaturesSection() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary-600/10 to-transparent rounded-full blur-3xl -bottom-20 -right-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-500 text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
            Herramientas Premium
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Todo lo que necesitas para
            <br />
            <span className="text-gradient">lanzar tu negocio</span>
          </h2>
          <p className="text-lg text-foreground-500 max-w-2xl mx-auto">
            Herramientas AI-powered diseñadas específicamente para emprendedores que
            quieren validar, crecer y escalar sus ideas de negocio
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                className="group relative"
                variants={itemVariants}
              >
                {/* Card */}
                <div className="relative h-full p-6 md:p-8 rounded-2xl border border-border-dark bg-card-dark/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:bg-card-dark/80">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${tool.color}`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                      {tool.name}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground-600 text-sm mb-4 flex-grow">
                      {tool.description}
                    </p>

                    {/* Demo Hint */}
                    <div className="pt-4 border-t border-border-dark">
                      <p className="text-xs text-foreground-600 font-medium">
                        {tool.demo}
                      </p>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-400">
                      →
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground-600 mb-6">
            ¿Quieres más herramientas? Actualiza a Premium
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-full font-semibold hover:shadow-glow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Premium
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}