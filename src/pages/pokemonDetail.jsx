//디테일 페이지입니다.
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

function pokemonDetail() {
  const location = useLocation;
  const navigate = useNavigate;
  const pokemon = MOCK_DATA.some((p) => p.id === MOCK_DATA.id);

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>타입: {pokemon.types}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate("/dex/")}>뒤로가기</button>
    </div>
  );
}

export default pokemonDetail;
