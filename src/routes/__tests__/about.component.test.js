import { render, cleanup } from '@testing-library/react'
import { MemoryRouter as Router } from "react-router-dom";
import About from '../about/about.component';

afterEach(cleanup)

it('AboutComponent Snapshot', () => {
  const {container }  = render(
    <Router>
      <About />
    </Router>
    )
  expect(container).toMatchSnapshot()
})