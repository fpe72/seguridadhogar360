const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generar-producto', (req, res) => {
  const data = req.body;

  const bloque = `{
  nombre: "${data.nombre}",
  imagen: "${data.imagen}",
  descripcion: "${data.descripcion}",
  enlace: "${data.enlace}",
  detalles: {
    ideal_para: "${data.ideal_para}",
    caracteristicas: [
      ${data.caracteristicas.map(c => `"${c}"`).join(",\n      ")}
    ]
  },
  valoracion: ${data.valoracion},
  resenas: ${data.resenas},
  ventas_ultimo_anio: "${data.ventas_ultimo_anio}",
  filtros: {
    interior: ${data.filtros.interior},
    exterior: ${data.filtros.exterior},
    movil: ${data.filtros.movil},
    fija: ${data.filtros.fija},
    resolucion: "${data.filtros.resolucion}",
    visionNocturna: ${data.filtros.visionNocturna},
    audioBidireccional: ${data.filtros.audioBidireccional},
    deteccionMovimiento: ${data.filtros.deteccionMovimiento},
    almacenamientoSD: ${data.filtros.almacenamientoSD},
    enmascaramientoZonas: ${data.filtros.enmascaramientoZonas},
    compatibleAlexa: ${data.filtros.compatibleAlexa}
  }
}`;

  res.send({ resultado: bloque });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
