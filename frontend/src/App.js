// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guias from './pages/Guias';
import Comparativas from './pages/Comparativas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guias" element={<Guias />} />
      <Route path="/comparativas" element={<Comparativas />} />
    </Routes>
  );
}

export default App;
