// src/pages/Home.jsx

import React from 'react';
import ProductoDestacado from '../components/ProductoDestacado';
import productos from '../data/productos';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <h1 className="text-center mt-5 text-2xl font-semibold">
        Seguridad Hogar 360
      </h1>
      <div className="text-center mt-4">
        <Link to="/guias" className="text-blue-600 underline hover:text-blue-800">
          Ver guías de instalación →
        </Link>
        <Link to="/comparativas" className="text-blue-600 underline hover:text-blue-800">
          Ver comparativas →
        </Link>
      </div>

      <div className="mt-6 space-y-6">
        {productos.map((producto, index) => (
          <ProductoDestacado key={index} {...producto} />
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center mt-10 max-w-xl mx-auto px-4">
        SeguridadHogar360 participa en el Programa de Afiliados de Amazon EU. Esto significa que podríamos recibir una comisión por las compras realizadas a través de los enlaces de esta página, sin que ello suponga un coste adicional para ti. Toda la información es orientativa y no constituye asesoramiento profesional.
      </p>
    </div>
  );
};

export default Home;
