// src/pages/Home.jsx

import React from 'react';
import ProductoDestacado from '../components/ProductoDestacado';
import productos from '../data/productos';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Beneficios from '../components/Beneficios';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Beneficios />
      {/* ✅ Sección de productos */}
      <div id="productos" className="pt-32 mt-[-8rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {productos.map((producto, index) => (
          <ProductoDestacado key={index} {...producto} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
