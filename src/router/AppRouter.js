import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { PokemonDetail } from "../components/PokemonDetail";
import { RegisterPokemon } from "../components/RegisterPokemon";
import { NavBar } from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/item/:name" element={<PokemonDetail />} />

        <Route path="/register" element={<RegisterPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};
