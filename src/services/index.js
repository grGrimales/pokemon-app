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

export const getPokemons = async (
  setPokemonData,
  setIsLoading,
  limit = 9,
  offset = 0
) => {
  setIsLoading(true);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const body = await fetch(url);
  const resp = await body.json();

  const { results } = resp;

  for await (let pokemon of results) {
    const body = await fetch(pokemon.url);
    const resp = await body.json();
    pokemon.img = resp.sprites.other.home.front_default;
  }

  setPokemonData(results);
  setIsLoading(false);
};

export const getPokemon = async (search = "", setPokemonData, setIsLoading) => {
  setIsLoading(true);

  const url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
  await fetch(url)
    .then(async (body) => {
      const resp = await body.json();
      const pokemon = {
        name: search.toLowerCase(),
        img: resp.sprites.other.home.front_default,
      };

      setPokemonData([pokemon]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setPokemonData([]);
      setIsLoading(false);
    });
};
