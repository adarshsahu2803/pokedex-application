# Pokedex Application

Welcome to the Pokedex application, a state-of-the-art platform that allows users to explore and retrieve information about different Pokémon species using the [Pokémon API](https://pokeapi.co/). This React-based application integrates with the Pokémon API to provide users with details about various Pokémon, their types, and statistics.

## Features

- **Search Bar:** Search for Pokémon by name or ID.
- **Infinite Scroll:** Scroll through an endless list of Pokémon.
- **Interactive Pokémon Cards:** Display Pokémon details, including names, images, types, and IDs.
- **Pokémon Detail Modal:** Explore detailed statistics of each Pokémon in a modal dialog.
- **Real-time Type Filter:** Filter Pokémon based on their types with live results.
- **Reset on Application Logo Click:** Clicking the application logo resets the application, undoing any search results or filter changes.

## Technologies Used

- React
- Tailwind CSS
- [Pokemon Image API](https://unpkq.com/pokeapi-sputes)
  - Usage: `https://unpka.com/pokeapi-spntes@2.0.2/sprites/pokemon/other/dream-world/{id}.svg`

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/adarshsahu2803/pokedex-application.git

2. Navigate to the project directory::

   ```bash
   cd pokedex-application

3. Install dependencies:

   ```bash
   npm install

## Usage

To start the application locally:

```bash
   npm start
```

Visit http://localhost:3000 in your web browser to view the application.

## Deployment
The application has been deployed using GitHub Pages. Access it [here](https://adarshsahu2803.github.io/pokedex-application).

## API Integration
The application integrates with the Pokémon API to fetch Pokémon data. Ensure a stable internet connection to retrieve real-time data from the API.

## Project Structure

```lua
|-- public/
|-- src/
    |-- components/
        |-- Card.js
        |-- CardDetails.js
        |-- Loading.js
        |-- SearchBar.js
        |-- TypeFilter.js
        |-- TypeList.js
    |-- css/
        |-- card.css    
        |-- cardDetails.css    
        |-- Home.css    
        |-- index.css    
        |-- searchBar.css    
        |-- taskBar.css    
        |-- typeFilter.css
    |-- router/
        |-- Home.js
    |-- App.js
    |-- index.js
|-- package.json
|-- README.md

```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests to suggest improvements or additional features.







