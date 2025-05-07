
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if(position.top < window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Run once on load
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-on-scroll visible">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformando la agricultura en <span className="text-nature-400">Yopal</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Las mejores semillas de pasto para su ganadería. Potenciamos su producción con soluciones sostenibles y de alta calidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-nature-600 hover:bg-nature-700 text-white text-lg py-6 px-8"
              onClick={() => scrollToSection('productos')}
            >
              Nuestros Productos
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
        <button 
          onClick={() => scrollToSection('nosotros')} 
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
