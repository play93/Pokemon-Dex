import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dex() {
  //선택된 포켓몬 관리
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    //선택한 카드의 갯수가 6개가 넘었는지 확인해서 넘었으면 막고, 아니면 return

    const errorMessage = (message) =>
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    if (selectedPokemon.length >= 6) {
      return errorMessage("최대6개만 추가할 수 있음");
    }

    //이미 추가했는지 확인하고 있으면 alert로 경고
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      return errorMessage("이미 추가된 포켓몬");
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    {
      setSelectedPokemon(
        selectedPokemon.filter(function (p) {
          return p.id !== pokemon.id;
        })
      );
    }
  };

  const pokemonList = MOCK_DATA;

  const navigate = useNavigate();

  return (
    <PokemonContext.Provider
      value={{
        addPokemon,
        removePokemon,
        selectedPokemon,
        pokemonList,
        navigate,
      }}
    >
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
    </PokemonContext.Provider>
  );
}

export default Dex;
