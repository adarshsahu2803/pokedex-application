import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/card.css'
import CardDetails from './CardDetails';

const Card = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pokemonID, setPokemonID] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        setPokemonID(response.data.id)
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [pokemonId]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div onClick={handleClick}>
      <>
        <div className="pokemon-card">
          {pokemonData && (
            <>
              <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                alt={pokemonData.name}
              />
              <p>ID: {pokemonID}</p>
              <p>Name: {pokemonData.name}</p>
              <p>Types: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
            </>
          )}
        </div>
      </>
      <>
        {isVisible && (
          <CardDetails pokemonId={pokemonID} />
        )}
      </>
    </div>
  );
};

export default Card;
