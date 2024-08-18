//선택된 포켓몬을 보여주는 컴포넌트입니다.
import React from "react";
import styled from "styled-components";

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
`;

function Dashboard({ selectedPokemon }) {
  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <div>
        {selectedPokemon.length === 0 ? (
          <p>선택된 포켓몬이 없습니다.</p>
        ) : (
          <ul>
            {selectedPokemon.map((pokemon) => (
              <li key={pokemon.id}>{pokemon.korean_name}</li>
            ))}
          </ul>
        )}
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
