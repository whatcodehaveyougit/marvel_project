import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav.component';

describe('Nav', () => {

  it('renders correctly with another character', () => {
    const tree = render(<BrowserRouter><Nav /></BrowserRouter>).asFragment()
    expect(tree).toMatchSnapshot();
  });

})