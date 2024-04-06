import { render, screen } from "@testing-library/react";
// Question - Can I use thse instead of renderer ?
import CharacterCard from "./character-card";
import character from "./testData/character.json";
import character2 from "./testData/character2.json";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "@jest/globals";

describe("CharacterCard", () => {
  it("renders correctly", () => {
    const view = render(
      <BrowserRouter>
        <CharacterCard character={character} />
      </BrowserRouter>
    );
    expect(screen.getByText(character.name)).toBeTruthy();
    expect(view).toMatchSnapshot();
  });

  it("renders correctly with another character", () => {
    const view = render(
      <BrowserRouter>
        <CharacterCard character={character2} />
      </BrowserRouter>
    );
    expect(screen.getByText(character2.name)).toBeTruthy();
    expect(view).toMatchSnapshot();
  });
});
