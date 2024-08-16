import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonCard from "../components/PokemonCard";
import MOCK_DATA from "../mock";
import { useState } from "react";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <>
      <Dashboard />
      <PokemonList MOCK_DATA={MOCK_DATA} />
    </>
  );
}

export default Dex;
