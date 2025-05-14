// src/components/Beneficios.jsx

import React, { useState } from 'react';
import ModalBeneficio from './ModalBeneficio';
import { beneficios } from '../data/beneficios';

const Beneficios = () => {
  const [activo, setActivo] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
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
