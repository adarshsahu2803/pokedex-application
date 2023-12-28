import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TypeList from './TypeList';

const TypeFilter = ({ onSelectedType }) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

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
        setSelectedType(selected);
        console.log(selected);
        onSelectedType(selected); // Callback to parent component with selected type
    };

    return (
        <>
            <div class="type-content">
                <>
                    <label htmlFor="typeFilter">Select a Pokemon Type:</label>
                    <select id="typeFilter" value={selectedType} onChange={handleTypeChange}>
                        <option value="">All</option>
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </>
                <>
                    {/* <TypeList selectedType={selectedType} /> */}
                </>
            </div>
        </>
    );
};

export default TypeFilter;