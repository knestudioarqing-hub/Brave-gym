
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Páginas', href: '#', hasDropdown: true },
    { name: 'Blog', href: '#', hasDropdown: true },
    { name: 'Contáctanos', href: '#ubicacion' },
    { name: 'Tienda', href: '#', hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* Integrated Offer Banner */}
      <div className={`bg-[#ff4d00] text-black py-2 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-auto opacity-100'}`}>
        ¡Oferta por tiempo limitado! Obtén un 20% de descuento en todos los esenciales.
      </div>

      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              className="text-white" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Links - Desktop Left */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center text-sm font-semibold text-gray-300 hover:text-[#ff4d00] transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
              </a>
            ))}
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Logo size={isScrolled ? "sm" : "md"} className="transition-all duration-500" />
          </div>

          {/* Links - Desktop Right & Search */}
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(3).map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center text-sm font-semibold text-gray-300 hover:text-[#ff4d00] transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-[#ff4d00] transition-colors p-2 rounded-full hover:bg-white/5 transition-all">
                <Search size={20} />
              </button>
              <button className="hidden sm:block bg-[#ff4d00] hover:bg-[#e64500] text-white px-6 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4d00]/20">
                ÚNETE AHORA
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-full left-0 right-0 h-screen p-6 flex flex-col space-y-6 animate-in slide-in-from-top duration-300 border-t border-white/10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white border-b border-white/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#ff4d00] text-white py-4 rounded-xl text-lg font-bold shadow-xl">
              Únete Ahora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
