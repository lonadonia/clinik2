import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Facilities } from './components/Facilities';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="facilities">
          <Facilities />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;