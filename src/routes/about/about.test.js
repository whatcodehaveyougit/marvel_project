import { render } from '@testing-library/react';

import About from './about.tsx';

it('renders correctly', () => {
  const tree = render(<About />).asFragment();
  expect(tree).toMatchSnapshot();
});