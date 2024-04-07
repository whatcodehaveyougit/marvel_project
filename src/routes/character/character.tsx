import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../components/accordion/accordion.tsx";
import { fetchCharacterComicsAsync } from "../../store/characterComics/character.comics.slice.ts";
import { fetchCharacterDataAsync } from "../../store/character/character.slice.ts";
import { generateBackgroundImageUrl } from "../../utils/utils.ts";
import "./character.styles.scss";
import { setCharacterData } from "../../store/character/character.slice.ts";
import {
  selectCharacterComics,
  selectIsCharacterComicsLoading,
  selectCharacterComicsError,
} from "../../store/characterComics/character.comics.selector.ts";
import { selectCharacterData } from "../../store/character/character.selector.ts";
import Spinner from "../../components/spinner/spinner.component.tsx";

const Character = (): JSX.Element => {
  const dispatch = useDispatch();
  const { characterid } = useParams();
  useEffect(() => {
    dispatch(setCharacterData(undefined));
    dispatch(fetchCharacterComicsAsync(characterid));
    dispatch(fetchCharacterDataAsync(characterid));
  }, [dispatch, characterid]);

  const characterComicsArr = useSelector(selectCharacterComics);
  const characterComicsLoading = useSelector(selectIsCharacterComicsLoading);
  const characterComicsError = useSelector(selectCharacterComicsError);

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
            {characterComicsLoading === true && <Spinner />}
            {characterComicsArr &&
              characterComicsLoading !== true &&
              characterComicsArr.map((comic) => (
                <Accordion
                  title={comic.title}
                  description={comic.description}
                  key={comic.id}
                />
              ))}
            {characterComicsError && (
              <p className="text-3xl text-center">{characterComicsError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
