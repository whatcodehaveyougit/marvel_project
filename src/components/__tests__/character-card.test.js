import { render, cleanup } from '@testing-library/react'
import CharacterCard from '../character-card/character-card.componet'
import { MemoryRouter as Router } from "react-router-dom";

const character = {
  id: '123123',
  name: 'The Hulk',
  thumbnail: {
    path: 'this-it-the-path',
    extension: 'jpg'
  },
  description: 'He is a big monstor'
}

afterEach(cleanup)

it('CharacterCard Snapshot', () => {
  const {container }  = render(
    <Router>
      <CharacterCard character={character} />
    </Router>
    )
  expect(container).toMatchSnapshot()
})