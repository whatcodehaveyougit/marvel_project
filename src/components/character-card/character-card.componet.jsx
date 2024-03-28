import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./character-card.styles.scss";

const CharacterCard = ({ character }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    console.log(containerRef2);
    const container = containerRef;
    const content = containerRef2;

    if (content.current !== null && container.current !== null) {
      const clientHeight = container.current.clientHeight;
      const scrollHeight = content.current.scrollHeight;

      console.log(clientHeight);
      console.log(scrollHeight);

      if (scrollHeight > clientHeight) {
        console.log("Content is truncated or overflowing");
        const visibleCharacters = Math.floor(
          (clientHeight / scrollHeight) * content.current.textContent.length
        );
        console.log(`Visible characters: ${visibleCharacters}`);
        const hiddenCharacters =
          content.current.textContent.length - visibleCharacters;
        console.log(`Visible characters: ${visibleCharacters}`);
        console.log(`Hidden characters: ${hiddenCharacters}`);
        //
        setIsTruncated(true);
      } else {
        setIsTruncated(false);
        console.log("Content is fully visible");
      }
    }
  }, [containerRef2]);

  return (
    <div className="character-card relative h-full text-center">
      <img
        className="w-full h-120 object-cover"
        src={`${character["thumbnail"]["path"]}.${character["thumbnail"]["extension"]}`}
        alt={character.name}
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white">
        <div className="p-4">
          <h5 className="text-xl font-bold">{character.name}</h5>

          <div
            ref={containerRef}
            className={`container-${character.id} max-lines`}
          >
            {character.description && (
              <div className="text-gray-500">
                <p ref={containerRef2} id={character.id}>
                  {character.description}
                </p>
                {isTruncated && <span className="ellipsis">.....</span>}
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
