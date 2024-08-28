import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
//import { PokemonContext } from "../context/PokemonContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Dex() {
  //선택된 포켓몬 관리

  return (
    <>
      {/* <PokemonContext.Provider
      value={{
        addPokemon,
        removePokemon,
        selectedPokemon,
        pokemonList,
        navigate,
      }}
    > */}
      <Dashboard
      // selectedPokemon={selectedPokemon}
      // onRemovePokemon={removePokemon}
      />
      <PokemonList
      //pokemonList={MOCK_DATA}
      // onRemovePokemon={removePokemon}
      // selectedPokemon={selectedPokemon}
      />
      <ToastContainer />
      {/* </PokemonContext.Provider> */}
    </>
  );
}

export default Dex;
