// src/components/Hero.jsx

import React from 'react';
import heroImage from '../assets/hero-familia.jpg'; // reemplaza con tu imagen real

const Hero = () => {
  return (
    <section className="bg-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="flex-1 text-left">
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
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Explora las mejores cámaras
          </a>
        </div>

        {/* Imagen */}
        <div className="flex-1">
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

