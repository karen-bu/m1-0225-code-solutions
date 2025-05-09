interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(): Promise<void> {
  try {
    const user = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!user.ok) {
      throw new Error(`HTTP error! Status: ${user.status}`);
    }
    const userData = (await user.json()) as User;
    console.log(userData);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUser();

// fetch Pokemon
interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  try {
    if (!pokemon.ok) {
      throw new Error(`HTTP error! Status: ${pokemon.status}`);
    }
    const pokemonData = (await pokemon.json()) as Pokemon;
    console.log(pokemonData);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchPokemon();
