import pokeball from '../assets/pokeball.png';

const d = document;
const $main = d.querySelector('main');

const createCard = (pokemons, prevLink = null, nextLink = null) => {
	let $template = '';
	let $links = d.querySelector('.links');
	let $logo = d.querySelector('.img-logo');

	$logo.innerHTML = `<img src="${pokeball}" alt="pokeball" />`;

	for (let i = 0; i < pokemons.length; i++) {
		let pokemon = pokemons[i];

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
		if (!pokemon.name) {
			console.log(pokemon);
			/* let message = err.statusText || 'Something went wrong...';
		
				$template += `
				<div class="card">
				<h3>Error ${err.status}:<br> <span>${message}</span></h3>
				</div>
				`; */
		}
	}

	let $prevLink = prevLink
		? `<a href="${prevLink}" class="link"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>`
		: '';
	let $nextLink = nextLink
		? `<a href="${nextLink}" class="link"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>`
		: '';

	$main.innerHTML = $template;
	$links.innerHTML = $prevLink + '' + $nextLink;
};

const createError = (err) => {
	console.log(err);
	//let message = err.statusText || msg;
	//$main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
	$main.innerHTML = `<p class="error">${err}</p>`;
};
export { createCard, createError };
