
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Productos Vendidos', value: '1,250+' },
    { label: 'Clientes Felices', value: '20K' },
    { label: 'Garantía de Calidad', value: '100%' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center md:text-left animate-in slide-in-from-bottom duration-700 w-full md:w-auto"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-1 md:mb-2 font-heading tracking-tighter">
              {stat.value}
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
