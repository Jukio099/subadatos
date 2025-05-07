
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "Servicio de Datos",
    price: "Consultar precio",
    description: "Análisis avanzado de datos para optimizar procesos empresariales y toma de decisiones.",
    image: "/lovable-uploads/aea2a7de-ba3d-4483-91da-718db6980336.png",
    features: ["Análisis predictivo", "Dashboard personalizados", "Integración con sistemas"]
  },
  {
    id: 2,
    name: "Consultorías",
    price: "Consultar precio",
    description: "Asesoría especializada para implementar soluciones tecnológicas en su empresa.",
    image: "https://images.unsplash.com/photo-1530176612918-a34156dc9071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["Evaluación de procesos", "Implementación de sistemas", "Capacitación de personal"]
  }
];

const whatsappLink = "https://wa.me/573026836254?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

const ProductCard = ({ product }: { product: typeof productsData[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-on-scroll">
      <div className="h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xl text-nature-800">{product.name}</h3>
          <span className="bg-earth-100 text-earth-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {product.price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-5">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-nature-500 inline-block"></span>
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-block"
        >
          <Button variant="outline" className="w-full border-nature-600 text-nature-700 hover:bg-nature-50">
            Cotizar ahora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="productos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Nuestros Servicios</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Ofrecemos servicios de análisis de datos y consultoría empresarial para optimizar sus procesos y aumentar su rentabilidad. Contamos con asesores especializados para maximizar su inversión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-4xl">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="bg-earth-600 hover:bg-earth-700 text-white py-6 px-8"
            >
              <Phone className="mr-2 h-5 w-5" /> Consultar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
