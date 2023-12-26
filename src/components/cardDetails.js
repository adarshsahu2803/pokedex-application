import React from 'react';
import { useSelector } from 'react-redux';

const CardDetails = ({ onClose }) => {
    const selectedPokemon = useSelector(state => state.selectedPokemon);

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {selectedPokemon && (
                    <>
                        <h2>{selectedPokemon.name}</h2>
                        <img src={selectedPokemon.imageUrl} alt={selectedPokemon.name} />
                        <p>ID: {selectedPokemon.id}</p>
                        {/* Display other detailed statistics of the selected Pokemon */}
                    </>
                )}
            </div>
        </div>
    );
};

export default CardDetails;
