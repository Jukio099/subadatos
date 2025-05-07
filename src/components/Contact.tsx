
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const whatsappLink = "https://wa.me/573026836254?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <section id="contacto" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-nature-800" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-white">Contáctanos</h2>
          <div className="h-1 w-20 bg-earth-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-200">
            Estamos aquí para asesorarte y ofrecerte los mejores servicios para tu empresa.
            Respondemos rápidamente por WhatsApp.
          </p>
          <div className="mt-6">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full text-white font-medium transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" /> Contactar por WhatsApp
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 animate-on-scroll max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-nature-800">Información de contacto</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dirección</h4>
                <p className="text-gray-600">
                  Colombia
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Teléfono</h4>
                <p className="text-gray-600">
                  +57 302 6836254<br />
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-earth-600 hover:underline"
                  >
                    Contactar por WhatsApp
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">
                  subadatos@gmail.com
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-semibold mb-2">Horario de atención</h4>
              <p className="text-gray-600">
                Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                Sábados: 8:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
