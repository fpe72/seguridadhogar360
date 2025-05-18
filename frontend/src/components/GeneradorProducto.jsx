import React, { useState } from "react";

const GeneradorProducto = () => {
  /* ---------- estado ---------- */
  const [form, setForm] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    enlace: "",
    resolucion: "1080p",
    ideal_para: "",
    caracteristicas: [],
    valoracion: "",
    resenas: "",
    ventas_ultimo_anio: "",
    filtros: {
      interior: false,
      exterior: false,
      movil: false,
      fija: false,
      visionNocturna: false,
      audioBidireccional: false,
      deteccionMovimiento: false,
      almacenamientoSD: false,
      enmascaramientoZonas: false,
      compatibleAlexa: false
    }
  });

  const [resultado, setResultado] = useState("");

  /* ---------- handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* bloque que enviaremos al backend */
    const datosParaBackend = {
      ...form,
      caracteristicas: form.caracteristicas.filter((c) => c.trim() !== ""),
      valoracion: parseFloat(form.valoracion),
      resenas: parseInt(form.resenas),
      filtros: form.filtros
    };

    try {
      const response = await fetch("http://localhost:3001/generar-producto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosParaBackend)
      });
      const data = await response.json();
      setResultado(data.resultado);
    } catch (error) {
      console.error("Error al generar:", error);
    }
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(resultado).then(() =>
      alert("Código copiado al portapapeles")
    );
  };

  /* ---------- UI ---------- */
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Generador de Cámara</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* datos básicos */}
        <input name="nombre" value={form.nombre} onChange={handleChange}
          placeholder="Nombre de la cámara" className="w-full border p-2 rounded" required />

        <input name="imagen" value={form.imagen} onChange={handleChange}
          placeholder="URL de la imagen" className="w-full border p-2 rounded" required />

        <input name="descripcion" value={form.descripcion} onChange={handleChange}
          placeholder="Descripción corta" className="w-full border p-2 rounded" />

        <input name="enlace" value={form.enlace} onChange={handleChange}
          placeholder="Enlace Amazon con tu tag" className="w-full border p-2 rounded" required />

        <select name="resolucion" value={form.resolucion} onChange={handleChange}
          className="w-full border p-2 rounded">
          <option value="1080p">1080p</option>
          <option value="2K">2K</option>
          <option value="3MP">3MP</option>
          <option value="4MP">4MP</option>
          <option value="4K">4K</option>
        </select>

        {/* ideal_para */}
        <textarea name="ideal_para" value={form.ideal_para} onChange={handleChange}
          placeholder="Ideal para..." className="w-full border p-2 rounded" rows={2} />

        {/* características dinámicas */}
        <div>
          <label className="block text-sm font-medium mb-1">Características</label>
          {(form.caracteristicas || []).map((c, i) => (
            <input key={i} type="text" value={c}
              onChange={(e) => {
                const arr = [...form.caracteristicas];
                arr[i] = e.target.value;
                setForm({ ...form, caracteristicas: arr });
              }}
              className="w-full border p-2 rounded mb-2"
              placeholder={`Característica ${i + 1}`} />
          ))}
          <button type="button"
            onClick={() =>
              setForm({ ...form, caracteristicas: [...form.caracteristicas, ""] })
            }
            className="text-sm text-blue-600 hover:underline">
            + Añadir característica
          </button>
        </div>

        {/* datos numéricos */}
        <input name="valoracion" type="number" step="0.1" value={form.valoracion}
          onChange={handleChange} placeholder="Valoración (ej: 4.5)"
          className="w-full border p-2 rounded" />

        <input name="resenas" type="number" value={form.resenas}
          onChange={handleChange} placeholder="Nº de reseñas (ej: 1200)"
          className="w-full border p-2 rounded" />

        <input name="ventas_ultimo_anio" value={form.ventas_ultimo_anio}
          onChange={handleChange} placeholder="Ventas estimadas último año"
          className="w-full border p-2 rounded" />

        {/* filtros */}
        <div>
          <h4 className="font-semibold mb-2">Filtros</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(form.filtros).map((f) => (
              <label key={f}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded text-sm">
                <input type="checkbox" checked={form.filtros[f]}
                  onChange={() =>
                    setForm({
                      ...form,
                      filtros: { ...form.filtros, [f]: !form.filtros[f] }
                    })}
                />
                {f.replace(/([A-Z])/g, " $1")}
              </label>
            ))}
          </div>
        </div>

        <button type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generar producto
        </button>
      </form>

      {/* bloque generado + botón copiar */}
      {resultado && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
            <span>Bloque generado:</span>
            <button onClick={copiarAlPortapapeles}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Copiar código
            </button>
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
            {resultado}
          </pre>
        </div>
      )}
    </div>
  );
};

export default GeneradorProducto;
