
import React from 'react';
import { BadgeCheck, ArrowRight, CheckSquare } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-nature-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-earth-100 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">¿Por qué elegirnos?</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            En Semillas Pasto Yopal ofrecemos beneficios únicos que nos distinguen en el mercado, 
            garantizando la satisfacción de nuestros clientes y el éxito de sus pasturas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BadgeCheck className="h-8 w-8 text-nature-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Máxima Calidad Garantizada</h3>
            <p className="text-gray-600 mb-4">
              Todas nuestras semillas pasan por rigurosos controles de calidad para asegurar 
              altos porcentajes de germinación y pureza.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Certificación de calidad</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Pruebas de germinación</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Garantía de pureza varietal</span>
              </li>
            </ul>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-nature-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Asesoría Técnica Especializada</h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo de expertos agrónomos le brinda asesoramiento personalizado 
              para maximizar el rendimiento de sus pasturas.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Diagnóstico de suelos</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Plan de establecimiento</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Seguimiento técnico</span>
              </li>
            </ul>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-nature-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Variedades Adaptadas al Clima</h3>
            <p className="text-gray-600 mb-4">
              Ofrecemos especies seleccionadas específicamente para las condiciones 
              climáticas y de suelo de la región de Yopal y Casanare.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Resistencia a sequías</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Adaptación a suelos locales</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Mayor productividad</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-nature-50 p-8 rounded-lg border border-nature-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2 text-nature-800">¿Listo para mejorar sus pasturas?</h3>
              <p className="text-gray-600">
                Contáctenos hoy mismo para recibir una asesoría personalizada y conocer todas nuestras soluciones
              </p>
            </div>
            <button 
              className="flex items-center bg-nature-600 hover:bg-nature-700 text-white py-3 px-6 rounded-lg transition-colors"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Información
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
