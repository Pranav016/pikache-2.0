import axios from 'axios';

export const getPokemonList = (page) => async (dispatch) => {
	try {
		dispatch({
			type: 'LOADING',
		});

		const perPage = 15;
		const offset = page * perPage - perPage;

		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
		);

		dispatch({
			type: 'SUCCESS',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'FAIL',
			payload: err,
		});
	}
};
