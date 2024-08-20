import React from "react";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pokemonDetail from "../pages/pokemonDetail";

//개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트입니다.
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

const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected, navigate }) => {
  //props로 pokemon, onAdd, onRemove, isSelected, navigate를 받아옴
  //pokemon: MOCK_DATA 목업데이터
  //onAdd,onRemove: 각각 포켓몬 선택, 제거 함수
  //isSelected: 현재 포켓몬이 선택된 상태인지 확인하여 전달
  //navigate: 포켓몬 상세페이지로 이동하기 위해 navigate 함수 전달
  return (
    <Card onClick={() => navigate("/pokemonDetail?id=" + pokemon.id)}>
      {/* 카드를 클릭하면 이동 */}

      <img src={pokemon.img_url} alt={pokemon.korean_name} />

      <h3>{pokemon.korean_name}</h3>

      <PokemonNum>No. {pokemon.id}</PokemonNum>

      {isSelected ? (
        <Button
          $isAdd={false}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(pokemon);
          }}
        >
          삭제
        </Button> //onRemove인 경우 삭제로
      ) : (
        <Button
          $isAdd={true}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button> //onAdd인 경우 추가로
      )}
    </Card>
  );
};

export default PokemonCard;
