import { render, cleanup } from '@testing-library/react'
import Nav from '../nav/nav.component';
import { MemoryRouter as Router } from "react-router-dom";

afterEach(cleanup)

it('NavigationComponent Snapshot', () => {
  const {container }  = render(
    <Router>
      <Nav />
    </Router>
    )
  expect(container).toMatchSnapshot()
})