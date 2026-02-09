import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LogoDecoration } from './ui/LogoDecoration';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-0">
      <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
        
        {/* Contact Info & Form */}
        <div className="p-8 md:p-12 lg:p-16 relative">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 relative z-10">
            Solicita tu cita
          </h2>
          {/* Subtle decoration behind title */}
          <LogoDecoration className="absolute top-10 right-10 w-32 h-32 text-slate-50 opacity-80 z-0 rotate-12" />

          <p className="text-slate-600 mb-8 relative z-10">
            Déjanos tus datos y te contactaremos para confirmar tu cita. <br/>La primera visita de valoración es gratuita.
          </p>

          <form className="space-y-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Nombre</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Tu nombre" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Teléfono</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="600 000 000" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="tu@email.com" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Mensaje (Opcional)</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            
            <div className="pt-2">
               <label className="flex items-center gap-2 text-sm text-slate-500 mb-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500" />
                  <span>Acepto la política de privacidad</span>
               </label>
               <Button type="submit" size="lg" className="w-full md:w-auto">Enviar solicitud</Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-6 relative z-10">
             <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                   <p className="font-bold text-slate-900">Llámanos</p>
                   <p className="text-slate-600">912 345 678</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                   <p className="font-bold text-slate-900">Escríbenos</p>
                   <p className="text-slate-600">info@dental-aura.com</p>
                </div>
             </div>
          </div>
        </div>

        {/* Map & Info Panel */}
        <div className="bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
           {/* Abstract Map Background Placeholder */}
           <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800" className="w-full h-full object-cover" alt="Map background" />
           </div>

           {/* Brand Decoration in the corner */}
           <LogoDecoration className="absolute -bottom-20 -right-20 w-80 h-80 text-white opacity-10 rotate-12 pointer-events-none" />
           
           <div className="relative z-10 space-y-8">
              <div>
                 <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                    <MapPin className="text-primary-400" /> Nuestra ubicación
                 </h3>
                 <p className="text-slate-300 leading-relaxed mb-4">
                    Calle Velázquez, 45<br/>
                    28001 Madrid, España
                 </p>
                 <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-white underline transition-colors">
                    Ver en Google Maps →
                 </a>
              </div>

              <div>
                 <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                    <Clock className="text-primary-400" /> Horario
                 </h3>
                 <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                       <span>Lunes - Viernes</span>
                       <span>9:30 - 20:30</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                       <span>Sábados</span>
                       <span>10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between pt-2">
                       <span>Domingos</span>
                       <span className="text-primary-400">Cerrado</span>
                    </li>
                 </ul>
              </div>
           </div>

           {/* Interactive Map Embed Placeholder */}
           <div className="relative z-10 mt-8 h-48 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.703790!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol!5e0!3m2!1sen!2ses!4v1600000000000!5m2!1sen!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
           </div>
        </div>
      </div>
    </Section>
  );
};