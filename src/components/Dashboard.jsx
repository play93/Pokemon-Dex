import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const DashboardContainer = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: 20px auto;
  background-color: aliceblue;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SelectPokemonBox = styled.ul`
  display: grid;
  margin: auto;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;
const EmptyBox = styled.li`
  text-align: center;
  width: 100px;
  height: 100px;
  border: 3px dotted #ccc;
  border-radius: 10px;
  background-image: url(https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png);
  background-size: 60%;
  background-position: center center;
  background-repeat: no-repeat;
  margin: auto;
`;
function Dashboard({ onAddPokemon, onRemovePokemon, selectedPokemon }) {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <SelectPokemonBox>
        <EmptyBox></EmptyBox>
        {selectedPokemon.map((pokemon) => {
          return pokemon ? (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={onRemovePokemon}
              isSelected={true}
              navigate={navigate}
            />
          ) : (
            <EmptyBox></EmptyBox>
          );
        })}
      </SelectPokemonBox>
    </DashboardContainer>
  );
}

export default Dashboard;
