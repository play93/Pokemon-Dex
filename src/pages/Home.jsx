import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 30px;
`;

const StartBtn = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Title>포켓몬 도감</Title>
      <StartBtn onClick={() => navigate("/dex")}>시작하기</StartBtn>
    </HomeContainer>
  );
}

export default Home;
