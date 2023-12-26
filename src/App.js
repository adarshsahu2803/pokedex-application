import './css/App.css';
import Card from './components/Card.js';
import SearchBar from './components/SearchBar.js';
import Footer from './components/Footer.js';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    // Simulating a fake async API call that adds 20 more records after 1.5 seconds
    setTimeout(() => {
      setItems(prevItems => prevItems.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  const pokemonIds = Array.from({ length: items.length }, (_, index) => index + 1);

  return (
    <>
      <h1>Pokedex Application</h1>
      <SearchBar />
      <InfiniteScroll
        className="card-container"
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {pokemonIds.map((id) => (
          <div key={id}>
            <Card key={id} pokemonId={id} />
          </div>
        ))}
      </InfiniteScroll>
      <Footer />
    </>
  )
}

export default App;
