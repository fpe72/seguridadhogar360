import React from 'react';

const ProductoDestacado = ({ nombre, imagen, descripcion, enlace }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-xl p-4 text-center font-sans">
      <img src={imagen} alt={nombre} className="w-full rounded-lg mb-3" />
      <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
      <p className="text-gray-700 text-sm mb-3">{descripcion}</p>
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
      >
        Ver en Amazon
      </a>
    </div>
  );
};

export default ProductoDestacado;
