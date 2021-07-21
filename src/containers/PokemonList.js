import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../actions/PokemonActions';

const PokemonList = () => {
	const PokemonList = useSelector((state) => state.PokemonList);
	const dispatch = useDispatch();
	const fetchData = (page = 1) => {
		dispatch(getPokemonList(page));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const showData = () => {
		if (!_.isEmpty(PokemonList.data)) {
			return (
				<div className='list-wrapper'>
					{PokemonList.data.map((item) => (
						<div className='pokemon-item'>
							<p>{item.name}</p>
							<Link to={`/pokemon/${item.name}`}>View</Link>
						</div>
					))}
				</div>
			);
		}

		if (PokemonList.loading) {
			return <p>Loading...</p>;
		}

		if (PokemonList.error !== '') {
			return <p>{PokemonList.error}</p>;
		}

		return <p>Unable to get data</p>;
	};

	return <div>{showData()}</div>;
};

export default PokemonList;