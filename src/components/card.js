import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/card.css'

// import { useDispatch } from 'react-redux';
// import { setSelectedPokemon } from '../actions';
// import CardDetails from './CardDetails';

const Card = ({ pokemonId }) => {
  // const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);

  // const handleCardClick = () => {
  //   dispatch(setSelectedPokemon(pokemon));
  //   setShowModal(true);

  const [pokemonData, setPokemonData] = useState(null);

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

  return (
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
        </>
      )}
    </div>
  );
};

export default Card;
