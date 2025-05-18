// src/components/ProductoDestacado.jsx
import React from 'react';

const ProductoDestacado = ({
  nombre,
  imagen,
  descripcion,
  enlace,
  onClick,
  valoracion,
  resenas,
  ventas_ultimo_anio,
  filtros,
  comparador,
  setComparador
}) => {

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
      {/* Checkbox de comparación */}
        <div className="mb-2 self-start">
          <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              if (e.target.checked) {
                if (comparador.length >= 4) {
                  alert("Solo puedes comparar hasta 4 cámaras.");
                  return;
                }
                setComparador([...comparador, {
                  nombre,
                  imagen,
                  descripcion,
                  valoracion,
                  resenas,
                  ventas_ultimo_anio,
                  filtros,
                  enlace
                }]);
              } else {
                setComparador(comparador.filter((c) => c.nombre !== nombre));
              }
            }}
            checked={comparador.some((c) => c.nombre === nombre)}
          />

            Añadir a comparador
          </label>
        </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-4">{descripcion}</p>
      {/* Valoraciones estadísticas */}
        {typeof valoracion !== 'undefined' && (
          <div className="text-sm text-gray-600 mb-4 space-y-1">
            <div className="font-semibold text-yellow-600">
              ⭐ {valoracion} / 5
            </div>
            <div>{resenas?.toLocaleString()} valoraciones</div>
            <div className="italic">{ventas_ultimo_anio}</div>
          </div>
        )}
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
