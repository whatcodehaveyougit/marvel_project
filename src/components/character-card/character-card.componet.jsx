import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./character-card.styles.scss";

const CharacterCard = ({ character }) => {
  const [numberOfCharactersToShow, setNumberOfCharactersToShow] =
    useState(null);
  const containerDiv = useRef(null);
  const contentDiv = useRef(null);
  useEffect(() => {
    const container = containerDiv.current;
    const content = contentDiv.current;
    if (content && container) {
      const containerClientHeight = container.clientHeight;
      const contentScrollHeight = content.scrollHeight;

      // Why are these not showing the heights of the elements as expected?
      // But the code still works.
      // console.log(containerClientHeight);
      // console.log(contentScrollHeight);

      if (contentScrollHeight > containerClientHeight) {
        const visibleCharacters = Math.floor(
          (containerClientHeight / contentScrollHeight) *
            (content.textContent.length - 3) // Adjust for the length of the ellipsis
        );
        setNumberOfCharactersToShow(visibleCharacters);
      }
    }
  }, []);

  function showFirstNCharacters(string, n) {
    if (n) {
      return string.slice(0, n) + "...";
    }
    return string;
  }

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

          <div
            ref={containerDiv}
            className={`container-${character.id} max-lines`}
          >
            {character.description && (
              <div className="text-gray-500">
                <p ref={contentDiv} id={`contentdiv-${character.id}`}>
                  {showFirstNCharacters(
                    character.description,
                    numberOfCharactersToShow
                  )}
                </p>
              </div>
            )}
            {!character.description && (
              <div>
                <p className="text-gray-500">No superpowers ;(</p>
              </div>
            )}
          </div>
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
