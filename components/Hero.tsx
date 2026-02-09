import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Star, ArrowRight, Shield } from 'lucide-react';
import { LogoDecoration } from './ui/LogoDecoration';

const backgroundImages = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000", // Woman smiling
  "https://media.istockphoto.com/id/2207747308/photo/dentist-examining-patients-teeth-in-dental-office.jpg?s=1024x1024&w=is&k=20&c=akrLPbitPkViXeaaw77koXWSynxf6n8bqtBC7RqotXM=", // Clinic Interior
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000", // Patient interaction
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2000", // Professional
  "https://media.istockphoto.com/id/652641508/photo/dental-imaging-on-tablet.jpg?s=1024x1024&w=is&k=20&c=DRr4SEap069xl-ORnbmIoH1aeBjLeTOvH6NQGSsLh48="  // Technology
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 overflow-hidden bg-slate-900">
      {/* Premium Slideshow Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Clínica Dental Ambiente"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" } 
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      </div>

      {/* Decorative Abstract Logo Elements */}
      <motion.div 
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-20 top-20 z-0 hidden lg:block pointer-events-none"
      >
        <LogoDecoration className="w-96 h-96 text-white/5" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -left-20 bottom-0 z-0 pointer-events-none"
      >
        <LogoDecoration className="w-64 h-64 text-white/5 -rotate-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
          >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
              >
                <Shield className="w-4 h-4 text-primary-300" />
                <span className="text-xs font-semibold tracking-wide text-white uppercase">Clínica Certificada en Madrid</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 relative drop-shadow-lg pb-1">
                Tu mejor sonrisa <br className="hidden sm:block" />
                <span className="text-secondary-200 inline-block">
                  comienza aquí
                </span>
                <LogoDecoration className="absolute -top-10 -left-10 w-24 h-24 text-primary-500/20 -rotate-12 blur-sm pointer-events-none" />
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg font-light">
                Tecnología de vanguardia y un equipo humano dedicado a tu salud bucodental. Descubre la odontología honesta que te mereces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  variant="white" 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  Solicita tu cita
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white/30 hover:bg-white/10 hover:border-white focus:ring-white backdrop-blur-sm"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nuestros servicios
                </Button>
              </div>

              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-8 border-t border-white/10"
              >
                 <div className="flex -space-x-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Patient" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover ring-2 ring-white/10" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Patient" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover ring-2 ring-white/10" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100" alt="Patient" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover ring-2 ring-white/10" />
                 </div>
                 <div className="text-white">
                    <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-sm font-medium text-slate-300"><span className="text-white font-bold">4.9/5</span> de 2,500+ pacientes</p>
                 </div>
              </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};