import { describe, expect, test } from "vitest"
import CharacterCard from "../character-card/character-card.componet"
import React from 'react'
import { render } from "@testing-library/react"


const character = {
  id: '123123',
  name: 'The Hulk',
  thumbnail: {
    path: 'this-it-the-path',
    extension: 'jpg'
  },
  description: 'He is a big monstor'
}


console.log(CharacterCard(character))

describe('CharacterCardTests', () => {
  test('Does a snapshot of the CharacterCard component', () => {

    const { container } = render(
      <CharacterCard
        character={character}
      />
    )
    expect(container).toMatchSnapshot()

  })
})