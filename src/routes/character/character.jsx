import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../components/accordion/accordion.component";
import {
  fetchCharacterComicsAsync,
  fetchCharacterDataAsync,
} from "../../store/character/character.action";
import { generateBackgroundImageUrl } from "../../utils/utils";
import "./character.styles.scss";
import {
  setCharacterComics,
  setCharacterData,
} from "../../store/character/characterSlice";
import {
  selectCharacterComics,
  selectIsCharacterComicsLoading,
  selectCharacterData,
} from "../../store/character/character.selector";
import Spinner from "../../components/spinner/spinner.component";

const Character = () => {
  const dispatch = useDispatch();
  const { characterid } = useParams();
  useEffect(() => {
    dispatch(setCharacterComics([]));
    dispatch(setCharacterData(null));
    dispatch(fetchCharacterComicsAsync(characterid));
    dispatch(fetchCharacterDataAsync(characterid));
  }, [dispatch, characterid]);

  const characterComicsArr = useSelector(selectCharacterComics);
  const characterComicsLoading = useSelector(selectIsCharacterComicsLoading);
  const characterData = useSelector(selectCharacterData);

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
              <Spinner />
            ) : (
              characterComicsArr &&
              characterComicsArr.map((comic) => (
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
