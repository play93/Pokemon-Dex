import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { useState } from "react";
import { AddPokemon } from "../context/AddPokemonContext";

function Dex() {
  //선택된 포켓몬 관리
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //const [onAdd, setOnAdd] = useState();
  //const [onRemove, setOnRemove] = useState();

  const addPokemon = (pokemon) => {
    /* 포켓몬을 선택하는 로직을 완성해봅시다 */
    //선택한 카드의 갯수가 6개가 넘었는지 확인해서 넘었으면 막고, 아니면 return
    if (selectedPokemon.length >= 6) {
      return alert("최대6개만 추가할 수 있음");
    }

    //이미 추가했는지 확인하고 있으면 alert로 경고
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      return alert("이미 추가된 포켓몬");
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    {
      /* 제거는 필터를 이용해 봅시다 */
      setSelectedPokemon(
        selectedPokemon.filter(function (p) {
          return p.id !== pokemon.id;
        })
      );
    }
  };

  return (
    <AddPokemon.Provider value={addPokemon}>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onRemovePokemon={removePokemon}
        selectedPokemon={selectedPokemon}
      />
    </AddPokemon.Provider>
  );
}

export default Dex;
