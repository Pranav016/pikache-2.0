const initialState = { loading: false, data: {}, error: '' };

const PokemonMultipleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'POKEMON_SUCCESS':
			return {
				...state,
				data: { ...state.data, [action.pokemonName]: action.payload }, //deep copy
			};
		case 'POKEMON_LOADING':
			return { ...state, loading: true };
		case 'POKEMON_FAIL':
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default PokemonMultipleReducer;
