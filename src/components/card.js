import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPokemon } from '../actions';
import CardDetails from './CardDetails';

const Card = ({ pokemon }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    dispatch(setSelectedPokemon(pokemon));
    setShowModal(true);
  };

  return (
    <div className="pokemon-card" onClick={handleCardClick}>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      {/* Display other relevant details on the card */}
      {showModal && <CardDetails onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Card;
