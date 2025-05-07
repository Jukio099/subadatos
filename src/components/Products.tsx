
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "Brachiaria Decumbens",
    description: "Excelente para suelos ácidos y de baja fertilidad. Alta resistencia a la sequía.",
    image: "https://images.unsplash.com/photo-1595841055318-5f7cf2d3146f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["Resistente a sequías", "Ideal para suelos ácidos", "Alta producción forrajera"]
  },
  {
    id: 2,
    name: "Brachiaria Brizantha",
    description: "Alta producción de forraje de calidad. Tolera bien la sombra y se adapta a diversos suelos.",
    image: "https://images.unsplash.com/photo-1530176612918-a34156dc9071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["Alta capacidad nutritiva", "Rápido establecimiento", "Tolera pisoteo intenso"]
  },
  {
    id: 3,
    name: "Panicum Maximum",
    description: "Elevada producción de materia seca y excelente palatabilidad para el ganado.",
    image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    features: ["Alto valor nutritivo", "Gran adaptabilidad", "Excelente palatabilidad"]
  },
  {
    id: 4,
    name: "Pasto Toledo",
    description: "Ideal para sistemas intensivos de producción. Alta conversión en carne y leche.",
    image: "https://images.unsplash.com/photo-1594280457532-a25b2522af9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1580&q=80",
    features: ["Alta conversión", "Tolera suelos pesados", "Rápida recuperación"]
  }
];

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
        <h3 className="font-bold text-xl mb-3 text-nature-800">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-5">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-nature-500 inline-block"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full border-nature-600 text-nature-700 hover:bg-nature-50">
          Más Información <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
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
            Ofrecemos una amplia variedad de semillas de pasto de alta calidad, seleccionadas específicamente para las condiciones del suelo y clima de la región. Todas nuestras semillas cuentan con certificación de pureza y germinación.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Button 
            className="bg-earth-600 hover:bg-earth-700 text-white py-6 px-8"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
