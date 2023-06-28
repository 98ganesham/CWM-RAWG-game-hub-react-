import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatFormicon from "./PlatFormiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatFormicon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormicon>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating ={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
