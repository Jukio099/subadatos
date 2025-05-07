
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "Brachiaria Decumbens",
    price: "21.200/kg",
    description: "Excelente para suelos ácidos y de baja fertilidad. Alta resistencia a la sequía.",
    image: "/lovable-uploads/aea2a7de-ba3d-4483-91da-718db6980336.png",
    features: ["Resistente a sequías", "Ideal para suelos ácidos", "Alta producción forrajera"]
  },
  {
    id: 2,
    name: "Brachiaria Humidicola",
    price: "89.000/kg",
    description: "Perfecta para zonas húmedas. Gran cobertura y resistencia al pisoteo del ganado.",
    image: "https://images.unsplash.com/photo-1530176612918-a34156dc9071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["Tolera inundación temporal", "Excelente cobertura", "Control de erosión"]
  },
  {
    id: 3,
    name: "Panicum Maximum",
    price: "Consultar precio",
    description: "Elevada producción de materia seca y excelente palatabilidad para el ganado.",
    image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    features: ["Alto valor nutritivo", "Gran adaptabilidad", "Excelente palatabilidad"]
  },
  {
    id: 4,
    name: "Pasto Toledo",
    price: "Consultar precio",
    description: "Ideal para sistemas intensivos de producción. Alta conversión en carne y leche.",
    image: "https://images.unsplash.com/photo-1594280457532-a25b2522af9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1580&q=80",
    features: ["Alta conversión", "Tolera suelos pesados", "Rápida recuperación"]
  }
];

const whatsappLink = "https://wa.me/573144423197?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20pastos%20para%20Casanare.%20Específicamente%20en%3A%0A-%20Brachiaria%20Humidicola%20incrustada%20%28%2489.000%2Fkg%29%0A-%20Brachiaria%20Decumbens%20incrustada%20%28%2421.200%2Fkg%29%0A%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%20o%20c%C3%B3mo%20realizar%20un%20pedido%3F";

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
            ${product.price}
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
          <h2 className="text-3xl font-bold mb-2 text-gradient">Nuestros Productos</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Ofrecemos semillas de pasto certificadas con garantía de germinación, ideales para el clima y suelo de Casanare y los Llanos Orientales. Contamos con asesoría técnica especializada para maximizar su inversión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
