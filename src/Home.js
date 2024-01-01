import searchBar from './components/searchBar.js';
import typeFilter from './components/typeFilter.js';
import React, { useState, useRef } from 'react';
import typeList from './components/typeList.js';
import card from './components/card.js';
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
                <searchBar setSearchVisibility={setSearchVisibility} value={searchInput} handleSearchInputChange={handleSearchInputChange} />
                <typeFilter ref={typeFilterRef} onSelectedType={handleTypeChange} value={type} />
            </div>
            <div class="search-element">
                {searchVisibility && <card pokemonId={searchInput.toLowerCase()} />}
            </div>
            <typeList selectedType={type || ''} />
        </>
    )
}

export default Home;
