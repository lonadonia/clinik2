import React from 'react';

interface LogoDecorationProps {
  className?: string;
  color?: string; // Tailwind text color class, e.g., 'text-primary-500'
}

export const LogoDecoration: React.FC<LogoDecorationProps> = ({ className = "", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`pointer-events-none select-none ${className} ${color}`}
      aria-hidden="true"
    >
      {/* Left Wing/Lobe - Curved shape like a parenthesis or heart half */}
      <path 
        d="M85 160 C 40 140, 10 90, 30 40 C 40 20, 70 20, 85 50" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round"
        className="opacity-90"
      />
      
      {/* Right Wing/Lobe - Mirrored */}
      <path 
        d="M115 160 C 160 140, 190 90, 170 40 C 160 20, 130 20, 115 50" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        className="opacity-90"
      />
      
      {/* Center Line - The vertical pillar */}
      <path 
        d="M100 55 L 100 150" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="round"
        className="opacity-40"
      />
    </svg>
  );
};