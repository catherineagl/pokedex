import './sass/main.scss';

import { loadPokemons } from './modules/APICall';
import { getPokemonToSearch, searchPokemon } from './modules/searchPoke';

const d = document;
let pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

d.addEventListener('DOMContentLoaded', (e) => loadPokemons(pokeAPI));

d.addEventListener('click', (e) => {
	if (e.target.matches('.links .link')) {
		e.preventDefault();
		console.log('next btn');
		let link = e.target.getAttribute('href');
		loadPokemons(link);
	}

	if (e.target.matches('.search-btn')) {
		e.preventDefault();
		let poke = getPokemonToSearch();
		loadPokemons(`${pokeAPI}?limit=100000`, poke);
	}
	if (e.target.matches('.check-poke')) {
		e.preventDefault();
		let link = e.target.getAttribute('href');
		console.log(`${pokeAPI + link}/`);
	}
	if (e.target.matches('.favorite')) {
		let id = e.target.dataset.id;
		let btn = d.querySelector(`span[data-id="${id}"] i`);

		if (btn.classList.contains('far')) {
			btn.classList.replace('far', 'fa');
			return;
		}
		if (btn.classList.contains('fa')) {
			btn.classList.replace('fa', 'far');
			return;
		}
		console.log(btn);
	}
});
