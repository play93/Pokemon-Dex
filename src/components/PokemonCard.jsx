import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, Bounce } from "react-toastify";
import { addPokemon, removePokemon } from "../features/pokemonSlice";
import { useSelector } from "react-redux";

const PokemonCard = ({ pokemon, isSelected }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);

  //포켓몬 추가
  const handleAddPokemon = (pokemon) => {
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

    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      return errorMessage("이미 추가된 포켓몬");
    }
    dispatch(addPokemon(pokemon));
  };

  //포켓몬 제거
  const handleRemovePokemon = (pokemon) => {
    {
      console.log(pokemon.id);
      dispatch(removePokemon(pokemon.id));
    }
  };

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
            handleRemovePokemon(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          $isAdd={true}
          onClick={(e) => {
            e.stopPropagation();
            handleAddPokemon(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;

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
