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

/*
async function loadPokemons(url) {
	try {
		$main.innerHTML = `<img class="loader" src="${loading}" alt="Cargando...">`;
		let res = await fetch(url),
			json = await res.json(),
			$template = '',
			$prevLink,
			$nextLink;

		if (!res.ok) throw { status: res.status, statusText: res.statusText };

		for (let i = 0; i < json.results.length; i++) {
			let item = json.results[i].url;
			try {
				let res = await fetch(item),
					pokemon = await res.json();

				if (!res.ok) throw { status: res.status, statusText: res.statusText };
				let pokeTypes = [];
				let pokeType = pokemon.types;
				pokeType.forEach((x) => {
					pokeTypes.push(x.type.name);
				});
				$template += `
        <div class="card">
					<div class="content">
						<div class="info card-title">
						<h3>${pokemon.name.toUpperCase()} <span><i class="far fa-star" aria-hidden="true"></i></span></h3>
						</div>

						<div class="img-container">
							<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
						</div>
						<div class="info">
							<h3>Pokemon type: <br><span>${pokeTypes.join(', ')}</span></h3>
						</div>
					
					</div>

					<div class="sci">
						<a href="#" class="btn check-poke">Check Pokemon</a>
					</div>
        </div>
        `;
			} catch (err) {
				let message = err.statusText || 'Something went wrong...';

				$template += `
        <div class="card">
        <h3>Error ${err.status}: ${message}</h3>
        </div>
        `;
			}
		}

		$main.innerHTML = $template;
		$prevLink = json.previous
			? `<a href="${json.previous}" class="link"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>`
			: '';
		$nextLink = json.next
			? `<a href="${json.next}" class="link"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>`
			: '';

		$links.innerHTML = $prevLink + '' + $nextLink;
	} catch (err) {
		console.log(err);
		let message = err.statusText || 'Something went wrong...';
		$main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
	}
}
*/
export { loadPokemons };
