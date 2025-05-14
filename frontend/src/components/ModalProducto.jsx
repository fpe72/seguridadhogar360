// src/components/ModalProducto.jsx
import React from 'react';

const ModalProducto = ({ producto, onClose }) => {
  if (!producto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden relative animate-fadeIn">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Contenido del producto */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full md:w-1/2 h-auto object-contain rounded-md"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h2>
            <p className="text-gray-600 mb-4">{producto.detalles.ideal_para}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
              {producto.detalles.caracteristicas.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={producto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              Ver en Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
