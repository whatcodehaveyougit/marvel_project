import React, { useEffect, useRef, useState } from "react";
import { showFirstNCharacters } from "../../utils/utils";

function Description({ character }) {
  const [numberOfCharactersToShow, setNumberOfCharactersToShow] =
    useState(null);
  const containerDiv = useRef(null);
  const contentDiv = useRef(null);

  useEffect(() => {
    // console.log("container", containerDiv.current);
    // console.log("content", contentDiv.current);
    // console.log(character);
    if (containerDiv && contentDiv) {
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
    }
  }, []);

  return (
    <div ref={containerDiv} className={`container-${character.id} max-lines`}>
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
  );
}

export default Description;
