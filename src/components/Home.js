import { useForm } from "../hooks/useForm";
import { PokemonList } from "./PokemonList";

export const Home = () => {
  const [formLoginValues, handleContactInputChange] = useForm({
    search: "",
  });

  const { search } = formLoginValues;

  return (
    <>
      <main>
        <form>
          <div className="containerSearch">
            <label htmlFor="search">Buscar</label>
            <input
              className="containerSearch__input"
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Buscar"
              onChange={handleContactInputChange}
            />
          </div>
        </form>

        <PokemonList />
      </main>
    </>
  );
};
