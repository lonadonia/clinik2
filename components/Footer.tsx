import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { LogoDecoration } from './ui/LogoDecoration';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 mt-20 relative overflow-hidden">
      {/* Decorative Watermark */}
      <LogoDecoration className="absolute -right-20 -bottom-20 w-96 h-96 text-white/5 rotate-12" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             {/* Logo - Optimized size */}
             <div className="flex items-center gap-2 text-white">
                <img 
                  src="https://i.postimg.cc/PChXTTmy/1.png" 
                  alt="Clínica Dental Logo" 
                  className="h-24 w-auto object-contain"
                />
             </div>
             <p className="text-sm leading-relaxed">
               Expertos en crear sonrisas saludables y duraderas. Tu clínica dental de confianza en Madrid.
             </p>
             <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">La Clínica</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tratamientos</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Equipo Médico</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Tratamientos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Implantes Dentales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ortodoncia Invisible</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estética Dental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blanqueamiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Periodoncia</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Clínica Dental Aura. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
             <span>Diseñado con cuidado para</span>
             <span className="text-white font-serif">pacientes felices</span>
          </p>
        </div>
      </div>
    </footer>
  );
};