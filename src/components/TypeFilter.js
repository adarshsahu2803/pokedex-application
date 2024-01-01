import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/typeFilter.css';

const TypeFilter = ({ onSelectedType, value }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/type/');
                const typesData = response.data.results.map((type) => type.name);
                setTypes(typesData);
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };
        fetchTypes();
    }, []);

    const handleTypeChange = (event) => {
        const selected = event.target.value;
        onSelectedType(selected);
    };

    return (
        <>
            <div class="type-content">
                <>
                    <label htmlFor="typeFilter">Select a Pokemon Type:</label>
                    <select id="typeFilter" value={value} onChange={handleTypeChange}>
                        <option value="">All</option>
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </>
            </div>
        </>
    );
};

export default TypeFilter;
