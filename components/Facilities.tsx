import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { LogoDecoration } from './ui/LogoDecoration';

export const Facilities: React.FC = () => {
  const images = [
     "https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&w=800",
     "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600",
     "https://images.unsplash.com/photo-1516069677930-b37df4295565?auto=format&fit=crop&w=600",
     "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800"
  ];

  return (
    <Section bg="gray" id="gallery" className="relative overflow-hidden">
       {/* Background Decoration Top Left */}
       <div className="absolute -top-10 -left-10 opacity-[0.04] pointer-events-none">
          <LogoDecoration className="w-96 h-96 text-slate-800 rotate-180" />
       </div>

       <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 inline-flex items-center gap-4">
             Instalaciones de Vanguardia
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2">
             Diseñadas para tu confort y seguridad. Espacios amplios, luminosos y equipados con la última tecnología digital.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {images.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className={`rounded-2xl overflow-hidden shadow-lg ${i === 0 || i === 3 ? 'md:col-span-2 md:h-80' : 'md:h-64'} h-64 relative group`}
             >
                {/* Overlay with subtle logo center */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-all duration-500 z-10 flex items-center justify-center">
                   <LogoDecoration className="w-20 h-20 text-white opacity-0 group-hover:opacity-40 transition-all duration-500 scale-0 group-hover:scale-100" />
                </div>
                
                <img src={img} alt="Clínica dental instalaciones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </motion.div>
          ))}
       </div>
    </Section>
  );
};