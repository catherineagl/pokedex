import style from"./style.css";import{loadPokemons}from"./modules/APICall";import{getPokemonToSearch,searchPokemon}from"./modules/searchPoke";var d=document,pokeAPI="https://pokeapi.co/api/v2/pokemon/";d.addEventListener("DOMContentLoaded",(function(e){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(e){if(e.target.matches(".links .link")){e.preventDefault();var t=e.target.getAttribute("href");loadPokemons(t)}if(e.target.matches(".search-btn")){e.preventDefault();var o=getPokemonToSearch();loadPokemons("".concat(pokeAPI,"?limit=100000"),o)}if(e.target.matches(".check-poke")){e.preventDefault();var a=e.target.getAttribute("href");console.log("".concat(pokeAPI+a,"/"))}e.target.matches(".favorite")&&console.log(e.target)}));