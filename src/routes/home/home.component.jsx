import { Grid } from "@mui/material";
import "./home.styles.scss";
import CharacterCard from "../../components/character-card/character-card.componet";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/characters.selector";
import CustomInput from "../../components/input/input";

const Home = () => {
  const charactersData = useSelector(selectCharacters);
  const [searchTerm, setSearchTerm] = useState("");

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
        />
      </div>
      <Grid container spacing={2}>
        {filteredCharacters.map((character) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="character-card-container"
            key={character.id}
          >
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;