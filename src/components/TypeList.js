import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../css/card.css';

const TypeList = ({ selectedType }) => {
    const [pokemonGroup, setPokemonGroup] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}/`);
                const groupData = response.data.pokemon.map((poke) => poke.pokemon.name);
                setPokemonGroup(groupData); // Set the extracted names directly to the state
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };

        fetchTypes();
    }, [selectedType]); // Added selectedType to dependency array

    return (
        <div className="card-container">
            {pokemonGroup.map((pokemonName, index) => (
                <Card pokemonId={pokemonName} />
            ))}
            {/* {pokemonGroup} */}
        </div>
    );
};

export default TypeList;