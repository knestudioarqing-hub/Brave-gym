
import React from 'react';
import { Dumbbell, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.features.f1Title,
      description: t.features.f1Desc,
      icon: <Dumbbell className="text-[#ff4d00]" size={32} />,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: t.features.f2Title,
      description: t.features.f2Desc,
      icon: <Users className="text-[#ff4d00]" size={32} />,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop'
    },
    {
      title: t.features.f3Title,
      description: t.features.f3Desc,
      icon: <Zap className="text-[#ff4d00]" size={32} />,
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-[#ff4d00] font-bold uppercase tracking-[0.3em] text-xs md:text-sm block mb-4">{t.features.subtitle}</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight max-w-2xl leading-[0.95]">
            {t.features.titleStart} <span className="text-gray-600">{t.features.titleEnd}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/5 bg-zinc-900/50 hover:border-[#ff4d00]/30 transition-all cursor-pointer"
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="bg-black/50 backdrop-blur-md w-fit p-3 md:p-4 rounded-2xl mb-4 md:mb-6 group-hover:bg-[#ff4d00]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-[#ff4d00] transition-colors">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-white transition-colors">{feature.description}</p>
                
                <div className="mt-6 md:mt-8 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                  <button className="text-[#ff4d00] font-bold flex items-center group/btn text-sm">
                    {t.features.readMore} 
                    <ArrowIcon className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Features;
