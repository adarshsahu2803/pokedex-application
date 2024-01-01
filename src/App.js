import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import './css/Home.css';
import './css/taskBar.css';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
