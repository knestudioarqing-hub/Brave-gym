
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Gallery from './components/Gallery.tsx';
import Stats from './components/Stats.tsx';
import Testimonials from './components/Testimonials.tsx';
import LocationMap from './components/LocationMap.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

const AppContent: React.FC = () => {
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
              top: element.offsetTop - 100, // Adjusted offset for fixed navbar
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Gallery />
        <Testimonials />
        <LocationMap />
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
