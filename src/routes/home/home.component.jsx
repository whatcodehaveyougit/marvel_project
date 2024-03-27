import { Grid } from "@mui/material";
import "./home.styles.scss";
import CharacterCard from "../../components/character-card/character-card.componet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/characters.selector";

const Home = () => {
  const charactersData = useSelector(selectCharacters);
  const [userFilteredCharacters, setUserFilteredCharacters] = useState();

  const handleChange = (e) => {
    const filteredCharacters = charactersData.filter((character) =>
      character.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUserFilteredCharacters(filteredCharacters);
  };
  useEffect(() => {
    if (charactersData) {
      setUserFilteredCharacters(charactersData);
    }
  }, [charactersData]);

  return (
    <div className="home-container">
      <div className="search-bar-component">
        <input
          placeholder="Search Marvel Characters..."
          name="search-monsters"
          className="search-monsters-input"
          onChange={handleChange}
        />
      </div>
      <Grid container spacing={2}>
        {userFilteredCharacters &&
          userFilteredCharacters.map((character) => (
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
