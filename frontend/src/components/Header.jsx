// src/components/Header.jsx

import React from 'react';
import logo from '../assets/logo.png'; // Usa tu logo real
import { ShieldCheck, Wifi, Home, Video } from 'lucide-react';


const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-0 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo Seguridad Hogar 360"
          className="h-20 sm:h-24 w-auto transition-all duration-300"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-gray-800">Seguridad Hogar 360</span>
          <span className="text-sm text-gray-500 whitespace-nowrap hidden sm:inline">
            Cámaras WiFi para proteger lo que más quieres
          </span>
        </div>
        <div className="hidden sm:flex gap-2 ml-4 text-blue-500 items-center">
        <ShieldCheck className="w-7 h-7" title="Seguridad" />
        <Home className="w-7 h-7" title="Hogar" />
        <Wifi className="w-7 h-7" title="WiFi" />
        <Video className="w-7 h-7" title="Videovigilancia" />
      </div>
      </div>
        {/* navegación futura desactivada */}
        {/* <nav className="text-sm text-gray-600">Guías · Comparativas</nav> */}
      </div>
    </header>
  );
};

export default Header;
