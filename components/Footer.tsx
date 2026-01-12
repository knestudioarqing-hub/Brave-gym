
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-1 space-y-8">
            <Logo className="!items-start" />
            <p className="text-gray-500 max-w-xs pt-4">
              Construyendo campeones y forjando futuros más fuertes a través de una disciplina implacable y entrenamiento de élite.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ff4d00] hover:border-[#ff4d00] transition-all text-white hover:text-black">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-12">
            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-sm tracking-widest">Navegación</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Programas</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Membresía</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-sm tracking-widest">Recursos</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Planes de Entrenamiento</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Guía de Nutrición</a></li>
                <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-6 text-white uppercase text-sm tracking-widest">Boletín Brave</h4>
              <p className="text-gray-500 mb-6 text-sm">Únete al círculo interno para obtener consejos de entrenamiento exclusivos y actualizaciones de la instalación.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#ff4d00] transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#ff4d00] text-white px-4 rounded-xl hover:bg-[#e64500] transition-colors flex items-center justify-center">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-gray-600 text-sm gap-4">
          <p>© 2024 Brave Gym Rendimiento de Élite. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
