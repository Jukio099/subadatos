
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Campo de pasto" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-nature-50 p-5 rounded-lg shadow-lg border-l-4 border-nature-500 hidden md:block">
                <p className="font-bold text-xl">15+ años</p>
                <p className="text-gray-600">de experiencia</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-2 text-gradient">Quiénes Somos</h2>
            <div className="h-1 w-20 bg-nature-500 mb-6 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6">La mejor opción en semillas de pasto en Casanare</h3>
            <p className="text-gray-700 mb-6">
              Desde hace más de 15 años, en SUBADATOS nos dedicamos a proporcionar a los ganaderos y agricultores de la región las mejores variedades de semillas de pasto, adaptadas específicamente a las condiciones del suelo y clima de Casanare.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro compromiso es contribuir al desarrollo sostenible de la ganadería regional mediante productos de alta calidad y un servicio técnico especializado que garantice el éxito de su inversión.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-nature-600 h-6 w-6 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Calidad Certificada</h4>
                  <p className="text-sm text-gray-600">Semillas con altos estándares de germinación</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-nature-600 h-6 w-6 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Asesoría Técnica</h4>
                  <p className="text-sm text-gray-600">Expertos a su disposición</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-nature-600 h-6 w-6 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Variedades Adaptadas</h4>
                  <p className="text-sm text-gray-600">Ideales para el clima de Casanare</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-nature-600 h-6 w-6 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Resultados Garantizados</h4>
                  <p className="text-sm text-gray-600">Pasturas más productivas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
