import style from"./style.css";import{loadPokemons}from"./modules/APICall";import{getPokemonToSearch,searchPokemon}from"./modules/searchPoke";var d=document,pokeAPI="https://pokeapi.co/api/v2/pokemon/";d.addEventListener("DOMContentLoaded",(function(e){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(e){if(e.target.matches(".links .link")){e.preventDefault();var t=e.target.getAttribute("href");loadPokemons(t)}if(e.target.matches(".search-btn")){e.preventDefault();var a=getPokemonToSearch();loadPokemons("".concat(pokeAPI,"?limit=100000"),a)}if(e.target.matches(".check-poke")){e.preventDefault();var o=e.target.getAttribute("href");console.log("".concat(pokeAPI+o,"/"))}if(e.target.matches(".favorite")){var r=e.target.dataset.id,s=d.querySelector('span[data-id="'.concat(r,'"] i'));s.classList.contains("far")&&s.classList.replace("far","fa"),s.classList.contains("fa")&&s.classList.replace("fa","far"),console.log(s)}}));