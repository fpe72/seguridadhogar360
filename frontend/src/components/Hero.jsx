// src/components/Hero.jsx

import React from 'react';
import heroImage from '../assets/hero-familia.jpg'; // reemplaza con tu imagen real
import logoIcono from '../assets/logo.png';

const Hero = () => {
  return (
<section className="bg-white pt-24 pb-6 px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Columna 1: Texto y Botón */}
    <div className="flex-1 text-left flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Protege lo que más quieres
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Sentirte cerca de tu hogar, incluso cuando estás lejos. Cámaras WiFi que te ofrecen tranquilidad, no solo vigilancia.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Especialistas en cámaras de seguridad WiFi para el hogar · Seguridad Hogar 360
      </p>
      <a
        href="#productos"
        className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Explora las mejores cámaras
      </a>

    </div>

    {/* Columna 2: Logo, solo visible en desktop */}
    <div className="hidden md:flex flex-col items-center flex-shrink-0">
      <img
        src={logoIcono}
        alt="Logo Seguridad Hogar 360"
        className="w-32 h-auto"
      />
    </div>

    {/* Columna 3: Imagen Familia */}
    <div className="flex-1 flex items-center">
      <img
        src={heroImage}
        alt="Familia segura en casa"
        className="w-full max-w-lg mx-auto rounded-2xl shadow-xl"
      />
    </div>
  </div>
</section>


  );
};

export default Hero;

