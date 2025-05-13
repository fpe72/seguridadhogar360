// src/components/Header.jsx

import React from 'react';
import logo from '../assets/logo.png'; // Usa tu logo real

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Seguridad Hogar 360" className="h-16 w-auto" />
          <span className="text-xl font-bold text-gray-800">Seguridad Hogar 360</span>
        </div>
        {/* navegación futura desactivada */}
        {/* <nav className="text-sm text-gray-600">Guías · Comparativas</nav> */}
      </div>
    </header>
  );
};

export default Header;
