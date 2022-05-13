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
            <label htmlFor="search">Search</label>
            <input
              className="containerSearch__input"
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Search"
              onChange={handleContactInputChange}
            />
          </div>
        </form>

        <PokemonList />
      </main>
    </>
  );
};
