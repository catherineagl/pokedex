import { createCard } from './DOMElements';
import { searchPokemon } from './searchPoke';
import {
	checkFavoriteMark,
	loadingAnimation,
	showFavoritesPokes,
} from './utils';

async function loadPokemons(action, url, poke = null) {
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

		if (action === 'search') {
			searchPokemon({ pokemons, poke });
			checkFavoriteMark();
		}
		if (action === 'start' || action === 'btnNav') {
			createCard(pokemons, prevLink, nextLink);
			checkFavoriteMark();
		}
		if (action === 'favorites') {
			showFavoritesPokes({ pokemons });
			checkFavoriteMark();
		}

		//console.log({ pokemons, prevLink, nextLink, poke });
	} catch (err) {
		console.log(err);
	}
}

export { loadPokemons };
