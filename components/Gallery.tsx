
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    title: 'Zona de Pesas Libres',
    desc: 'Equipamiento de grado competitivo para fuerza máxima.'
  },
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef03a94e77?q=80&w=2070&auto=format&fit=crop',
    title: 'Área de Cardio High-End',
    desc: 'Máquinas de última generación con monitoreo de rendimiento.'
  },
  {
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop',
    title: 'Espacio de Powerlifting',
    desc: 'Plataformas profesionales para tus levantamientos más pesados.'
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-2969c636020d?q=80&w=2070&auto=format&fit=crop',
    title: 'Estudio de Clases Grupales',
    desc: 'Ambiente inmersivo con sonido premium e iluminación dinámica.'
  }
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-16 md:py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background Decorative Text - Reduced size on mobile to prevent overflow */}
      <div className="absolute top-0 right-0 text-[6rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none -translate-y-1/2 translate-x-1/4 leading-none font-heading">
        SPACE
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 relative z-10">
          <div>
            <span className="text-[#ff4d00] font-bold uppercase tracking-[0.3em] text-xs md:text-sm block mb-4">Instalaciones Premium</span>
            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tight leading-none">
              NUESTRO <br /><span className="text-gray-600">ESPACIO.</span>
            </h2>
          </div>
          
          <div className="flex gap-4 self-end md:self-auto">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ff4d00] hover:border-[#ff4d00] hover:text-white transition-all group"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ff4d00] hover:border-[#ff4d00] hover:text-white transition-all group"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/5">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Info Box */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-2 font-heading leading-tight">{img.title}</h3>
                  <p className="text-gray-300 text-sm md:text-lg max-w-md">{img.desc}</p>
                </div>
                
                <div className="hidden md:flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                   <span className="text-sm font-bold text-[#ff4d00] tracking-widest">{idx + 1} / {images.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
          {images.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 md:h-1.5 transition-all duration-300 rounded-full ${
                idx === activeIndex ? 'w-8 md:w-12 bg-[#ff4d00]' : 'w-3 md:w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
