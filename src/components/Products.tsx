
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, ChartLine, Leaf, Scale } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const productsData = [
  {
    id: 1,
    name: "Análisis de Datos",
    price: "$100.000/hora",
    description: "Servicios de análisis de datos para aumentar la eficiencia y rentabilidad de su empresa.",
    image: "/lovable-uploads/fb7b2fb0-41bf-4e3e-a48e-494045052acd.png",
    features: ["Toma de decisiones basada en datos", "Visualización de datos", "Informes personalizados"],
    icon: <ChartLine className="h-8 w-8 text-nature-600" />
  },
  {
    id: 2,
    name: "Brachiaria Humidicola",
    price: "$89.000/kg",
    description: "Semilla incrustada para zonas húmedas. Resistente a la sequía y suelos pobres.",
    image: "/lovable-uploads/d1b7a494-e5ea-4b34-ad71-70849c067acd.png",
    features: ["Excelente para suelos pobres", "Resistente a sequías", "Alta producción de forraje"],
    icon: <Leaf className="h-8 w-8 text-nature-600" />
  },
  {
    id: 3,
    name: "Brachiaria Decumbens",
    price: "$21.200/kg",
    description: "Semilla incrustada ideal para zonas con precipitaciones moderadas. Excelente para el ganado.",
    image: "/lovable-uploads/afb51770-ae33-4bc9-b163-4a4950946883.png",
    features: ["Incrustada para mayor germinación", "Ideal para ganado bovino", "Alta resistencia"],
    icon: <Leaf className="h-8 w-8 text-nature-600" />
  },
  {
    id: 4,
    name: "Básculas",
    price: "Consultar precio",
    description: "Básculas de precisión para el pesaje de ganado en su finca.",
    image: "/lovable-uploads/aea2a7de-ba3d-4483-91da-718db6980336.png",
    features: ["Alta precisión", "Fácil instalación", "Servicio técnico"],
    icon: <Scale className="h-8 w-8 text-nature-600" />
  }
];

const getWhatsappLink = (product: typeof productsData[0]) => {
  let message = "";
  
  if (product.name === "Análisis de Datos") {
    message = "Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20análisis%20de%20datos%20a%20$100.000%20COP%20la%20hora.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  } else if (product.name.includes("Brachiaria")) {
    message = "Hola,%20estoy%20interesado%2Fa%20en%20sus%20pastos.%20Específicamente%20en%20" + encodeURIComponent(product.name) + ".%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  } else {
    message = "Hola,%20estoy%20interesado%2Fa%20en%20" + encodeURIComponent(product.name) + ".%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  }
  
  return `https://wa.me/573026836254?text=${message}`;
};

const ProductCard = ({ product }: { product: typeof productsData[0] }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md group animate-on-scroll hover:shadow-xl transition-all duration-300">
      <AspectRatio ratio={16/9} className="w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 flex flex-col justify-end transition-opacity">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl text-white">{product.name}</h3>
          <span className="bg-earth-100 text-earth-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {product.price}
          </span>
        </div>
        
        <p className="text-white/90 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="grid grid-cols-1 gap-2 mb-4">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-nature-500 flex-shrink-0"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <a 
          href={getWhatsappLink(product)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto"
        >
          <Button variant="outline" className="w-full border-nature-600 text-white hover:bg-nature-600 transition-colors duration-300">
            Cotizar ahora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  const dataServicesWhatsapp = "https://wa.me/573026836254?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20análisis%20de%20datos%20a%20$100.000%20COP%20la%20hora.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <section id="productos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Nuestros Servicios y Productos</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Ofrecemos servicios avanzados de análisis de datos para empresas y también las mejores variedades de semillas de pasto para Colombia, adaptadas específicamente a las condiciones del terreno.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href={dataServicesWhatsapp} 
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
