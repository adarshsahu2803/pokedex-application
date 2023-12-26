import './css/App.css';
import Card from './components/Card.js';
import SearchBar from './components/SearchBar.js';
import Footer from './components/Footer.js';
import React, { useState, useEffect } from 'react';

function App() {
  const pokemonIds = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Pokedex Application</h1>
      <SearchBar />
      <div className="card-container">
        {pokemonIds.map((id) => (
          <Card key={id} pokemonId={id} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App;
