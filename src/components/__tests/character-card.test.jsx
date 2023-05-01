import { describe, expect, test } from "vitest"
import CharacterCard from "../character-card/character-card.componet"
import React from 'react'
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";

const character = {
  id: '123123',
  name: 'The Hulk',
  thumbnail: {
    path: 'this-it-the-path',
    extension: 'jpg'
  },
  description: 'He is a big monstor'
}


describe('CharacterCardTests', () => {
  test('Does a snapshot of the CharacterCard component', () => {
    const { container } = render(
      <Router>
        <CharacterCard
          character={character}
        />
      </Router>

    )
    expect(container).toMatchSnapshot()

  })
})