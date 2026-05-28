'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/constants';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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

  const plans = Object.entries(PRICING_PLANS).map(([key, plan]) => ({
    id: key,
    ...plan,
  }));

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-3xl -top-40 -right-20" />
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
            Planes Simples
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Precios que crecen
            <br />
            <span className="text-gradient">contigo</span>
          </h2>
          <p className="text-lg text-foreground-500 max-w-2xl mx-auto">
            Elige el plan perfecto para tu etapa de emprendimiento. Todos incluyen
            mentoría IA 24/7.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 p-1 rounded-full border border-border-dark bg-card-dark/50">
            {(['monthly', 'yearly'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === cycle
                    ? 'bg-gradient-to-r from-primary-600 to-accent-blue text-white'
                    : 'text-foreground-500 hover:text-foreground-50'
                }`}
              >
                {cycle === 'monthly' ? 'Mensual' : 'Anual'}
                {cycle === 'yearly' && (
                  <span className="ml-2 text-xs bg-accent-emerald/20 text-accent-emerald px-2 py-1 rounded-full">
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative group ${
                plan.highlighted ? 'md:scale-105' : ''
              }`}
              variants={itemVariants}
            >
              {/* Highlight Background */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 md:p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-card-dark border-primary-500/50 hover:border-primary-500'
                    : 'bg-card-dark/50 border-border-dark hover:border-primary-500/30'
                }`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-600 to-accent-blue text-white text-xs font-bold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground-600 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gradient">
                      ${plan.price}
                    </span>
                    <span className="text-foreground-600 text-sm">
                      /{plan.interval}
                    </span>
                  </div>

                  {billingCycle === 'yearly' && plan.price > 0 && (
                    <p className="text-xs text-accent-emerald">
                      Ahorras $57.60 al año
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all flex items-center justify-center gap-2 group/btn ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary-600 to-accent-blue text-white hover:shadow-glow-lg'
                      : 'border border-border-dark bg-card-dark/50 text-white hover:bg-card-dark'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                {/* Features */}
                <div className="space-y-4 mb-8 border-b border-border-dark pb-8">
                  <p className="text-xs text-foreground-600 font-semibold uppercase tracking-wider">
                    Incluye
                  </p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-500 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations && plan.limitations.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs text-foreground-600 font-semibold uppercase tracking-wider">
                      No incluye
                    </p>
                    {plan.limitations.map((limitation) => (
                      <div key={limitation} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-foreground-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-600 text-sm">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground-600 mb-4">
            ¿Preguntas sobre los planes?
          </p>
          <a
            href="#faq"
            className="text-primary-500 hover:text-primary-400 font-semibold transition-colors inline-flex items-center gap-2"
          >
            Ver preguntas frecuentes
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}