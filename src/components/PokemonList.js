import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Wait } from "../components/ui/Wait";
import { getPokemons, getPokemon } from "../services";

export const PokemonList = ({ search }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [limit] = useState(9);
  const [offset, setOffset] = useState(0);

  const changeUrl = (newOffset) => {
    if (newOffset >= 0 && newOffset < 1118) {
      setOffset(newOffset);
    }
  };

  useEffect(() => {
    if (search != "") {
      getPokemon(search, setPokemonData, setIsLoading, 0);
    } else {
      getPokemons(setPokemonData, setIsLoading, limit, offset);
    }
  }, [search, limit, offset]);

  if (isLoading) {
    return <Wait />;
  }

  return (
    <>
      {pokemonData?.length === 0 ? (
        <h1 className="titleList">
          No results found for your search: <span> {search}</span>
        </h1>
      ) : (
        <>
          <div className="containerList">
            {pokemonData?.map((pokemon) => (
              <div
                key={pokemon?.name}
                className="card animate__animated animate__fadeIn"
              >
                {
                  <img
                    className="card__img"
                    src={pokemon?.img}
                    alt={pokemon?.name}
                  />
                }

                <h2 className="card__title">
                  <span>Name: </span>
                  {pokemon?.name}
                </h2>

                <Link to={`/item/${pokemon?.name}`}>
                  <button className="card__btn">Show Details</button>
                </Link>
              </div>
            ))}
          </div>

          <div className="pagination">
            <a onClick={() => changeUrl(0)} title="first page">
              <svg fill="currentColor">
                <path d="M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6zM11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
              </svg>{" "}
              First
            </a>

            <a onClick={() => changeUrl(offset - limit)} title="previous page">
              <svg fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </a>

            <a onClick={() => changeUrl(offset + limit)} title="next page">
              <svg fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>
            <a onClick={() => changeUrl(1110)} title="last page">
              Last{" "}
              <svg fill="currentColor">
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6zM13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
              </svg>
            </a>
          </div>
        </>
      )}
    </>
  );
};
