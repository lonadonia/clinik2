import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Clock } from 'lucide-react';
import { LogoDecoration } from './ui/LogoDecoration';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: "Trato Humano",
      description: "Entendemos tus miedos y necesidades. Te escuchamos para ofrecerte la mejor solución."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: "Máxima Calidad",
      description: "Utilizamos materiales de primera calidad y las últimas tecnologías del mercado."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Sin Esperas",
      description: "Respetamos tu tiempo. Organizamos nuestra agenda para minimizar tus esperas."
    }
  ];

  return (
    <Section bg="white" id="about" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3">
         <LogoDecoration className="w-[500px] h-[500px] text-primary-50 opacity-[0.03]" />
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6"
        >
          Más que una clínica, tu hogar dental
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 leading-relaxed"
        >
          En Clínica Dental Aura, hemos reinventado la experiencia de ir al dentista. 
          Creemos en una odontología honesta, transparente y mínimamente invasiva. 
          Nuestro objetivo no es solo curar, sino prevenir y educar para que mantengas tu sonrisa sana toda la vida.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100 group relative overflow-hidden"
          >
            {/* Tiny decoration in card corner */}
            <LogoDecoration className="absolute -bottom-4 -right-4 w-20 h-20 text-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-12" />

            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 relative z-10">
              {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6 group-hover:text-white transition-colors duration-300" })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{feature.title}</h3>
            <p className="text-slate-600 relative z-10">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};