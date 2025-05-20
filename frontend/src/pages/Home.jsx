import React, { useState } from 'react';
import ProductoDestacado from '../components/ProductoDestacado';
import ModalProducto from '../components/ModalProducto';
import productos from '../data/productos';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Beneficios from '../components/Beneficios';
import FiltroProductos from '../components/FiltroProductos';
import ModalComparador from "../components/ModalComparador";
import GeneradorProducto from "../components/GeneradorProducto";
import { Helmet } from 'react-helmet';

const Home = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [filtrosActivos, setFiltrosActivos] = useState({});

  const filtrarProductos = (producto) => {
    const f = producto.filtros || {};
    return Object.entries(filtrosActivos).every(([clave, valor]) => {
      if (!valor) return true; // si el filtro está vacío o false, lo ignoramos
  
      if (clave === "resolucion") {
        return f.resolucion === valor;
      }
  
      return f[clave] === true;
    });
  };
    
  const productosFiltrados = productos.filter(filtrarProductos);
  const [comparador, setComparador] = useState([]);
  const mostrarBotonComparar = comparador.length >= 2;
  const [mostrarComparador, setMostrarComparador] = useState(false);

  return (
    <>
    <Helmet>
      <title>Cámaras WiFi para tu hogar | SeguridadHogar360</title>
      <meta name="description" content="Compara y elige la mejor cámara WiFi para tu hogar. Recomendaciones claras, datos reales y una guía emocional para proteger lo que más quieres." />
      <link rel="canonical" href="https://www.seguridadhogar360.com/" />
      {/* Open Graph */}
      <meta property="og:title" content="SeguridadHogar360 | Cámaras WiFi para proteger tu hogar" />
      <meta property="og:description" content="Comparativas útiles, valoraciones reales y recomendaciones para encontrar la cámara WiFi perfecta para tu hogar." />
      <meta property="og:image" content="https://www.seguridadhogar360.com/og-image.jpg" />
      <meta property="og:url" content="https://www.seguridadhogar360.com/" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "SeguridadHogar360 | Cámaras WiFi para el hogar",
              "url": "https://www.seguridadhogar360.com",
              "description": "Compara y elige la mejor cámara WiFi para tu hogar. Recomendaciones claras, datos reales y una guía emocional para proteger lo que más quieres.",
              "publisher": {
                "@type": "Organization",
                "name": "SeguridadHogar360",
                "url": "https://www.seguridadhogar360.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.seguridadhogar360.com/logo.png"
                }
              }
            }
          `}
       </script>
    </Helmet>
      <div className="Home">
      <Header />
      <Hero />
      <h2 className="sr-only">Beneficios de nuestras cámaras WiFi</h2>
      <Beneficios />
        <section className="py-12 bg-gray-50">
        {process.env.NODE_ENV === "development" && (
          <GeneradorProducto />
        )}
        </section>
      {/* Sección de productos */}
      <section id="productos" className="relative scroll-mt-32 py-12 px-6 bg-white">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Las mejores cámaras WiFi para tu hogar: protege a tu familia, mascotas y todo lo que más quieres
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
            Analizamos, comparamos y te guiamos con claridad para que elijas la cámara de vigilancia WiFi ideal para interiores o exteriores, bebés, mayores o mascotas.
          </p>

        {/* Filtros visuales */}
        <div className="max-w-6xl mx-auto mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Filtra por características
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Filtra por tipo, resolución, visión nocturna, compatibilidad con asistentes y más. Encuentra la cámara perfecta según tus necesidades reales.
        </p>

          <FiltroProductos onChange={setFiltrosActivos} />
        </div>
        {/* Productos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {productosFiltrados.map((producto, index) => (
            <ProductoDestacado
              key={index}
              {...producto}
              comparador={comparador}
              setComparador={setComparador}
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
      {mostrarBotonComparar && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setMostrarComparador(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Comparar cámaras seleccionadas ({comparador.length})
          </button>
        </div>
      )}
      {mostrarComparador && (
        <ModalComparador
          productos={comparador}
          setComparador={setComparador}
          onClose={() => setMostrarComparador(false)}
        />
      )}

      <Footer />
    </div>
    </>
  );
};

export default Home;
