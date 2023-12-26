import React, { useState, useEffect } from 'react';
import Card from './Card';
import TypeFilter from './TypeFilter';

const MainComponent = ({ pokemonList }) => {
    const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);
    const [selectedType, setSelectedType] = useState('');

    // useEffect to handle filtering based on the selected type
    useEffect(() => {
        if (selectedType) {
            const filtered = pokemonList.filter(
                (pokemon) => pokemon.types.includes(selectedType)
            );
            setFilteredPokemonList(filtered);
        } else {
            setFilteredPokemonList(pokemonList);
        }
    }, [pokemonList, selectedType]);

    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    const handleCardClick = (pokemon) => {
        // Handle card click action
        console.log('Clicked:', pokemon);
    };

    return (
        <div>
            <TypeFilter
                types={['Type1', 'Type2', 'Type3']} // Replace with your types
                onSelectType={handleTypeSelect}
            />
            <div className="pokemon-container">
                {/* Display all Pokemon cards initially */}
                {filteredPokemonList.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainComponent;