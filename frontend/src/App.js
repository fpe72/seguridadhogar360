import React from 'react';
import ProductoDestacado from './components/ProductoDestacado';

function App() {
  const productos = [
    {
      nombre: "Xiaomi Smart Camera C300 – Cámara de vigilancia 360°",
      imagen: "https://m.media-amazon.com/images/I/51FdZdprvUL._AC_SY879_.jpg",
      descripcion: "Cámara WiFi 2K para interiores con detección de movimiento y visión nocturna.",
      enlace: "https://www.amazon.es/dp/B0D3LH4KJM?tag=seguhogar360-21&th=1",
    },
    {
      nombre: "TP-Link Tapo C210 – Cámara de vigilancia 3MP",
      imagen: "https://m.media-amazon.com/images/I/71JinTSkaQL._AC_SX679_.jpg",
      descripcion: "Cámara WiFi motorizada con resolución 3MP, visión nocturna y seguimiento.",
      enlace: "https://www.amazon.es/dp/B095CLQ1PT?tag=seguhogar360-21&th=1",
    },
    {
      nombre: "EZVIZ C6N – Cámara interior motorizada",
      imagen: "https://m.media-amazon.com/images/I/512pIYxX31S._AC_SX679_.jpg",
      descripcion: "Cámara domo 1080P con audio bidireccional y control remoto desde app móvil.",
      enlace: "https://www.amazon.es/dp/B07W4FMSD9?tag=seguhogar360-21&th=1",
    },
  ];
    

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Seguridad Hogar 360</h1>
      <>
        {productos.map((producto, index) => (
          <ProductoDestacado key={index} {...producto} />
        ))}
  
        <p style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center', marginTop: '40px', maxWidth: 600, marginInline: 'auto' }}>
          SeguridadHogar360 participa en el Programa de Afiliados de Amazon EU. Esto significa que podríamos recibir una comisión por las compras realizadas a través de los enlaces de esta página, sin que ello suponga un coste adicional para ti. Toda la información es orientativa y no constituye asesoramiento profesional.
        </p>
      </>
    </div>
  );
  

}

export default App;
