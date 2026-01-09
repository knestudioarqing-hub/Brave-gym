
import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 px-4 md:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter">
              ENCUÉNTRANOS EN <br /><span className="text-[#ff4d00]">LA CIUDAD</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin className="text-[#ff4d00]" />
                <p>Calle Falsa 123, Distrito de Atletas, CP 28001</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="text-[#ff4d00]" />
                <p>+34 900 800 700</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Clock className="text-[#ff4d00]" />
                <p>Abierto todos los días de 05:00 a 23:00</p>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-[#ff4d00] hover:text-white transition-all">
              <Navigation size={20} />
              Cómo llegar
            </button>
          </div>
          <div className="h-[400px] rounded-[40px] overflow-hidden border-4 border-white/5 relative group grayscale contrast-125">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6635!2d-3.70379!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
