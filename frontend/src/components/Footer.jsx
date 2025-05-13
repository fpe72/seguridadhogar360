// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-8 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p>SeguridadHogar360 participa en el Programa de Afiliados de Amazon EU.</p>
        <p>Los productos recomendados pueden generar una comisión sin coste adicional para ti.</p>
        <div className="mt-4 flex justify-center gap-6 text-blue-600 font-medium">
          <a href="/aviso-legal" className="hover:underline">Aviso Legal</a>
          <a href="/politica-privacidad" className="hover:underline">Política de Privacidad</a>
          <a href="/contacto" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
