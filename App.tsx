
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Stats from './components/Stats.tsx';
import Testimonials from './components/Testimonials.tsx';
import LocationMap from './components/LocationMap.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          e.preventDefault();
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-[#ff4d00] text-black py-2 px-4 text-center text-xs md:text-sm font-black uppercase tracking-tighter z-[100] relative">
        ¡Oferta por tiempo limitado! Obtén un 20% de descuento en todos los esenciales.
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <LocationMap />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
