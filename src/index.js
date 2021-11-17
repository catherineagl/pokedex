import style from './style.css';
import { loadPokemons } from './modules/APICall';
import { getPokemonToSearch, searchPokemon } from './modules/searchPoke';

const d = document;
let pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

d.addEventListener('DOMContentLoaded', (e) => loadPokemons(pokeAPI));
d.addEventListener('click', (e) => {
	if (e.target.matches('.links .link')) {
		e.preventDefault();
		let link = e.target.getAttribute('href');
		loadPokemons(link);
	}

	if (e.target.matches('.search-btn')) {
		e.preventDefault();
		let poke = getPokemonToSearch();
		loadPokemons(`${pokeAPI}?limit=100000`, poke);
	}
});
