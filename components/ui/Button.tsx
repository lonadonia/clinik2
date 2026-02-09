import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  // Base styles updated with 'active:scale-95' for click feedback
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    // Added colored shadow glow on hover
    primary: "bg-primary-600 text-white hover:bg-primary-500 shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5 focus:ring-primary-500",
    secondary: "bg-secondary-200 text-secondary-900 hover:bg-secondary-300 shadow-md hover:shadow-secondary-200/40 hover:-translate-y-0.5 focus:ring-secondary-500",
    outline: "border-2 border-primary-900 text-primary-900 hover:bg-primary-50 focus:ring-primary-500",
    ghost: "text-primary-900 hover:bg-slate-100 hover:text-primary-700",
    white: "bg-white text-primary-900 hover:bg-slate-50 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};