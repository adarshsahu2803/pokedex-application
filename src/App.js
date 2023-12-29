import SearchBar from './components/SearchBar.js';
import TypeFilter from './components/TypeFilter.js';
import React, { useState } from 'react';
import TypeList from './components/TypeList.js';
import './css/App.css';
import './css/taskBar.css';

function App() {
  const [type, setType] = useState(null);

  const handleTypeChange = (selected) => {
    setType(selected);
  }

  return (
    <>
      <div className='app-head'>
        <img
          src={'/poke1.png'}
          alt={'pokemon-logo'}
        />
      </div>
      <div className='task-bar'>
        <SearchBar />
        <TypeFilter onSelectedType={handleTypeChange} />
      </div>
      <TypeList selectedType={type || ''} />
    </>
  )
}

export default App;
