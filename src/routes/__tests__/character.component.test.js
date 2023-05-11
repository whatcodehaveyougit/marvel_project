import { render, cleanup, waitFor } from '@testing-library/react'
import { MemoryRouter as Router } from "react-router-dom";
import CharacterPage from '../character/character.component';
import { fetchData } from '../../utils/utils';

afterEach(cleanup)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    characterid: '123',
  }),
}));

// If we don't have the CharactersData we do the call, here is response
const characterMockedAPIResponse = {
  data: {
    results: {
          id: '123',
          name: 'The Hulk',
          thumbnail: {
            path: 'this-it-the-path2',
            extension: 'jpg'
          },
          description: 'He is a big monstor'
      }
  }
}

const characterComicsMockedAPIResponse = {
  data: {
    results: [
      {
        id: 1,
        title: 'A title',
        description: 'Hello World'
      },
      {
        id: 2,
        title: 'The title',
        description: 'Hello World'
      },
    ]
  }
}

  // We pass the characters API Response if we have the data
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
      id: '123',
      name: 'The Hulk',
      thumbnail: {
        path: 'this-it-the-path2',
        extension: 'jpg'
      },
      description: 'He is a big monstor'
    }
  ]

const MockCharacterPage = () => {
  return (
    <Router>
      <CharacterPage
      charactersData={charactersData} />
    </Router>
  )
}

jest.mock('../../utils/utils', () => ({
  fetchData: jest.fn((params) => {
    if (params === '/characters/123/comics'){
      return characterComicsMockedAPIResponse
    } else if ( params === '/characters/123'){
      return characterMockedAPIResponse;
    }
  })
}))


describe('CharacterPage Tests', function() {



  it('CharacterPage Snapshot with data given', async () => {

    const {container }  = render(
      <MockCharacterPage />
    )
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })


  it('CharacterPage Snapshot with no data given', async () => {

    const {container }  = render(
      <Router>
        <CharacterPage
          charactersData={[]} />
      </Router>
    )
    await waitFor(() => {
      // Sigurd - WHY called 3 times???
      expect(fetchData).toHaveBeenCalledTimes(3);
      expect(container).toMatchSnapshot()
    })
  })


})




