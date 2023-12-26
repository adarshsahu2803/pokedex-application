import { combineReducers } from 'redux';
import {
    SET_POKEMONS,
    SET_SELECTED_POKEMON,
    FILTER_BY_TYPE,
} from './actions';

const pokemonsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return action.payload;
        case FILTER_BY_TYPE:
            // Filter logic based on type
            // Assuming pokemons have a 'types' array attribute
            return state.filter(pokemon => pokemon.types.includes(action.payload));
        default:
            return state;
    }
};

const selectedPokemonReducer = (state = null, action) => {
    switch (action.type) {
        case SET_SELECTED_POKEMON:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    selectedPokemon: selectedPokemonReducer,
});

export default rootReducer;