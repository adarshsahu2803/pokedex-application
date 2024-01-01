import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/cardDetails.css'

const cardDetails = ({ pokemonId }) => {
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonName, setPokemonName] = useState('pokemon');

    useEffect(() => {
        const fetchPokemonStats = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
                setPokemonStats(response.data.stats);
                setPokemonName(response.data.name);
            } catch (error) {
                console.error('Error fetching Pokemon stats:', error);
            }
        };

        fetchPokemonStats();
    }, [pokemonId]);

    function capitalizeFirstLetter(word) {
        let words = word.split('-');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{capitalizeFirstLetter(pokemonName)} Stats</h2>
                <div className="stats-container">
                    {pokemonStats.map((stat, index) => (
                        <div key={index} className="stat">
                            <p>{capitalizeFirstLetter(stat.stat.name)}</p>
                            <p>{stat.base_stat}</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default cardDetails;
