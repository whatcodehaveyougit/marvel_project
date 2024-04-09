import { render, screen } from "@testing-library/react";
// Question - Can I use thse instead of renderer ?
import CharacterCard from "./character-card";
import * as character from "../../testData/character-object.json";
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
});
