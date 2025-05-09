'use strict';
async function fetchUser() {
  try {
    const user = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!user.ok) {
      throw new Error(`HTTP error! Status: ${user.status}`);
    }
    const userData = await user.json();
    console.log(userData);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUser();
async function fetchPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  try {
    if (!pokemon.ok) {
      throw new Error(`HTTP error! Status: ${pokemon.status}`);
    }
    const pokemonData = await pokemon.json();
    console.log(pokemonData);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchPokemon();
