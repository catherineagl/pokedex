import './sass/main.scss';

import { loadPokemons } from './modules/APICall';
import { getPokemonToSearch, searchPokemon } from './modules/searchPoke';
import { checkFavoriteMark, saveFavorites } from './modules/utils';

const d = document;
const input = d.getElementById('search-poke');
let pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

d.addEventListener('DOMContentLoaded', (e) => {
	loadPokemons('start', pokeAPI);
});

d.addEventListener('click', (e) => {
	if (e.target.matches('.links .link')) {
		e.preventDefault();
		let link = e.target.getAttribute('href');
		loadPokemons('btnNav', link);
	}

	if (e.target.matches('.check-poke')) {
		e.preventDefault();
		let link = e.target.getAttribute('href');
		loadPokemons('singlePage', link);
	}
	if (e.target.matches('.favorite')) {
		saveFavorites(e.target);
		checkFavoriteMark();
	}
	if (
		e.target.matches('.swal2-container') ||
		e.target.matches('.swal2-confirm')
	) {
		window.location.reload();
	}

	if (e.target.matches('.tab')) {
		let tab = d.querySelector('.tab.active');
		tab.classList.remove('active');
		e.target.classList.add('active');

		if (e.target.matches('#showFavPokes')) {
			e.preventDefault();
			let url = e.target.href;
			loadPokemons('favorites', url);
		}

		if (e.target.matches('#showAllPokes')) {
			e.preventDefault();
			window.location.reload();
		}
	}
});

input.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		let poke = getPokemonToSearch();
		loadPokemons('search', `${pokeAPI}?limit=100000`, poke);
	}
});
