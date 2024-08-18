import React from "react";
import MOCK_DATA from "../mock";
import styled from "styled-components";

//개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트입니다.
const Card = styled.li`
  background: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
`;

const PokemonNum = styled.p`
  font-size: 14px;
  color: #888;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: green;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected, navigate }) => {
  return (
    <Card onClick={() => navigate("/pokemon-detail?id=" + pokemon.id)}>
      <img src={pokemon.img_url} alt={""} />
      <h3>{pokemon.korean_name}</h3>
      <PokemonNum>No. {pokemon.id}</PokemonNum>
      {isSelected ? (
        <Button
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;
