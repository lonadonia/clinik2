import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Smile, Sparkles, Drill, Baby, ScanFace, Activity } from 'lucide-react';
import { LogoDecoration } from './ui/LogoDecoration';

const servicesList = [
  {
    icon: <Smile />,
    title: "Odontología General",
    description: "Revisiones, limpiezas y tratamientos conservadores para mantener tu boca sana día a día.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400"
  },
  {
    icon: <Sparkles />,
    title: "Estética Dental",
    description: "Carillas, blanqueamientos y diseño de sonrisa para que luzcas tu mejor versión.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?auto=format&fit=crop&w=400"
  },
  {
    icon: <Drill />,
    title: "Implantes Dentales",
    description: "Recupera la funcionalidad y estética de tus dientes perdidos con implantes de alta gama.",
    img: "https://images.unsplash.com/photo-1445527697968-01d00d810b5f?auto=format&fit=crop&w=400"
  },
  {
    icon: <ScanFace />,
    title: "Ortodoncia Invisible",
    description: "Alinea tus dientes de forma discreta y cómoda con alineadores transparentes.",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=400"
  },
  {
    icon: <Activity />,
    title: "Periodoncia",
    description: "Cuidamos la salud de tus encías para prevenir enfermedades periodontales y pérdida dental.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400"
  },
  {
    icon: <Baby />,
    title: "Odontopediatría",
    description: "Cuidamos la sonrisa de los más pequeños con paciencia, cariño y técnicas adaptadas.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400"
  }
];

export const Services: React.FC = () => {
  return (
    <Section bg="warm" id="services" className="relative overflow-hidden">
      {/* Large Artistic Background Decoration */}
      <div className="absolute -left-24 top-20 opacity-[0.03] pointer-events-none">
          <LogoDecoration className="w-[600px] h-[600px] text-primary-900 -rotate-12" />
      </div>
      
      {/* Small floating decoration top right */}
      <div className="absolute right-10 top-10 opacity-10 pointer-events-none">
          <LogoDecoration className="w-24 h-24 text-primary-500 rotate-45" />
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h4 className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-primary-300"></span>
            Tratamientos Integrales
            <span className="w-8 h-[1px] bg-primary-300"></span>
        </h4>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 relative inline-block">
          Todo lo que tu sonrisa necesita
          {/* Subtle underline decoration */}
          <LogoDecoration className="absolute -bottom-6 -right-8 w-16 h-16 text-primary-200 opacity-50 rotate-12" />
        </h2>
        <p className="text-slate-600 text-lg">
          Ofrecemos una gama completa de servicios odontológicos en un solo lugar, con especialistas dedicados a cada área.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col relative"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors z-10"></div>
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-md text-primary-700">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col relative">
              {/* Card internal decoration */}
              <LogoDecoration className="absolute bottom-4 right-4 w-16 h-16 text-slate-100 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors relative z-10">{service.title}</h3>
              <p className="text-slate-500 mb-6 flex-grow leading-relaxed relative z-10">
                {service.description}
              </p>
              <button className="text-primary-700 font-semibold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">
                Saber más <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};