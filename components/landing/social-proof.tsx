'use client';

import { motion } from 'framer-motion';

export function SocialProof() {
  const companies = [
    { name: 'Stripe', logo: '💳' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Notion', logo: '📝' },
    { name: 'Linear', logo: '⚡' },
    { name: 'Vercel', logo: '▲' },
    { name: 'Supabase', logo: '🗄️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground-600 text-sm md:text-base font-medium mb-4">
            CONFIADO POR EMPRENDEDORES EN TODO EL MUNDO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Utilizado por miles de emprendedores
          </h2>
          <p className="text-foreground-500 text-lg mt-4 max-w-2xl mx-auto">
            Construido con las mejores tecnologías del mundo
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center p-4 rounded-lg border border-border-dark bg-card-dark/30 backdrop-blur-sm hover:bg-card-dark/60 transition-all group"
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.5)' }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {company.logo}
                </div>
                <p className="text-xs md:text-sm text-foreground-600 font-medium">
                  {company.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10K+', label: 'Emprendedores activos' },
            { number: '500K+', label: 'Conversaciones generadas' },
            { number: '99.9%', label: 'Disponibilidad' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="p-6"
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-foreground-600 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}