import React from 'react';

const ProductoDestacado = ({ nombre, imagen, descripcion, enlace }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col items-center text-center transition hover:shadow-lg">
      <img
        src={imagen}
        alt={nombre}
        className="w-full max-w-xs h-auto mb-4 rounded-lg object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-4">{descripcion}</p>
      <a
        href={enlace}
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
