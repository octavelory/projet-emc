// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AIIntroduction from './components/AIIntroduction';
import AIHistory from './components/AIHistory';
import AIEvolution from './components/AIEvolution';
import AISocietalImpact from './components/AISocietalImpact';
import AIAdvantages from './components/AIAdvantages';
import AILimitations from './components/AILimitations';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation-de-ia" element={<AIIntroduction />}>
          <Route path="histoire" element={<AIHistory />} />
          <Route path="evolution" element={<AIEvolution />} />
        </Route>
        <Route path="/influence-ia" element={<AISocietalImpact />}>
          <Route path="atouts" element={<AIAdvantages />} />
          <Route path="limites" element={<AILimitations />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;