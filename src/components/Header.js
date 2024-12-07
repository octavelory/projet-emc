// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h1>IA dans les Réseaux Sociaux</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li>
            <Link to="/presentation-de-ia">Présentation de l’IA</Link>
            <ul>
              <li><Link to="/presentation-de-ia/histoire">Son histoire</Link></li>
              <li><Link to="/presentation-de-ia/evolution">Son évolution</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/influence-ia">Influence de l’IA</Link>
            <ul>
              <li><Link to="/influence-ia/atouts">Atouts</Link></li>
              <li><Link to="/influence-ia/limites">Limites</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;