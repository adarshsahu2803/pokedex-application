import './css/App.css';
import SearchBar from './components/SearchBar.js';
import TypeFilter from './components/TypeFilter.js';
import React, { useState } from 'react';
import TypeList from './components/TypeList.js';

function App() {
  const [type, setType] = useState(null);

  const handleTypeChange = (selected) => {
    setType(selected);
  }

  return (
    <>
      <h1>Pokedex Application</h1>
      <div className='task-bar'>
        <SearchBar />
        <TypeFilter onSelectedType={handleTypeChange} />
      </div>
      <TypeList selectedType={type || ''} />
    </>
  )
}

export default App;
