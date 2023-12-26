const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Example route to test server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Example route to fetch Pokemon data
app.get('/fetch-data', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data; // Process the data as needed
        res.json(pokemonData);
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        res.status(500).json({ error: 'Failed to fetch Pokemon data' });
    }
});

// Endpoint to get Pokemon by ID
app.get('/api/pokemon/:id', async (req, res) => {
    // Implementation similar to previous example
});

// Endpoint to search Pokemon by name
app.get('/api/pokemon/search/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonData = response.data; // Process the data as needed
        res.json(pokemonData);
    } catch (error) {
        console.error('Error searching Pokemon:', error);
        res.status(500).json({ error: 'Failed to search Pokemon' });
    }
});

// Endpoint to filter Pokemon by type
app.get('/api/pokemon/type/:type', async (req, res) => {
    // Implementation to filter by type
});