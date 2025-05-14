// src/components/ProductoDestacado.jsx
import React from 'react';

const ProductoDestacado = ({ nombre, imagen, descripcion, enlace, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col items-center text-center transition hover:shadow-lg"
    >
      <img
        src={imagen}
        alt={nombre}
        className="h-[220px] w-auto mx-auto object-contain bg-white rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-4">{descripcion}</p>

      <a
        href={enlace}
        onClick={(e) => e.stopPropagation()} // ⛔ evita que se abra el modal al clicar en el enlace
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Ver en Amazon
      </a>
    </div>
  );
};

export default ProductoDestacado;
