import React from "react";

const ModalComparador = ({ productos, onClose, setComparador }) => {
  if (!productos || productos.length < 2) return null;

  const atributos = [
    { clave: "resolucion", nombre: "Resolución" },
    { clave: "visionNocturna", nombre: "Visión nocturna" },
    { clave: "audioBidireccional", nombre: "Audio bidireccional" },
    { clave: "deteccionMovimiento", nombre: "Detección de movimiento" },
    { clave: "almacenamientoSD", nombre: "Almacenamiento SD" },
    { clave: "enmascaramientoZonas", nombre: "Enmascaramiento de zonas" },
    { clave: "compatibleAlexa", nombre: "Compatible con Alexa" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-xl p-6 overflow-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Comparativa de cámaras seleccionadas</h2>
        <p className="text-sm text-gray-600 text-center">
          Visualiza diferencias clave entre modelos: resolución, visión nocturna, detección, compatibilidad y más.
        </p>
        <div className="text-center mb-4">
          <button
            onClick={() => {
              setComparador([]);
              onClose();
            }}
            className="text-sm text-red-600 hover:underline"
          >
            Limpiar comparador
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold text-gray-700 border-b p-2">Atributo</th>
                {productos.map((prod, idx) => (
                  <th key={idx} className="text-sm font-semibold text-gray-700 border-b p-2 text-center relative w-36">
                  <button
                    onClick={() => setComparador(productos.filter((p, i) => i !== idx))}
                    className="absolute top-0 right-1 text-gray-400 hover:text-red-500 text-lg font-bold"
                    title="Quitar esta cámara del comparador"
                  >
                    ×
                  </button>
                
                  <img src={prod.imagen} alt={prod.nombre} className="h-16 mx-auto mb-1 object-contain" />
                
                  <div className="text-xs mb-1">{prod.nombre}</div>
                
                  {prod.enlace && (
                    <a
                      href={prod.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Ver en Amazon
                    </a>
                  )}
                </th>                
                ))}
              </tr>
            </thead>
            <tbody>
              {atributos.map((attr) => (
                <tr key={attr.clave} className="border-t">
                  <td className="p-2 text-sm font-medium text-gray-600">{attr.nombre}</td>
                  {productos.map((prod, idx) => (
                    <td key={idx} className="text-center p-2 text-sm">
                      {typeof prod.filtros[attr.clave] === "boolean"
                        ? prod.filtros[attr.clave]
                          ? "✅"
                          : "—"
                        : prod.filtros[attr.clave] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalComparador;
