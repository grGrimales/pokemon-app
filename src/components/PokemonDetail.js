import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wait } from "./ui/Wait";
import { getPokemonByName } from "../services";

import who from "../images/who.png";

export const PokemonDetail = () => {
  const { name } = useParams();

  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    getPokemonByName(setPokemonDetail, name);
  }, []);

  return (
    <>
      {!pokemonDetail ? (
        <Wait />
      ) : (
        <>
          <div className="cardDetail__container animate__animated animate__fadeIn">
            <div className="containerDetail">
              <img
                className="containerDetail__img"
                src={who}
                alt="Quien  es ese Pokemon?"
              />
              <h1 className="titleDetail">{name}</h1>
            </div>
            <div className="cardDetail">
              <div className="containerImg">
                <img
                  className="containerImg__img"
                  src={pokemonDetail.img}
                  alt={pokemonDetail.name}
                />
              </div>

              <div className="cardDetail__contents">
                <h2 className="cardDetail__title ">
                  {" "}
                  name: <span> {pokemonDetail?.name}</span>
                </h2>

                <p className="cardDetail__description">Abilities:</p>
                <ul className="listDescription">
                  {pokemonDetail.abilities.map((abiliti) => (
                    <li key={abiliti.ability.name}>*{abiliti.ability.name}</li>
                  ))}
                </ul>
                <p className="cardDetail__description">Description:</p>

                <ul className="listDescription">
                  <li>
                    *Base experience:{" "}
                    {pokemonDetail.description.base_experience}
                  </li>

                  <li>*Height: {pokemonDetail.description.height}</li>

                  <li>*Weight: {pokemonDetail.description.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
