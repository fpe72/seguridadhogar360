// src/components/ModalBeneficio.jsx
import React from 'react';

const ModalBeneficio = ({ beneficio, onClose }) => {
  if (!beneficio) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-md p-4 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
       <img
        src={beneficio.imagen}
        alt={beneficio.texto}
        className="w-full max-h-[300px] object-contain rounded-md mb-4"
      />

        <h2 className="text-xl font-semibold mb-2">{beneficio.texto}</h2>
        <p className="text-gray-700 text-sm">{beneficio.descripcion}</p>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-60 transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ModalBeneficio;
