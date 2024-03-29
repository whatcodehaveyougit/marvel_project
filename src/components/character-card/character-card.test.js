
import { render, fireEvent, screen } from '@testing-library/react';
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
  // const tree = renderer
  //   .create(<CharacterCard character={character2} />)
  //   .toJSON();
  // expect(tree).toMatchSnapshot();
});

// it('displays the clicked element', () => {
//   render(<Accordion title="title example" description="example description" />);
//   const accordionSummary = screen.getByTestId('accordion-summary');

//   // Clicking on the accordion summary should display the description
//   fireEvent.click(accordionSummary);
//   const descriptionElement = screen.getByText('example description');
//   expect(descriptionElement).toBeInTheDocument();

//   // Clicking again should hide the description
//   fireEvent.click(accordionSummary);
//   expect(descriptionElement).not.toBeInTheDocument();
// });