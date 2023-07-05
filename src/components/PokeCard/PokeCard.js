import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../Header/Header';

const PokeCard = () => {
	const [pokemon, setPokemon] = useState([]);
	const apiPokeURL = "https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0";



	useEffect(() => {
		axios.get(apiPokeURL).then((response) => {
			setPokemon(response.data);
		});
	}, []);
	console.log(pokemon);
	const ArrOfPokemon = pokemon.results;
	console.log(ArrOfPokemon);
	return (
		<div>PokeCard
			{ArrOfPokemon?.map((poke,i) => {
				let y=i+1;
				return (

					<div className='border w-25 d-flex '>

						<div>
							<p>{`${y}`}</p>
							<p>Image:</p>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png`}></img>
						</div>
						<div>
							<p>Name: </p>
							<p>{poke.name}</p>
							{console.log(poke.name)}
						</div>
					</div>
				)
			})}
		</div>
	)
}


export default PokeCard;
