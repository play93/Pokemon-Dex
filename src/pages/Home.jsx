import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  padding: 8px 16px;
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
