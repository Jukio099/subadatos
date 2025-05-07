
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Dashboard = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Dashboard - SUBADATOS';
    
    // Handle external iframe messaging if needed
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://dashboard-oficial.onrender.com') {
        console.log('Message received from dashboard:', event.data);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container-custom max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Panel de Control</h1>
          <p className="text-gray-600">Accede a todos nuestros datos y análisis</p>
        </div>

        <Tabs defaultValue="founder" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="founder">Nuestro Fundador</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="founder" className="border rounded-lg bg-white shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="h-48 w-48 border-4 border-nature-500">
                  <AvatarImage 
                    src="/lovable-uploads/8af72ab5-daeb-4500-92dc-a960ba32cb9f.png" 
                    alt="Julio César Rodríguez" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">JCR</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-2xl font-bold text-nature-700 mb-2">Julio César Rodríguez</h2>
                <h3 className="text-lg font-semibold text-nature-600 mb-4">Fundador y Director Ejecutivo</h3>
                
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Economista graduado de la Pontificia Universidad Javeriana con especialización en 
                    Inteligencia Artificial aplicada al análisis de datos empresariales.
                  </p>
                  <p className="text-gray-700">
                    Con más de 8 años de experiencia en análisis económico y estadístico, Julio César 
                    ha liderado proyectos de transformación digital para importantes empresas 
                    en Colombia y América Latina.
                  </p>
                  <p className="text-gray-700">
                    Su visión de democratizar el acceso a herramientas avanzadas de análisis de datos 
                    lo llevó a fundar SUBADATOS, combinando su conocimiento en economía con las 
                    últimas tecnologías en IA.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Economía
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Inteligencia Artificial
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Análisis de Datos
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Consultoría Empresarial
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dashboard" className="border rounded-lg bg-white shadow-md">
            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              <iframe 
                src="https://dashboard-oficial.onrender.com" 
                className="w-full h-full border-0"
                title="Dashboard Integrado"
                sandbox="allow-scripts allow-same-origin allow-forms"
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
