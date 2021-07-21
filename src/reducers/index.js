import { combineReducers } from 'redux';
import PokemonReducer from './PokemonListReducer';

const rootReducer = combineReducers({ PokemonList: PokemonReducer });

export default rootReducer;
