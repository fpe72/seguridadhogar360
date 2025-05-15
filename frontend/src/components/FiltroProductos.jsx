import React, { useState } from "react";

const FiltroProductos = ({ onChange }) => {
  const [filtros, setFiltros] = useState({
    interior: false,
    exterior: false,
    movil: false,
    fija: false,
    visionNocturna: false,
    audioBidireccional: false,
    deteccionMovimiento: false,
    almacenamientoSD: false,
    enmascaramientoZonas: false,
    compatibleAlexa: false,
    resolucion: ""
  });

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-wrap gap-4 items-center justify-start">
      {/* Select para resolución */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Resolución</label>
        <select
          value={filtros.resolucion}
          onChange={(e) => {
            const nuevosFiltros = {
              ...filtros,
              resolucion: e.target.value
            };
            setFiltros(nuevosFiltros);
            onChange(nuevosFiltros);
          }}
          className="w-52 border-gray-300 rounded px-3 py-2 text-sm shadow-sm"
        >
          <option value="">Todas</option>
          <option value="1080p">1080p</option>
          <option value="2K">2K</option>
          <option value="3MP">3MP</option>
          <option value="4MP">4MP</option>
          <option value="4K">4K</option>
        </select>
      </div>
  
      {/* Checkboxes */}
      {Object.keys(filtros)
        .filter((clave) => clave !== "resolucion") // evitamos duplicar resolución
        .map((clave) => (
          <label
            key={clave}
            className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded shadow"
          >
            <input
              type="checkbox"
              checked={filtros[clave]}
              onChange={() => {
                const nuevosFiltros = {
                  ...filtros,
                  [clave]: !filtros[clave]
                };
                setFiltros(nuevosFiltros);
                onChange(nuevosFiltros);
              }}
            />
            {clave.replace(/([A-Z])/g, " $1")}
          </label>
        ))}
    </div>
  );  
};

export default FiltroProductos;
