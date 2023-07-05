import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";

import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";

import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";
import useGameQueryStore from "./store";



function App() {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar  />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
           ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading />
        <Box  paddingLeft={2} >
          <Flex marginBottom={5}>
            <Box marginRight ={5}>

          <PlatformSelector />

            
            </Box>
          
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
