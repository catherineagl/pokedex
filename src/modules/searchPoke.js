import { createCard } from './DOMElements';
import { showError } from './utils';

const d = document;
const input = d.getElementById('search-poke');
const btn = d.querySelector('.search-btn');

function getPokemonToSearch() {
	if (!input.value) return;
	let search = input.value;
	return search;
}

function searchPokemon(obj) {
	const pokemons = [];
	for (let i = 0; i < obj.pokemons.length; i++) {
		let pokemon = obj.pokemons[i];
		if (pokemon.name.includes(obj.poke)) {
			pokemons.push(pokemon);
		}
	}

	if (pokemons.length <= 0) {
		showError('No pokemons found:(');
		return;
	}

	createCard(pokemons);
}

export { getPokemonToSearch, searchPokemon };
