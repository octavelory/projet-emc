// src/components/AISocietalImpact.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/AISocietalImpact.css';

function AISocietalImpact() {
  return (
    <main>
      <h2>Influence de l'IA sur la Société</h2>
      <Outlet />
    </main>
  );
}

export default AISocietalImpact;