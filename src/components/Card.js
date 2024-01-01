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

  const formatPokemonId = (id) => {
    const formattedId = String(id).padStart(3, '0');
    return `#${formattedId}`;
  };

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div onClick={handleClick}>
      <div className="pokemon-card">
        {pokemonData && (
          <>
            <div className="pokemon-details">
              <h2>{capitalizeFirstLetter(pokemonData.name)}</h2>
              <h4 className='type-list'>
                {pokemonData.types.map((type, index) => (
                  <React.Fragment key={index}>
                    <span className='pokemon-type'>
                      {capitalizeFirstLetter(type.type.name)}
                    </span>
                  </React.Fragment>
                ))}
              </h4>
            </div>
            <div className='pokemon-id-img'>
              <h1>{formatPokemonId(pokemonID)}</h1>
              <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                alt={pokemonData.name}
              />
            </div>
          </>
        )}
      </div>
      <>
        {isVisible && (
          <CardDetails pokemonId={pokemonID} />
        )}
      </>
    </div>
  );
};

export default Card;
