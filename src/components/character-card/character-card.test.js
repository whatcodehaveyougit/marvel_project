import { render, screen } from '@testing-library/react';
// Question - Can I use thse instead of renderer ?
import CharacterCard from './character-card.component';
import character from './testData/character.json';
import character2 from './testData/character2.json';
import { BrowserRouter } from 'react-router-dom';


describe('CharacterCard', () => {
  it('renders correctly', () => {
    const view = render(<BrowserRouter><CharacterCard character={character} /></BrowserRouter>);
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(view).toMatchSnapshot()
  });

  it('renders correctly with another character', () => {
    const view = render(<BrowserRouter><CharacterCard character={character2} /></BrowserRouter>);
    expect(screen.getByText(character2.name)).toBeInTheDocument();
    expect(view).toMatchSnapshot()
  });

});
