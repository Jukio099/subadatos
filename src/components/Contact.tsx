import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-nature-800" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-white">Contáctanos</h2>
          <div className="h-1 w-20 bg-earth-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-200">
            Estamos aquí para responder a sus preguntas y proporcionarle toda la información que necesite 
            sobre nuestros productos y servicios.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-nature-800">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-nature-600 hover:bg-nature-700 text-white"
              >
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-nature-800">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-nature-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-nature-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Carrera 20 #15-42<br />
                    Yopal, Casanare<br />
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
                    +57 312 456 7890<br />
                    +57 8 635 7890
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
                    info@semillaspastoyopal.com<br />
                    ventas@semillaspastoyopal.com
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
      </div>
    </section>
  );
};

export default Contact;
