
import { render, fireEvent, screen } from '@testing-library/react';
// Question - Can I use thse instead of renderer ?
import renderer from 'react-test-renderer';
import CharacterCard from './character-card.componet';
import character from './character.json';
import character2 from './character2.json';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><CharacterCard character={character} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with another character', () => {
  const tree = renderer
    .create(<BrowserRouter><CharacterCard character={character2} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
