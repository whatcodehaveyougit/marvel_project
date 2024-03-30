import { render } from '@testing-library/react';

import Character from './character';

it('renders correctly', () => {
  const tree = render(<Character />).asFragment();
  expect(tree).toMatchSnapshot();
});