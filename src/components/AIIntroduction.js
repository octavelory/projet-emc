// src/components/AIIntroduction.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/AIIntroduction.css';

function AIIntroduction() {
  return (
    <main>
      <h2>Présentation de l'IA</h2>
      <Outlet />
    </main>
  );
}

export default AIIntroduction;
