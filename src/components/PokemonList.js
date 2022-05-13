import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Wait } from "../components/ui/Wait";
import { getPokemon } from "../services";

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemon(setPokemonData);
  }, []);

  return (
    <>
      {pokemonData.length === 0 ? (
        <Wait />
      ) : (
        <div className="containerList">
          {pokemonData.map((pokemon) => (
            <div
              key={pokemon.name}
              className="card animate__animated animate__fadeIn"
            >
              {
                <img
                  className="card__img"
                  src={pokemon.img}
                  alt={pokemon.name}
                />
              }

              <h2 className="card__title">
                <span>Name: </span>
                {pokemon.name}
              </h2>

              <Link to={`/item/${pokemon.name}`}>
                <button className="card__btn">Show Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
