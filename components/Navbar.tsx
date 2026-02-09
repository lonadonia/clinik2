import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Clínica', href: '#about' },
    { name: 'Tratamientos', href: '#services' },
    { name: 'Equipo', href: '#team' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic classes based on scroll state
  const textColor = isScrolled || isOpen ? 'text-slate-600' : 'text-slate-100 hover:text-white';
  const buttonVariant = isScrolled || isOpen ? 'primary' : 'white';
  
  // Logic to switch logo: White bg (scrolled/open) -> Normal Logo, Dark bg -> White Logo
  const logoSrc = isScrolled || isOpen 
    ? "https://i.postimg.cc/jDKxttzp/2.png" 
    : "https://i.postimg.cc/PChXTTmy/1.png";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Optimized size for visibility */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
             <img 
               src={logoSrc} 
               alt="Clínica Dental Logo" 
               className="h-20 w-auto object-contain transition-all duration-300"
             />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium transition-colors ${textColor}`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={buttonVariant} size="sm" onClick={() => handleNavClick('#contact')}>
              Pedir Cita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled || isOpen ? 'text-slate-600' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg md:hidden p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-base font-medium text-slate-700 hover:text-primary-900 py-2 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4" onClick={() => handleNavClick('#contact')}>
            <Phone className="w-4 h-4 mr-2" />
            Llamar ahora
          </Button>
        </div>
      )}
    </header>
  );
};