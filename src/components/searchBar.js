import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "./Card";
import '../css/searchBar.css';

const SearchBar = () => {
    let [searchValue, setSearchValue] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonId, setPokemonId] = useState(null);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}/`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };
        fetchData();
    }, [searchValue]);

    const handleSearch = () => {
        setPokemonId(pokemonData.id);
    }

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter search term"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div class="search-element">
                {pokemonId && <Card pokemonId={pokemonId} />}
            </div>
        </>

    );
};

export default SearchBar;