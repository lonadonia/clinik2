import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoDecoration } from './ui/LogoDecoration';

const reviews = [
  {
    text: "Llevaba años con miedo al dentista hasta que conocí Aura. El trato de la Dra. Ruiz es increíble, me explicó todo con detalle y no sentí nada de dolor. ¡Totalmente recomendados!",
    author: "María García",
    date: "Hace 2 semanas",
    stars: 5
  },
  {
    text: "Me hice un tratamiento de Invisalign con el Dr. Méndez y el resultado ha superado mis expectativas. La clínica es preciosa y el personal súper atento.",
    author: "Javier López",
    date: "Hace 1 mes",
    stars: 5
  },
  {
    text: "Profesionalidad de 10. Fui por una urgencia y me atendieron al momento. Se nota que les importa el paciente de verdad.",
    author: "Carmen Rodríguez",
    date: "Hace 3 días",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section bg="warm" id="testimonials" className="relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-5">
         <LogoDecoration className="w-[600px] h-[600px] text-primary-900 rotate-90" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Lo que dicen nuestros pacientes</h2>
        <div className="flex justify-center items-center gap-2 mb-2">
           <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
           </div>
           <span className="font-bold text-slate-900 text-xl">4.9/5</span>
        </div>
        <p className="text-slate-500 text-sm">Basado en más de 500 reseñas en Google</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
             {/* Subtle card decoration */}
            <LogoDecoration className="absolute -top-6 -right-6 w-24 h-24 text-secondary-200 opacity-20 group-hover:opacity-40 transition-opacity" />
            
            <div className="absolute -top-4 left-8 text-6xl text-primary-200 font-serif leading-none">"</div>
            <div className="flex text-yellow-400 mb-4 pt-4">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
              {review.text}
            </p>
            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
               <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm overflow-hidden relative">
                   <span className="relative z-10">{review.author.charAt(0)}</span>
                   {/* Avatar background filler */}
                   <LogoDecoration className="absolute inset-0 text-white/50 w-full h-full scale-150" />
               </div>
               <div>
                  <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};