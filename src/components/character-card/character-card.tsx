import { Link } from "react-router-dom";
import "./character-card.styles.scss";
import Description from "./description.tsx";
import { TCharacter } from "../../types/types.ts";

type CharacterCardProps = {
  character: TCharacter;
};

const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  return (
    <div className="character-card relative h-full text-center">
      <img
        className="w-full h-120 object-cover"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white">
        <div className="p-4">
          <h5 className="text-xl font-bold">{character.name}</h5>
          <Description character={character} />
        </div>
        <div className="text-center mb-4">
          <Link
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded block"
            to={`/character/${character.id}`}
          >
            Find out more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
