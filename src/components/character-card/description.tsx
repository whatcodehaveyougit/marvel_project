import React, { useEffect, useRef, useState } from "react";
import { showFirstNCharacters } from "../../utils/utils.ts";
import { TCharacter } from "../../types/types.ts";

type DescriptionCardProps = {
  character: TCharacter;
};

function Description({ character }: DescriptionCardProps): JSX.Element {
  const [numberOfCharactersToShow, setNumberOfCharactersToShow] = useState<
    null | number
  >(null);
  const containerDiv = useRef<null | HTMLDivElement>(null);
  const contentDiv = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (containerDiv && contentDiv) {
      const container = containerDiv.current;
      const content = contentDiv.current;

      if (content && container) {
        const containerClientHeight = container.clientHeight;
        const contentScrollHeight = content.scrollHeight;

        if (contentScrollHeight > containerClientHeight) {
          const visibleCharacters = Math.floor(
            (containerClientHeight / contentScrollHeight) *
              ((content.textContent?.length ?? 0) - 3) // Adjust for the length of the ellipsis
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
