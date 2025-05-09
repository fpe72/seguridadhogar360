import React from 'react';
import { Link } from 'react-router-dom';

const Comparativas = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Comparativas de cámaras 2025
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Análisis detallado de las mejores cámaras para hogar según calidad, precio, características y opiniones.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border p-4 rounded-md shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg text-cyan-800">
            Top 5 cámaras 360° para interiores
          </h2>
          <p className="text-gray-700 text-sm mt-1">Las cámaras más valoradas por su visión panorámica y detección de movimiento.</p>
        </div>
        <div className="border p-4 rounded-md shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg text-cyan-800">
            Mejores cámaras económicas con visión nocturna
          </h2>
          <p className="text-gray-700 text-sm mt-1">Comparativa de dispositivos por menos de 40€ con excelente rendimiento nocturno.</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          ← Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default Comparativas;
