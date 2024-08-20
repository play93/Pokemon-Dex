//디테일 페이지입니다.
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const PokemonInfoBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const GoBackButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  transition: transform 0.1s, box-shadow 0.1s;
  &:hover {
    transform: translateY(3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.8);
    background-color: red;
    color: white;
  }
`;

function pokemonDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  console.log(params); //params 확인
  const pokemonId = Number(params.get("id"));
  console.log(pokemonId); //params에서 가져온 id확인
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);
  console.log(pokemon);

  return (
    <PokemonInfoBox>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>타입: {pokemon.types}</p>
      <p>{pokemon.description}</p>
      <GoBackButton onClick={() => navigate("/dex")}>뒤로가기</GoBackButton>
    </PokemonInfoBox>
  );
}

export default pokemonDetail;
