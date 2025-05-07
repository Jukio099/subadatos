import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, ChartLine, Leaf, Scale, Tag } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "Análisis de Datos",
    price: "$100.000/hora",
    description: "Servicios de análisis de datos para aumentar la eficiencia y rentabilidad de su empresa.",
    image: "/lovable-uploads/fb7b2fb0-41bf-4e3e-a48e-494045052acd.png",
    features: ["Toma de decisiones basada en datos", "Visualización de datos", "Informes personalizados"],
    iconName: "ChartLine",
    boldLink: "https://checkout.bold.co/payment/LNK_WIL80MQCBS"
  },
  {
    id: 2,
    name: "Brachiaria Humidicola",
    price: "$89.000/kg",
    description: "Semilla incrustada para zonas húmedas. Resistente a la sequía y suelos pobres.",
    image: "/lovable-uploads/d1b7a494-e5ea-4b34-ad71-70849c067acd.png",
    features: ["Excelente para suelos pobres", "Resistente a sequías", "Alta producción de forraje"],
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Brachiaria Decumbens",
    price: "$21.200/kg",
    description: "Semilla incrustada ideal para zonas con precipitaciones moderadas. Excelente para el ganado.",
    image: "/lovable-uploads/afb51770-ae33-4bc9-b163-4a4950946883.png",
    features: ["Incrustada para mayor germinación", "Ideal para ganado bovino", "Alta resistencia"],
    iconName: "Leaf"
  },
  {
    id: 4,
    name: "Básculas",
    price: "Consultar precio",
    description: "Básculas de precisión para el pesaje de ganado en su finca.",
    image: "/lovable-uploads/aea2a7de-ba3d-4483-91da-718db6980336.png",
    features: ["Alta precisión", "Fácil instalación", "Servicio técnico"],
    iconName: "Scale"
  }
];

// Helper function to render the appropriate icon
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "ChartLine":
      return <ChartLine className="h-8 w-8 text-nature-600" />;
    case "Leaf":
      return <Leaf className="h-8 w-8 text-nature-600" />;
    case "Scale":
      return <Scale className="h-8 w-8 text-nature-600" />;
    default:
      return <ChartLine className="h-8 w-8 text-nature-600" />;
  }
};

const ProductCard = ({ product }: { product: typeof productsData[0] }) => {
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // Data analysis product uses direct Bold link
    if (product.id === 1) {
      window.open(product.boldLink, '_blank');
      return;
    }
    
    // For other products, just show WhatsApp message (don't use Bold checkout)
    const whatsappLink = getWhatsappLink(product);
    window.open(whatsappLink, '_blank');
  };
  
  return (
    <div className="animate-on-scroll">
      <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="relative w-full md:w-2/5">
            <AspectRatio ratio={4/3} className="h-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
              />
            </AspectRatio>
            
            {/* Price Tag */}
            <div className="absolute top-0 left-0">
              <Badge className="m-3 px-3 py-1.5 bg-earth-500 text-white font-semibold text-sm shadow-md">
                <Tag className="mr-1 h-3.5 w-3.5" /> {product.price}
              </Badge>
            </div>
          </div>
          
          {/* Product Content */}
          <div className="flex flex-col p-5 md:p-6 w-full md:w-3/5 justify-between">
            {/* Icon and Title */}
            <div className="mb-3">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-md bg-nature-50 mr-3">
                  {renderIcon(product.iconName)}
                </div>
                <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
            
            {/* Features List */}
            <div className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-nature-500 flex-shrink-0"></span>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
              {/* Payment Button */}
              <Button 
                onClick={handleCheckout}
                className="bg-nature-600 hover:bg-nature-700 text-white transition-all duration-300 group flex-1"
              >
                {product.id === 1 ? "Ir a Bold" : "Contactar por WhatsApp"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              {/* WhatsApp Button */}
              <a 
                href={getWhatsappLink(product)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  variant="outline"
                  className="w-full border-nature-600 text-nature-600 hover:bg-nature-50"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Consultar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
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
        
        <div className="grid gap-8 mx-auto">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll flex items-center justify-center">
          <a 
            href={dataServicesWhatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="bg-earth-600 hover:bg-earth-700 text-white py-6 px-8 rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
