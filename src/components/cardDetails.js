import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/cardDetails.css'

const CardDetails = ({ pokemonId }) => {
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonName, setPokemonName] = useState('xxxxxx');

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

    function closeComponent() {
        console.log("close")
        return
    }

    return (
        <div className="modal-overlay" onClick={closeComponent}>
            <div className="modal">
                <h2>{pokemonName} stats</h2>
                <div className="stats-container">
                    {pokemonStats.map((stat, index) => (
                        <div key={index} className="stat">
                            <p>{stat.stat.name}</p>
                            <p>{stat.base_stat}</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${(stat.base_stat / 200) * 100}%` }}
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

export default CardDetails;
