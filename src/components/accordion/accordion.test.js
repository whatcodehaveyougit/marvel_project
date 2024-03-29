import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Accordion from './accordion.component';

it('renders correctly', () => {
  const tree = renderer
    .create(<Accordion title="title example" description="example description" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('displays the clicked element', () => {
  render(<Accordion title="title example" description="example description" />);
  const accordionSummary = screen.getByTestId('accordion-summary');

  // Clicking on the accordion summary should display the description
  fireEvent.click(accordionSummary);
  const descriptionElement = screen.getByText('example description');
  expect(descriptionElement).toBeInTheDocument();

  // Clicking again should hide the description
  fireEvent.click(accordionSummary);
  expect(descriptionElement).not.toBeInTheDocument();
});