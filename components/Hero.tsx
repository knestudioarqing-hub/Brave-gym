
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-12 md:pt-48 md:pb-20 px-4 md:px-8 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <div className="relative z-10 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000 order-2 lg:order-1">
          <div className="inline-block bg-[#ff4d00]/10 border border-[#ff4d00]/20 text-[#ff4d00] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-black font-heading leading-[0.9] tracking-tighter">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2} <br />
            <span className="text-gray-400">{t.hero.titleLine3}</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#ff4d00] hover:bg-[#e64500] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold transition-all shadow-lg shadow-[#ff4d00]/20 transform hover:-translate-y-1 text-center">
              {t.hero.ctaPrimary}
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-[#ff4d00] hover:text-[#ff4d00] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold transition-all flex items-center justify-center group">
              {t.hero.ctaSecondary}
              <div className="ml-2 w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative animate-in fade-in zoom-in duration-1000 order-1 lg:order-2 mt-8 lg:mt-0">
          {/* Main Background Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#ff4d00] rounded-[60px] opacity-100 rotate-[-2deg] z-0"></div>
          
          {/* Floating Circle Badge - Hidden on very small screens to save space */}
          <div className="hidden sm:block absolute bottom-10 right-0 z-20 md:-right-10">
            <div className="relative w-28 h-28 md:w-40 md:h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="fill-white text-[12px] font-bold tracking-widest uppercase">
                  <textPath href="#circlePath">
                    {t.hero.circleText}
                  </textPath>
                </text>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#ff4d00] rounded-full"></div>
            </div>
          </div>

          {/* Floating Small Icon Box */}
          <div className="absolute top-10 left-0 md:top-20 md:left-4 z-20 bg-[#ff4d00] p-3 md:p-4 rounded-2xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform cursor-pointer group">
             <ArrowUpRight className="text-white group-hover:scale-110 transition-transform" size={24} />
          </div>

          {/* Main Character Image */}
          <img 
            src="https://storage.googleapis.com/msgsndr/WlnojMjrKnk5cMGiCAD4/media/6960503059bb4ad6831d5527.svg" 
            alt="Brave Gym Branding" 
            className="relative z-10 w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[30px] md:rounded-[50px] shadow-2xl border-4 border-black bg-black/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
