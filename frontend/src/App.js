// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guias from './pages/Guias';
import Comparativas from './pages/Comparativas';
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guias" element={<Guias />} />
      <Route path="/comparativas" element={<Comparativas />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
    </Routes>
  );
}

export default App;
