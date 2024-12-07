// src/components/AILimitations.js

import React from 'react';
import '../styles/AILimitations.css';

function AILimitations() {
  return (
    <section>
      <h3>Les Limites de l'IA</h3>
      <p>
        Malgré ses avantages, l'IA présente des limites :
      </p>
      <ul>
        <li>Risques de biais algorithmiques conduisant à des discriminations.</li>
        <li>Atteintes potentielles à la vie privée des utilisateurs.</li>
        <li>Propagation rapide de la désinformation (fake news).</li>
      </ul>
    </section>
  );
}

export default AILimitations;
