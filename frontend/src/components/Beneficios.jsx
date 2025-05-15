// src/components/Beneficios.jsx

import React, { useState } from 'react';
import ModalBeneficio from './ModalBeneficio';
import { beneficios } from '../data/beneficios';

const Beneficios = () => {
  const [activo, setActivo] = useState(null);

  return (
    <section className="relative bg-gray-50 pt-12 pb-28 px-6 overflow-hidden">
      <img
          src="/images/logo-fondo.png"
          alt="Logo Seguridad Hogar 360"
          className="absolute opacity-5 w-96 sm:w-[500px] left-1/2 top-12 -translate-x-1/2 z-0 pointer-events-none"
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Beneficios reales para tu día a día</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center cursor-pointer"
              onClick={() => b.descripcion && setActivo(b)}
            >
              {b.icon}
              <p className="mt-4 text-gray-700 font-medium">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal condicional */}
      <ModalBeneficio beneficio={activo} onClose={() => setActivo(null)} />
    </section>
  );
};

export default Beneficios;
