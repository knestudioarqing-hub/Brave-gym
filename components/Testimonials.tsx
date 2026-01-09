
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Atleta",
      content: "La calidad del equipamiento es inigualable. He visto resultados más rápido que con cualquier otro equipo de gimnasio que haya usado.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Sarah Miller",
      role: "Entrenadora de Fitness",
      content: "Brave Gym ha revolucionado la forma en que entreno a mis clientes. Las herramientas de seguimiento del rendimiento cambian las reglas del juego.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Marcus Thorne",
      role: "Fisicoculturista",
      content: "Los mejores productos en su clase. La estética del equipo coincide con la intensidad de mi entrenamiento.",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-4">Amado por nuestra <br /><span className="text-[#ff4d00]">comunidad.</span></h2>
            <p className="text-gray-400 max-w-md">Únete a más de 20,000 clientes felices que han mejorado su viaje fitness con nosotros.</p>
          </div>
          <div className="bg-[#ff4d00] p-6 rounded-3xl flex items-center space-x-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/50/50?random=${i+10}`} className="w-12 h-12 rounded-full border-4 border-[#ff4d00]" alt="usuario" />
                ))}
             </div>
             <div className="text-white">
                <div className="flex text-yellow-300 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold">Calificación promedio 4.9/5</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[40px] hover:border-[#ff4d00]/30 transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <img src={review.image} className="w-14 h-14 rounded-2xl object-cover" alt={review.name} />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-[#ff4d00] font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
