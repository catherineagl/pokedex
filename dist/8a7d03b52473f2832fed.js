import style from"./style.css";import{loadPokemons}from"./modules/APICall";var d=document;d.addEventListener("DOMContentLoaded",(function(e){return loadPokemons(pokeAPI)})),d.addEventListener("click",(function(e){if(console.log(e),e.target.matches(".links .link")){e.preventDefault();var t=e.target.getAttribute("href");loadPokemons(t)}}));