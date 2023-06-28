import useGames, { Game, Platform } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { SiDigikeyelectronics } from "react-icons/si";
import GameCardContainer from "./GameCardContainer";
import Data from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  
if(error) return <Text>{error}</Text>
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((data: Game) => (
          <GameCardContainer key={data.id}>
            <GameCard game={data}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
