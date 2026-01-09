
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-[#ff4d00] text-black py-2 px-4 text-center text-sm font-bold tracking-tight">
        ¡Oferta por tiempo limitado! Obtén un 20% de descuento en todos los esenciales del gimnasio.
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
