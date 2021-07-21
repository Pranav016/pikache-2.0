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

export const getPokemon = (pokemon) => async (dispatch) => {
	try {
		dispatch({
			type: 'POKEMON_LOADING',
		});

		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${pokemon}`
		);

		dispatch({
			type: 'POKEMON_SUCCESS',
			payload: res.data,
			pokemonName: pokemon,
		});
	} catch (err) {
		dispatch({
			type: 'POKEMON_FAIL',
			payload: err,
		});
	}
};
