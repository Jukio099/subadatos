
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

        <Tabs defaultValue="embedded" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="embedded">Panel Integrado</TabsTrigger>
            <TabsTrigger value="external">Panel Externo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="embedded" className="border rounded-lg bg-white shadow-md">
            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              <iframe 
                src="https://dashboard-oficial.onrender.com" 
                className="w-full h-full border-0"
                title="Dashboard Integrado"
                sandbox="allow-scripts allow-same-origin allow-forms"
              ></iframe>
            </div>
          </TabsContent>
          
          <TabsContent value="external" className="text-center p-10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Acceso directo al Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Haz clic en el botón de abajo para abrir el dashboard en una nueva ventana para una mejor experiencia.
              </p>
              <a 
                href="https://dashboard-oficial.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-nature-600 hover:bg-nature-700 text-white rounded-md font-medium transition-colors"
              >
                Abrir Dashboard Completo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
