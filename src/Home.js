import SearchBar from './components/SearchBar.js';
import TypeFilter from './components/TypeFilter.js';
import React, { useState, useRef } from 'react';
import TypeList from './components/TypeList.js';
import Card from './components/Card.js';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import './css/taskBar.css';

function Home() {
    const [type, setType] = useState(null);
    const navigate = useNavigate();
    const typeFilterRef = useRef();
    const [searchInput, setSearchInput] = useState('');
    const [searchVisibility, setSearchVisibility] = useState(false);

    const handleTypeChange = (selected) => {
        setType(selected);
    }

    const handleSearchInputChange = (input) => {
        setSearchInput(input);
    }

    const handleLogoClick = () => {
        setSearchInput('');
        setType('');
        navigate('/');
        setSearchVisibility(false);
    }

    return (
        <>
            <div className='app-head'>
                <img
                    src={'/poke1.png'}
                    alt={'pokemon-logo'}
                    onClick={handleLogoClick}
                />
            </div>
            <div className='task-bar'>
                <SearchBar setSearchVisibility={setSearchVisibility} value={searchInput} handleSearchInputChange={handleSearchInputChange} />
                <TypeFilter ref={typeFilterRef} onSelectedType={handleTypeChange} value={type} />
            </div>
            <div class="search-element">
                {searchVisibility && <Card pokemonId={searchInput.toLowerCase()} />}
            </div>
            <TypeList selectedType={type || ''} />
        </>
    )
}

export default Home;
