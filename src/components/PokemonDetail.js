import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const getPokemonByName = async () => {
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

  useEffect(() => {
    getPokemonByName();
    console.log(pokemonDetail);
  }, []);

  return (
    <>
      {!pokemonDetail ? (
        <h1>Espere</h1>
      ) : (
        <div>
          name: {pokemonDetail?.name}
          abilities:
          <ul>
            {pokemonDetail.abilities.map((abiliti) => (
              <li key={abiliti.ability.name}>{abiliti.ability.name}</li>
            ))}
          </ul>
          <img
            className="card__img"
            src={pokemonDetail.img}
            alt={pokemonDetail.name}
          />
          <div>
            <ul>
              <li>
                Base experience: {pokemonDetail.description.base_experience}
              </li>

              <li>height: {pokemonDetail.description.height}</li>

              <li>weight: {pokemonDetail.description.weight}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
