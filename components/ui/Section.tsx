import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'warm';
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    warm: 'bg-secondary-50',
  };

  return (
    <section id={id} className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};