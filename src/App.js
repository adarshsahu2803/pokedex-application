import Card from './components/Card.js';
import SearchBar from './components/SearchBar.js';
import './css/App.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <SearchBar />
      <h1>Pokedex Application</h1>
      <Card />
      <Footer />
    </div>
  )
}

export default App;
