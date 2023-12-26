export const SET_POKEMONS = 'SET_POKEMONS';
export const SET_SELECTED_POKEMON = 'SET_SELECTED_POKEMON';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons,
});

export const setSelectedPokemon = (pokemon) => ({
    type: SET_SELECTED_POKEMON,
    payload: pokemon,
});

export const filterByType = (type) => ({
    type: FILTER_BY_TYPE,
    payload: type,
});