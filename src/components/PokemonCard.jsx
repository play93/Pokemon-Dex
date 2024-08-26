import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Card = styled.li`
  background: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    scale: calc(1.03);
  }
`;

const PokemonNum = styled.p`
  font-size: 14px;
  color: #888;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.$isAdd ? "green" : "red")};
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  &:hover {
    transform: translateY(3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.8);
  }
`;

const PokemonCard = ({ pokemon, isSelected }) => {
  const { addPokemon, removePokemon, navigate } = useContext(PokemonContext);

  return (
    <Card onClick={() => navigate("/pokemonDetail?id=" + pokemon.id)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <PokemonNum>No. {pokemon.id}</PokemonNum>
      {isSelected ? (
        <Button
          $isAdd={false}
          onClick={(e) => {
            e.stopPropagation();
            removePokemon(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          $isAdd={true}
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;
