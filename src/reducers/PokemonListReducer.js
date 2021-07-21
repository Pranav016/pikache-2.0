const initialState = { loading: false, data: [], error: '', count: 0 };

const PokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SUCCESS':
			return {
				...state,
				data: action.payload.results,
				count: action.payload.count,
			};
		case 'LOADING':
			return { ...state, loading: true };
		case 'FAIL':
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default PokemonReducer;
