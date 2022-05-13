import { useForm } from "../hooks/useForm";

import { useState } from "react";

import register from "../images/register.png";

export const RegisterPokemon = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const removeError = () => {
    setError(false);
    setMessage(null);
  };

  const [formLoginValues, handleContactInputChange, reset] = useForm({
    name: "",
    height: "",
    weight: "",
    baseExperience: "",
    abilities: "",
    image: "",
  });

  const { name, height, abilities, image, weight, baseExperience } =
    formLoginValues;

  const handleAddPokemon = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      height.trim().length === 0 ||
      abilities.trim().length === 0 ||
      image.trim().length === 0 ||
      weight.trim().length === 0 ||
      baseExperience.trim().length === 0
    ) {
      setError(true);
      setMessage("*Todos los campos son obligatorios");
      setTimeout(() => {
        removeError();
      }, 3000);
    } else {
      const labels = abilities.split("-");
      const description = [{ height }, { weight }, { baseExperience }];
      const pokemonToAdd = { name, description, labels, image };
      setListPokemon([...listPokemon, pokemonToAdd]);
      localStorage.setItem("listPokemon", JSON.stringify(listPokemon));
      reset();
    }
  };

  return (
    <>
      <main className="mainContacto animate__animated animate__fadeIn">
        <div className="mainContacto__img">
          <img
            className="mainContacto__titleImg"
            src={register}
            alt="Pokemon Register"
          />
        </div>

        <section className="sectionForm">
          <form>
            <div className="containerForm">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  autoComplete="off"
                  placeholder="Enter pokemon name"
                  onChange={handleContactInputChange}
                />
              </div>
              <div>
                <label htmlFor="abilities">Abilities</label>
                <input
                  type="text"
                  name="abilities"
                  id="abilities"
                  required
                  value={abilities}
                  autoComplete="off"
                  placeholder="Enter the abilities of your pokemon"
                  onChange={handleContactInputChange}
                />
              </div>

              <div>
                <label htmlFor="height">Height</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  required
                  value={height}
                  autoComplete="off"
                  placeholder="Enter the height of your pokemon"
                  onChange={handleContactInputChange}
                />
              </div>
              <div>
                <label htmlFor="baseExperience">Base experience</label>
                <input
                  type="number"
                  name="baseExperience"
                  id="baseExperience"
                  required
                  value={baseExperience}
                  autoComplete="off"
                  placeholder="Enter the Base experience of your pokemon"
                  onChange={handleContactInputChange}
                />
              </div>
              <div>
                <label htmlFor="weight">Weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  required
                  value={weight}
                  autoComplete="off"
                  placeholder="Enter the weight of your pokemon "
                  onChange={handleContactInputChange}
                />
              </div>

              <div>
                <label htmlFor="image">Image</label>

                <input
                  type="text"
                  name="image"
                  id="image"
                  required
                  value={image}
                  autoComplete="off"
                  placeholder="Enter the URL the image of your pokemon "
                  onChange={handleContactInputChange}
                />
              </div>

              <button
                type="submit"
                className="containerForm__btn"
                onClick={handleAddPokemon}
              >
                Catch Pokemon
              </button>
              {error && (
                <div className="alertError animate__animated animate__fadeIn">
                  {message}
                </div>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
