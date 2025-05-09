import React from 'react';
import ProductoDestacado from './components/ProductoDestacado';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Seguridad Hogar 360</h1>
      <ProductoDestacado
        nombre="Cámara Xiaomi 360º 2K"
        imagen="https://m.media-amazon.com/images/I/61ri5uhjATL._AC_SL1500_.jpg"
        descripcion="Cámara de vigilancia interior con visión 360°, resolución 2K, compatible con Alexa y Google Home."
        enlace="https://www.amazon.es/dp/B08HRPDYTP?tag=TU_TAG_AFILIADO"
      />
    </div>
  );
}

export default App;
