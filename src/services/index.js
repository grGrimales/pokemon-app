export const getPokemonByName = async (setPokemonDetail, name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const body = await fetch(url);
  const resp = await body.json();
  const { abilities, sprites, base_experience, height, weight } = resp;

  setPokemonDetail({
    name,
    abilities,
    img: sprites.other.home.front_default,
    description: {
      base_experience,
      height,
      weight,
    },
  });
};

export const getPokemon = async (setPokemonData) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
  const body = await fetch(url);
  const resp = await body.json();

  const { results } = resp;

  for await (let pokemon of results) {
    const body = await fetch(pokemon.url);
    const resp = await body.json();
    pokemon.img = resp.sprites.other.home.front_default;
  }

  setPokemonData(results);
};
