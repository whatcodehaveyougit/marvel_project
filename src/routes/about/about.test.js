import renderer from 'react-test-renderer';
import About from './about.component';

it('renders correctly', () => {
  const tree = renderer
    .create(<About />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});