import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import './css/Home.css';
import './css/taskBar.css';

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
