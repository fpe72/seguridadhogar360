import React from 'react';
import { Link } from 'react-router-dom';

const Guias = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Guías de instalación y uso
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Descubre cómo instalar y utilizar tus cámaras de seguridad de forma sencilla y rápida.
      </p>

      <ul className="space-y-4">
        <li className="border p-4 rounded-md shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg text-cyan-800">Cómo instalar una cámara sin cables en 5 minutos</h2>
          <p className="text-gray-700 text-sm mt-1">Guía paso a paso con imágenes para una instalación doméstica rápida.</p>
        </li>
        <li className="border p-4 rounded-md shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg text-cyan-800">Dónde colocar tu cámara para máxima cobertura</h2>
          <p className="text-gray-700 text-sm mt-1">Ubicaciones estratégicas según tipo de vivienda y rango de visión.</p>
        </li>
      </ul>

      <div className="text-center mt-10">
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          ← Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default Guias;
