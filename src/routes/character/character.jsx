import "./character.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/characters.selector";
import Accordion from "../../components/accordion/accordion.component";
import { fetchComicsAsyncThunk } from "../../store/characters/characters.action";
import { useDispatch } from "react-redux";

const Character = () => {
  const [characterComics, setCharacterComics] = useState();
  const [characterData, setCharacterData] = useState();
  const charactersData = useSelector(selectCharacters);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState();
  const dispatch = useDispatch();

  const { characterid } = useParams();
  console.log(characterid, "characterid");

  const apiRouteComicsData = `/characters/${characterid}/comics`;
  const apiRouteCharacterData = `/characters/${characterid}`;

  const setBackgroundImageUrlFunction = (characterData) => {
    const backgroundImageUrlConcatenated =
      characterData["thumbnail"]["path"] +
      "." +
      characterData["thumbnail"]["extension"];
    setBackgroundImageUrl(backgroundImageUrlConcatenated);
  };

  useEffect(() => {
    if (characterid) {
      dispatch(fetchComicsAsyncThunk(characterid));
    }
  }, [apiRouteComicsData]);

  useEffect(() => {
    // If we are given the character data, use that (it will save us having to do another fetch)
    if (charactersData.length > 0) {
      const character = charactersData.find(
        (character) => character.id === Number(characterid)
      );
      console.log(character, "character");
      setCharacterData(character);
      setBackgroundImageUrlFunction(character);
    } else {
      const fetchPageData = async () => {
        const dataFetched = await fetchData(apiRouteCharacterData);
        const dataFetchedDrilledInto = dataFetched["data"]["results"][0];
        setCharacterData(dataFetchedDrilledInto);
        setBackgroundImageUrlFunction(dataFetchedDrilledInto);
      };
      fetchPageData().catch(console.error);
    }
  }, [apiRouteCharacterData, charactersData, characterid]);

  return (
    <div className="character-page bg-gray-100">
      <div
        className="thumbnail-image bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="character-information p-8">
          <div className="character-page-headings">
            <h3 className="text-3xl text-center">
              {characterData ? characterData.name : null}
            </h3>
            <h5 className="text-lg text-center">
              List of comics for this character:
            </h5>
          </div>
          <div>
            {characterComics &&
              characterComics.map((comic) => (
                <Accordion
                  title={comic.title}
                  description={comic.description}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
