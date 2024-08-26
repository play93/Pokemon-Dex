import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

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
function Dashboard() {
  const { selectedPokemon, navigate } = useContext(PokemonContext);

  const selectedPokemonWithSixLength = [
    ...selectedPokemon,
    ...Array(6).fill(null),
  ].slice(0, 6);
  console.log(selectedPokemonWithSixLength);

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      {/*SelectPockmonBox에는 6개의 비어있는 li <EmptyBox>가 있는데 selectedPokemon이 생기면 <EmptyBox>를 <PokemonCard>로 변경*/}
      <SelectPokemonBox>
        {selectedPokemonWithSixLength.map((pokemon) => {
          return pokemon ? (
            <PokemonCard
              key={pokemon.id || crypto.randomUUID()}
              pokemon={pokemon}
              isSelected={true}
              navigate={navigate}
            />
          ) : (
            <EmptyBox key={crypto.randomUUID()} />
          );
        })}
      </SelectPokemonBox>
    </DashboardContainer>
  );
}

export default Dashboard;
