const initialState = { loading: false, data: [], error: '', count: 0 };

const PokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SUCCESS':
			return {
				...state,
				data: action.payload.results,
				count: action.payload.count,
				loading: false,
			};
		case 'LOADING':
			return { ...state, loading: true };
		case 'FAIL':
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};

export default PokemonReducer;
