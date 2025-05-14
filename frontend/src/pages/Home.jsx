import React, { useState } from 'react';
import ProductoDestacado from '../components/ProductoDestacado';
import ModalProducto from '../components/ModalProducto';
import productos from '../data/productos';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Beneficios from '../components/Beneficios';

const Home = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div className="Home">
      <Header />
      <Hero />
      <Beneficios />
      {/* Sección de productos */}
      <div id="productos" className="pt-32 mt-[-8rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {productos.map((producto, index) => (
          <ProductoDestacado
            key={index}
            {...producto}
            onClick={() => setProductoSeleccionado(producto)}
          />
        ))}
      </div>

      {/* Modal */}
      <ModalProducto
        producto={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
      />

      <Footer />
    </div>
  );
};

export default Home;
