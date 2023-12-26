import './css/App.css';
import Card from './components/Card.js';
import SearchBar from './components/SearchBar.js';
import Footer from './components/Footer.js';
import React, { useState, useEffect } from 'react';

function App() {
  const pokemonIds = [1, 2, 3, 4, 5];

  return (
    <div>
      <SearchBar />
      <h1>Pokedex Application</h1>
      {pokemonIds.map((id) => (
        <Card key={id} pokemonId={id} />
      ))}
      <Footer />
    </div>
  )
}

export default App;
