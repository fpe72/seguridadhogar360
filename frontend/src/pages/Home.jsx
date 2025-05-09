// src/pages/Home.jsx

import React from 'react';
import ProductoDestacado from '../components/ProductoDestacado';
import productos from '../data/productos';
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <div className="Home">
      {/* ✅ Nueva cabecera profesional */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo temporal en SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          </svg>
          <span className="text-xl font-bold text-gray-800">Seguridad Hogar 360</span>
        </div>
        <nav className="space-x-4">
          <Link to="/guias" className="text-sm text-gray-700 hover:text-blue-600 transition">
            Guías de instalación
          </Link>
          <Link to="/comparativas" className="text-sm text-gray-700 hover:text-blue-600 transition">
            Comparativas
          </Link>
        </nav>
      </header>
  
      {/* ✅ Sección de productos */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {productos.map((producto, index) => (
          <ProductoDestacado key={index} {...producto} />
        ))}
      </div>
  
      {/* ✅ Aviso legal Amazon */}
      <p className="text-sm text-gray-600 text-center mt-10 max-w-xl mx-auto px-4">
        SeguridadHogar360 participa en el Programa de Afiliados de Amazon EU. Esto significa que podríamos recibir una comisión por las compras realizadas a través de los enlaces de esta página, sin que ello suponga un coste adicional para ti. Toda la información es orientativa y no constituye asesoramiento profesional.
      </p>
    </div>
  );
     };

export default Home;
