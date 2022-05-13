import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
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

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemonData.length === 0 ? (
        <h1>Espere</h1>
      ) : (
        pokemonData.map((pokemon) => (
          <div
            key={pokemon.name}
            className="card animate__animated animate__fadeIn"
          >
            {<img className="card__img" src={pokemon.img} alt={pokemon.name} />}

            <h2 className="card__title">{pokemon.name}</h2>

            <Link to={`/item/${pokemon.name}`}>
              <button className="card__btn">Ver detalles</button>
            </Link>
          </div>
        ))
      )}
    </>
  );
};
