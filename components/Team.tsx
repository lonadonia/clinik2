import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { LogoDecoration } from './ui/LogoDecoration';

const team = [
  {
    name: "Dra. Elena Ruiz",
    role: "Directora Médica & Implantología",
    bio: "Más de 15 años devolviendo sonrisas. Especialista en cirugía oral avanzada.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=500"
  },
  {
    name: "Dr. Carlos Méndez",
    role: "Ortodoncia Invisible",
    bio: "Certificado en Invisalign Diamond. Apasionado por la estética y la función.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=500"
  },
  {
    name: "Dra. Sofía Luján",
    role: "Estética y Odontología General",
    bio: "Perfeccionista por naturaleza. Transformará tu sonrisa con técnicas mínimamente invasivas.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=500"
  },
  {
    name: "Dr. Pablo Alborán",
    role: "Endodoncia",
    bio: "Especialista en salvar dientes. Su prioridad es eliminar tu dolor y conservar tu pieza.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=500"
  }
];

export const Team: React.FC = () => {
  return (
    <Section id="team" className="relative overflow-hidden">
      {/* Background Watermark Bottom Right */}
      <div className="absolute -right-32 -bottom-32 opacity-[0.02] pointer-events-none">
          <LogoDecoration className="w-[800px] h-[800px] text-primary-900" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
        <div className="max-w-2xl">
           <div className="flex items-center gap-2 mb-3">
              <LogoDecoration className="w-5 h-5 text-primary-500" />
              <h4 className="text-primary-700 font-bold uppercase tracking-widest text-sm">Nuestro Equipo</h4>
           </div>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
             Conoce a los expertos
           </h2>
        </div>
        <p className="text-slate-600 max-w-md text-lg">
          Un equipo multidisciplinar unido por una misma pasión: la excelencia en cada tratamiento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 mb-4 relative">
               <img 
                 src={member.img} 
                 alt={member.name}
                 className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 {/* Decoration inside bio overlay */}
                 <LogoDecoration className="absolute top-4 right-4 w-12 h-12 text-white/20" />
                 
                 <p className="text-white text-sm opacity-90 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 relative z-10">
                   {member.bio}
                 </p>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-primary-700 font-medium text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};