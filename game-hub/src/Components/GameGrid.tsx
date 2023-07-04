import useGames, { Game }  from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import { Box, Button, SimpleGrid,Text } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading,isFetchingNextPage,fetchNextPage,hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  
if(error) return <Text>{error.message}</Text>
  return (
    <Box padding="10px">
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
          {
            data?.pages.map((page, index) =>(
              <React.Fragment key={index}> 
                {page.results.map(game =>
                  <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
                )}
              </React.Fragment>
            ))}
             </SimpleGrid>
            {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>{isFetchingNextPage ? 'Loading...' : 'Loading More'}</Button>}
             </Box>
  );
};

export default GameGrid;
