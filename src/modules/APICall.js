import { createCard } from './DOMElements';
import { searchPokemon } from './searchPoke';
import { loadingAnimation } from './utils';

const d = document;

async function loadPokemons(url, poke = null) {
	try {
		loadingAnimation();
		let res = await fetch(url),
			json = await res.json(),
			pokemons = [],
			prevLink,
			nextLink;

		if (!res.ok) throw { status: res.status, statusText: res.statusText };

		prevLink = json.previous;
		nextLink = json.next;

		for (let i = 0; i < json.results.length; i++) {
			let item = json.results[i].url;
			try {
				let res = await fetch(item),
					pokemon = await res.json();

				if (!res.ok) throw { status: res.status, statusText: res.statusText };

				pokemons.push(pokemon);
			} catch (err) {
				pokemons.push(err);
			}
		}
		if (poke) {
			searchPokemon({ pokemons, poke });
		}
		if (!poke) {
			createCard(pokemons, prevLink, nextLink);
		}
	} catch (err) {
		console.log(err);
	}
}

export { loadPokemons };
