'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer:
      'Sí, puedes cambiar entre planes en cualquier momento. Si subes de plan, se te reembolsará la diferencia de forma prorrateada. Si bajas de plan, se aplicará el cambio en tu próximo período de facturación.',
  },
  {
    id: 2,
    question: '¿Qué es exactamente Entrepreneur AI?',
    answer:
      'Entrepreneur AI es un mentor de IA diseñado específicamente para emprendedores. Te ayuda a validar ideas, crear planes de marketing, analizar competencia, generar nombres de startups y mucho más. Es como tener un asesor de negocios disponible 24/7.',
  },
  {
    id: 3,
    question: '¿Hay período de prueba gratuita?',
    answer:
      'El plan Free te da 15 mensajes diarios sin necesidad de tarjeta de crédito. Es perfecto para probar la IA. El plan Pro incluye una prueba gratuita de 7 días con acceso completo a todas las funciones premium.',
  },
  {
    id: 4,
    question: '¿Qué pasa con mis datos y conversaciones?',
    answer:
      'Tus conversaciones son privadas y cifradas. No compartimos tus datos con terceros. Puedes descargar tu historial completo en cualquier momento. Cumplimos con GDPR y todas las regulaciones de protección de datos.',
  },
  {
    id: 5,
    question: '¿Puedo cancelar mi suscripción?',
    answer:
      'Por supuesto. Puedes cancelar en cualquier momento sin preguntas. No hay contratos a largo plazo. Tu acceso se mantendrá hasta el final de tu período de facturación actual.',
  },
  {
    id: 6,
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos todas las tarjetas de crédito (Visa, Mastercard, American Express), PayPal, y transferencias bancarias. Los pagos se procesan de forma segura a través de Stripe.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
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
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary-600/10 to-transparent rounded-full blur-3xl -bottom-40 -left-20" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-500 text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
            Preguntas Frecuentes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Todo lo que necesitas saber
          </h2>
          <p className="text-lg text-foreground-500">
            ¿No encuentras la respuesta que buscas?{' '}
            <a href="#" className="text-primary-500 hover:text-primary-400 font-semibold">
              Contacta nuestro soporte
            </a>
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4 md:space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="group"
              variants={itemVariants}
            >
              <button
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 md:py-5 rounded-lg border border-border-dark bg-card-dark/50 hover:bg-card-dark/80 transition-all text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-gradient transition-all">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: openId === faq.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-foreground-500 group-hover:text-primary-500 transition-colors" />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 md:py-5 bg-card-dark/30 border border-t-0 border-border-dark rounded-b-lg">
                      <p className="text-foreground-500 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20 p-8 rounded-2xl border border-border-dark bg-gradient-to-r from-primary-600/10 to-accent-blue/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-foreground-500 mb-6">
            Nuestro equipo está aquí para ayudarte. Envíanos un mensaje y te
            responderemos en menos de 24 horas.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-full font-semibold hover:shadow-glow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar Soporte
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}