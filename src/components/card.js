import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/card.css'
import CardDetails from './CardDetails';

const Card = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [pokemonId]);

  const handleCardClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div onClick={handleCardClick}>
      <>
        <div className="pokemon-card">
          {pokemonData && (
            <>
              <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                alt={pokemonData.name}
              />
              <p>ID: {pokemonId}</p>
              <p>Name: {pokemonData.name}</p>
              <p>Types: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
              {console.log(pokemonData)}

            </>
          )}
        </div>
      </>
      <>
        {showDetails && (
          <CardDetails pokemonId={pokemonId} />
        )}
      </>
    </div>
  );
};

export default Card;
