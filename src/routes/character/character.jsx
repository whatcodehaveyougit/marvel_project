import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/characters.selector";
import Accordion from "../../components/accordion/accordion.component";
import { fetchComicsAsyncThunk } from "../../store/character/character.action";
import { fetchData } from "../../utils/utils";
import "./character.styles.scss";
import { setCharacterComics } from "../../features/character/characterSlice";

const Character = () => {
  const [characterData, setCharacterData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharacterComics([]));
  }, [dispatch]);

  const { characterid } = useParams();
  const apiRouteCharacterData = `/characters/${characterid}`;
  useEffect(() => {
    dispatch(fetchComicsAsyncThunk(characterid));
  }, [dispatch, characterid]);

  const charactersData = useSelector(selectCharacters);
  const characterComicsVar = useSelector(
    (state) => state.character.characterComics
  );
  const characterComicsLoading = useSelector(
    (state) => state.character.characterComicsLoading
  );

  useEffect(() => {
    // If we are given the character data, use that (it will save us having to do another fetch)
    if (charactersData.length > 0) {
      const character = charactersData.find(
        (character) => character.id === Number(characterid)
      );
      setCharacterData(character);
    } else {
      const fetchPageData = async () => {
        const dataFetched = await fetchData(apiRouteCharacterData);
        const dataFetchedDrilledInto = dataFetched["data"]["results"][0];
        setCharacterData(dataFetchedDrilledInto);
      };
      fetchPageData().catch(console.error);
    }
  }, [apiRouteCharacterData, charactersData, characterid]);

  const generateBackgroundImageUrl = (characterData) => {
    if (characterData) {
      const backgroundImageUrlConcatenated =
        characterData["thumbnail"]["path"] +
        "." +
        characterData["thumbnail"]["extension"];
      return backgroundImageUrlConcatenated;
    }
    return "";
  };

  return (
    <div className="character-page bg-gray-100">
      <div
        className="thumbnail-image bg-cover bg-center"
        style={{
          backgroundImage: `url(${generateBackgroundImageUrl(characterData)})`,
        }}
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
            {characterComicsLoading ? (
              <div>Loading...</div>
            ) : (
              characterComicsVar &&
              characterComicsVar.map((comic) => (
                <Accordion
                  title={comic.title}
                  description={comic.description}
                  key={comic.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
