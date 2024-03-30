import { render, fireEvent, screen } from '@testing-library/react';
import Spinner from './spinner.component';

describe('Spinner', () => {

  it('renders correctly', () => {
    const tree = render(<Spinner />).asFragment();
    expect(tree).toMatchSnapshot();
  });

})