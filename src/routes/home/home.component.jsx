import "./home.styles.scss";
import CharacterCard from "../../components/character-card/character-card.componet";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCharacters,
  selectCharactersLoading,
} from "../../store/characters/characters.selector";
import CustomInput from "../../components/input/input";
import Spinner from "../../components/spinner/spinner";

const Home = () => {
  const charactersData = useSelector(selectCharacters);
  const [searchTerm, setSearchTerm] = useState("");
  const isLoading = useSelector(selectCharactersLoading);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCharacters = charactersData.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-bar-component">
        <CustomInput
          type="text"
          placeholder="Search Marvel Characters..."
          value={searchTerm}
          onChange={handleChange}
          name="search-monsters"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      {isLoading ? (
        <div>
          {/* <Spinner /> */}
          Loading
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCharacters.map((character) => (
            <div className="character-card-container" key={character.id}>
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
