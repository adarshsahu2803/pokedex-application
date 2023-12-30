import SearchBar from './components/SearchBar.js';
import TypeFilter from './components/TypeFilter.js';
import React, { useState } from 'react';
import TypeList from './components/TypeList.js';
import './css/Home.css';
import './css/taskBar.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App;
