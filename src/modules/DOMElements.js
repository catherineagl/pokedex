import { fetchData } from './APICall';

const d = document;
const $main = d.querySelector('main');

const createCard = (pokemons, prevLink = null, nextLink = null) => {
	let $template = '';
	let $links = d.querySelector('.links');

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
					<h3>${pokemon.name
						.toUpperCase()
						.replace('-', ' ')} <span class="favorite" data-id="${
			pokemon.id
		}"><i class="far fa-star" aria-hidden="true"></i></span></h3>
					</div>

					<div class="img-container">
						<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
					</div>
					<div class="info">
						<h3>Pokemon type: <br><span>${pokeTypes.join(', ')}</span></h3>
					</div>
				
				</div>

				<div class="sci">
					<a href="https://pokeapi.co/api/v2/pokemon/${
						pokemon.id
					}/" class="btn check-poke">Check Pokemon</a>
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
		? `<a href="${prevLink}" class="link"><i class="fa fa-arrow-left" aria-hidden="true"></i> Previous</a>`
		: '';
	let $nextLink = nextLink
		? `<a href="${nextLink}" class="link">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></a>`
		: '';

	$main.innerHTML = $template;
	$links.innerHTML = $prevLink + '' + $nextLink;
};

const createError = (err) => {
	console.log(err);
	//let message = err.statusText || msg;
	//$main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
	$main.innerHTML = `
		<div class="error-container">
			<img src="../assets/pika.png">
			<p class="error">${err}</p>
		</div>
	`;
};

const createSP = async (pokemon) => {
	let $links = d.querySelector('.links');
	$links.innerHTML = '';
	let $template = '';
	let pokeTypes = [];
	let pokeType = pokemon.types;
	pokeType.forEach((x) => {
		pokeTypes.push(x.type.name);
	});
	let pokeSpecie = await fetchData(pokemon.species.url);
	let habitat = pokeSpecie.habitat.name;
	let pokeAbilities = [];
	pokemon.abilities.forEach((x) => {
		pokeAbilities.push(x.ability.name);
	});
	let fragment = '';
	let pokeCharacteristics = await fetchData(
		`https://pokeapi.co/api/v2/characteristic/${pokemon.id}/`
	);
	let pokeDescription = pokeCharacteristics.descriptions[2].description;
	let highest = pokeCharacteristics['highest_stat'].name;
	console.log(pokeDescription);

	$template += `
	<div class="single-card">

		<section class="carousel">
			<div class="img-container">
				<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
			</div>
		</section>

		<section class="card-content">
			<article class="card-description">
				<div class="card-title">
					<h3>${pokemon.name.toUpperCase().replace('-', ' ')} 
						<span class="favorite" data-id="${pokemon.id}">
							<i class="far fa-star" aria-hidden="true"></i>
						</span>
					</h3>
				</div>
				<h3>Description: <span>${pokeDescription}</span></h3>
				<h3>Highest stat: <span>${highest}</span></h3>
				<h3>Pokemon type: <span>${pokeTypes.join(', ')}</span></h3>
				<h3>Habitat: <span>${habitat}</span> </h3>
				<h3>Abilities: <span>${pokeAbilities.join(', ').replace('-', ' ')}</span></h3>
				<h3>Height: <span>${(pokemon.height / 3.048).toFixed(2)} ft</span> </h3>
				<h3>Weight: <span>${(pokemon.weight / 4.536).toFixed(2)} pounds</span> </h3>
			
				</article>
			
			<article class="board">
				
			</article>
			
		</section>
	</div>
	`;

	let stats = pokemon.stats;
	stats.forEach((item) => {
		fragment += `
		<div class="stat">
			<h4 class="stat-name">${item.stat.name.replace('-', ' ')}</h4>
			<h4 class="stat-num">${item['base_stat']}</h4>
		</div>
		`;
	});
	$main.innerHTML = $template;
	let boardStat = d.querySelector('.board');
	boardStat.innerHTML = fragment;
};
export { createCard, createError, createSP };
