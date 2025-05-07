
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-nature-800">Semillas<span className="text-earth-500">Pasto</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="text-foreground hover:text-nature-600 transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')} 
            className="text-foreground hover:text-nature-600 transition-colors"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('productos')} 
            className="text-foreground hover:text-nature-600 transition-colors"
          >
            Productos
          </button>
          <button 
            onClick={() => scrollToSection('beneficios')} 
            className="text-foreground hover:text-nature-600 transition-colors"
          >
            Beneficios
          </button>
          <button 
            onClick={() => scrollToSection('testimonios')} 
            className="text-foreground hover:text-nature-600 transition-colors"
          >
            Testimonios
          </button>
          <Button
            variant="default" 
            className="bg-nature-600 hover:bg-nature-700 text-white"
            onClick={() => scrollToSection('contacto')}
          >
            Contáctanos
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Testimonios
            </button>
            <Button
              variant="default"
              className="bg-nature-600 hover:bg-nature-700 text-white w-full"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
