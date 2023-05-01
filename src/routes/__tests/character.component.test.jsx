import { describe, expect, test } from "vitest"
import Character from '../character/character.component'
import React from 'react'
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";

const charactersData = [
  {
    id: '890',
    name: 'The Man',
    thumbnail: {
      path: 'this-it-the-path',
      extension: 'jpg'
    },
    description: 'He is a big monstor'
  },
  {
    id: '123123',
    name: 'The Hulk',
    thumbnail: {
      path: 'this-it-the-path2',
      extension: 'jpg'
    },
    description: 'He is a big monstor'
  }
]

// Need to figure out how to pass the params into the Character component
// As I am passing an array here and need to filter it to the url params to get the character

describe('CharacterComponentTest', () => {
  test('Does a snapshot of the Character component', () => {


    const { container } = render(
      <Router>
        <Character
          charactersData={charactersData}
        />
      </Router>
    )
    expect(container).toMatchSnapshot()

  })
})