import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter as Router } from "react-router-dom";
import Home from '../home/home.component'

afterEach(cleanup)

const charactersData =   [
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

const MockHome = () => {
  return (
    <Router>
      <Home
        charactersData={charactersData}
      />
    </Router>
  )
}

describe('HomeComponent Tests', function() {

  it('Search input loads', () => {
    render( <MockHome /> )
    const inputElement = screen.getByPlaceholderText(/Search Marvel Characters.../)
    expect(inputElement).toBeInTheDocument()
  })

  it('We can type into input field', () => {
    render( <MockHome /> )
    const inputElement = screen.getByPlaceholderText(/Search Marvel Characters.../)
    fireEvent.change(inputElement, { target: { value: 'Hulk' } } )
    expect(inputElement.value).toBe('Hulk')
  })

  it('HomeComponent matches snapshot', () => {
    const { container } = render ( <MockHome /> )
    expect(container).toMatchSnapshot()
  })


})