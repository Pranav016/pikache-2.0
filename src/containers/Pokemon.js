import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../actions/PokemonActions';

const Pokemon = (props) => {
	const pokemonName = props.match.params.pokemon;
	const pokemonState = useSelector((state) => state.PokemonMultiple);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemon(pokemonName));
	}, [dispatch]);

	const showData = () => {
		if (!_.isEmpty(pokemonState.data[pokemonName])) {
			const pokeData = pokemonState.data[pokemonName];
			return (
				<div className='pokemon-wrapper'>
					<div className='item'>
						<h2>Sprites</h2>
						<img src={pokeData.sprites.front_default} alt='' />
						<img src={pokeData.sprites.back_default} alt='' />
						<img src={pokeData.sprites.front_shiny} alt='' />
						<img src={pokeData.sprites.back_shiny} alt='' />
					</div>
					<div className='item'>
						<h1>Stats</h1>
						{pokeData.stats.map((el) => {
							return (
								<p>
									{el.stat.name} {el.base_stat}
								</p>
							);
						})}
					</div>
					<div className='item'>
						<h1>Abilities</h1>
						{pokeData.abilities.map((el) => {
							return <p>{el.ability.name}</p>;
						})}
					</div>
				</div>
			);
		}

		if (pokemonState.loading) {
			return <p>Loading...</p>;
		}

		if (pokemonState.error !== '') {
			return <p>{pokemonState.error}</p>;
		}

		return <p>Unable to get data</p>;
	};

	return (
		<div>
			<h1>{pokemonName}</h1>
			{showData()}
		</div>
	);
};

export default Pokemon;
