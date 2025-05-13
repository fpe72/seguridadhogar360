// src/components/Beneficios.jsx

import React from 'react';
import { ShieldCheck, Baby, Dog, Smartphone, Eye } from 'lucide-react'; // o usa iconos nativos si prefieres
import { BellRing } from 'lucide-react';


const beneficios = [
  {
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    texto: "Controla a tu bebé desde cualquier lugar",
  },
  {
    icon: <Dog className="w-8 h-8 text-blue-600" />,
    texto: "Vigila a tus mascotas cuando no estás",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    texto: "Protege a tus mayores con tranquilidad",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-600" />,
    texto: "Detecta movimiento en tu hogar",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    texto: "Accede desde el móvil, estés donde estés",
  },
  {
    icon: <BellRing className="w-8 h-8 text-blue-600" />,
    texto: "Disuade a posibles intrusos con presencia visible",
  }   
];

const Beneficios = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Beneficios reales para tu día a día</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
            >
              {b.icon}
              <p className="mt-4 text-gray-700 font-medium">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
