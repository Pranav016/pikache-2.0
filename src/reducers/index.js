import { combineReducers } from 'redux';
import PokemonReducer from './PokemonListReducer';
import PokemonMultipleReducer from './PokemonMuiltipleReducer';

const rootReducer = combineReducers({
	PokemonList: PokemonReducer,
	PokemonMultiple: PokemonMultipleReducer,
});

export default rootReducer;
