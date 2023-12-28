import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import InfiniteScroll from "react-infinite-scroll-component";
import '../css/card.css';

const TypeList = ({ selectedType }) => {
    const [pokemonGroup, setPokemonGroup] = useState([]);
    const [items, setItems] = useState([]);
    let [startIndex, setStartIndex] = useState(items.length);
    let endIndex = startIndex + 20;

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                setStartIndex(0);
                let data;
                if (selectedType === '' || selectedType === null) {
                    data = Array.from({ length: 20 }, (_, index) => index + 1);
                } else {
                    const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}/`);
                    data = response.data.pokemon.map((poke) => poke.pokemon.name);
                }
                setPokemonGroup(data);
                setItems(data.slice(0, 20));
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };

        fetchTypes();
    }, [selectedType]);

    const fetchMoreData = () => {
        // Simulating a fake async API call that adds 20 more records after 1.5 seconds
        setTimeout(() => {
            if (selectedType === '' || selectedType === null) {
                setItems(prevItems => prevItems.concat(Array.from({ length: 20 }, (_, index) => index + 21 + startIndex)));
            } else {
                console.log(startIndex)
                console.log(endIndex)
                setItems(prevItems => prevItems.concat(pokemonGroup.slice(startIndex + 20, endIndex + 20)));
                console.log(pokemonGroup);
                console.log(items);
            }
            setStartIndex(startIndex + 20);
        }, 1500);
    };

    return (
        <>
            <InfiniteScroll
                className="card-container"
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((pokemonName, index) => (
                    <div key={index}>
                        <Card key={index} pokemonId={pokemonName} />
                    </div>
                ))}
            </InfiniteScroll>
        </>
    );
};

export default TypeList;