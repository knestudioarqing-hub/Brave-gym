
import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

const LocationMap: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/bJnEc1Y6RRquJeqL6";
  
  return (
    <section id="ubicacion" className="py-16 md:py-24 px-4 md:px-8 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-[#ff4d00]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            <div>
              <span className="text-[#ff4d00] font-bold uppercase tracking-[0.3em] text-xs md:text-sm block mb-4">Visítanos</span>
              <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter leading-none mb-4 md:mb-6">
                TU NUEVA <br /><span className="text-[#ff4d00]">ZONA DE GUERRA.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Ubicados en el corazón del distrito deportivo, nuestras instalaciones están diseñadas para la victoria.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors shrink-0">
                  <MapPin className="text-[#ff4d00]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Dirección Principal</h4>
                  <p className="text-gray-400 text-sm md:text-base">Av. de la Victoria 45, Complejo Brave, 28023</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors shrink-0">
                  <Phone className="text-[#ff4d00]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Línea Directa</h4>
                  <p className="text-gray-400 text-sm md:text-base">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors shrink-0">
                  <Clock className="text-[#ff4d00]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Horario Ininterrumpido</h4>
                  <p className="text-gray-400 text-sm md:text-base">Lunes a Domingo: 05:00 - 23:00</p>
                </div>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-[#ff4d00] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-tighter hover:bg-[#e64500] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#ff4d00]/20 text-sm md:text-base"
            >
              <Navigation size={18} />
              Abrir en Google Maps
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </div>

          <div className="relative group order-1 lg:order-2">
            {/* Map Container with Frame Effect */}
            <div className="h-[300px] md:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 relative shadow-2xl transition-all duration-700 group-hover:border-[#ff4d00]/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6635!2d-3.70379!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="transition-all duration-1000 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
              ></iframe>
              
              {/* Overlay Gradient for integration */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge on Map */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">Abierto Ahora</span>
              </div>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-t-4 border-r-4 border-[#ff4d00] rounded-tr-[30px] md:rounded-tr-[40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-b-4 border-l-4 border-[#ff4d00] rounded-bl-[30px] md:rounded-bl-[40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
