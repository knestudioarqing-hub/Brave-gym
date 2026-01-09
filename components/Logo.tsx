
import React from 'react';
import { Dumbbell } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const scale = size === 'sm' ? 'scale-75' : size === 'lg' ? 'scale-125' : 'scale-100';
  
  return (
    <div className={`flex flex-col items-center select-none group ${scale} ${className}`}>
      {/* Orange Dumbbell Box with Pulse and Glow */}
      <div className="bg-[#ff4d00] p-1.5 rounded-lg mb-1 shadow-lg shadow-[#ff4d00]/40 group-hover:shadow-[#ff4d00]/60 transition-all duration-300 animate-pulse-soft">
        <Dumbbell className="text-white" size={24} strokeWidth={3} />
      </div>
      
      {/* BRAVE Text with Glow effect on hover */}
      <div className="text-white font-black leading-none tracking-tighter text-2xl font-heading group-hover:text-[#ff4d00] transition-colors duration-300">
        BRAVE
      </div>
      
      {/* - GYM - Text */}
      <div className="flex items-center space-x-2 text-[#ff4d00] font-extrabold text-[10px] tracking-[0.2em] mt-0.5">
        <span className="w-4 h-[2px] bg-[#ff4d00] group-hover:w-6 transition-all"></span>
        <span>GYM</span>
        <span className="w-4 h-[2px] bg-[#ff4d00] group-hover:w-6 transition-all"></span>
      </div>
    </div>
  );
};

export default Logo;
