import loading from '../assets/oval.svg';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { createCard } from './DOMElements';

const loadingAnimation = () => {
	const $main = document.querySelector('main');
	$main.classList.add('loader');
	$main.innerHTML = loading;
};

const showError = (err) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: `${err}`,
	});
};

const saveFavorites = (target) => {
	let id = target.dataset.id;
	let btn = document.querySelector(`span[data-id="${id}"] i`);

	if (btn.classList.contains('far')) {
		btn.classList.replace('far', 'fa');
		saveLocalPokemons(id);
		return;
	}
	if (btn.classList.contains('fa')) {
		btn.classList.replace('fa', 'far');
		deleteLocalPokemons(id);
		return;
	}
};

const saveLocalPokemons = (pokemon) => {
	let pokemons;
	if (localStorage.getItem('pokemons') === null) {
		pokemons = [];
	} else {
		pokemons = JSON.parse(localStorage.getItem('pokemons'));
	}
	pokemons.push(pokemon);
	localStorage.setItem('pokemons', JSON.stringify(pokemons));
};

const deleteLocalPokemons = (pokemon) => {
	let pokemons;
	if (localStorage.getItem('pokemons') === null) {
		pokemons = [];
	} else {
		pokemons = JSON.parse(localStorage.getItem('pokemons'));
	}
	console.log(pokemons.indexOf(pokemon));
	pokemons.splice(pokemons.indexOf(pokemon), 1);
	localStorage.setItem('pokemons', JSON.stringify(pokemons));
};

const getLocalPokemons = () => {
	let pokemons;

	if (localStorage.getItem('pokemons') === null) {
		pokemons = [];
	} else {
		pokemons = JSON.parse(localStorage.getItem('pokemons'));
	}
	pokemons.forEach((pokemon) => {
		//console.log(pokemon);
	});
	return pokemons;
};

let showFavoritesPokes = (obj) => {
	const pokemons = [];
	const allIds = getLocalPokemons();
	for (let i = 0; i < obj.pokemons.length; i++) {
		let pokemon = obj.pokemons[i];
		console.log(pokemon.id);
		let id = pokemon.id;
		if (allIds.includes(id.toString())) {
			pokemons.push(pokemon);
		}
	}

	if (pokemons.length <= 0) {
		showError('No pokemons added to favorites yet:(');
		return;
	}
	createCard(pokemons);
};

const checkFavoriteMark = () => {
	let favorites = document.querySelectorAll('.favorite');
	let allIds = getLocalPokemons();

	Array.from(favorites).forEach((favorite) => {
		let id = favorite.dataset.id;
		if (allIds.includes(id.toString())) {
			let span = favorite.children[0];
			span.classList.replace('far', 'fa');
		}
	});
};

export {
	loadingAnimation,
	showError,
	saveFavorites,
	getLocalPokemons,
	showFavoritesPokes,
	checkFavoriteMark,
};
