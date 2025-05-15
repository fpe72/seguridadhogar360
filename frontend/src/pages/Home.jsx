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
      <section id="productos" className="relative scroll-mt-32 py-20 px-6 bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Seleccionamos por ti las mejores cámaras para proteger lo que más quieres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {productos.map((producto, index) => (
              <ProductoDestacado
                key={index}
                {...producto}
                onClick={() => setProductoSeleccionado(producto)}
              />
            ))}
          </div>
        </section>
        
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
