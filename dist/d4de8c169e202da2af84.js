import style from"./style.css";import{loadPokemons}from"./modules/APICall";import{getPokemonToSearch}from"./modules/searchPoke";var d=document,pokeAPI="https://pokeapi.co/api/v2/pokemon/";d.addEventListener("DOMContentLoaded",(function(e){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(e){if(e.target.matches(".links .link")){e.preventDefault();var t=e.target.getAttribute("href");loadPokemons(t)}e.target.matches(".search-btn")&&(e.preventDefault(),getPokemonToSearch())}));