import { describe, expect, test } from "vitest"
import Nav from '../nav/nav.component'
import React from 'react'
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";


describe('NavComponentTest', () => {
  test('Does a snapshot of the Nav component', () => {
    const { container } = render(
      <Router>
        <Nav />
      </Router>
    )
    expect(container).toMatchSnapshot()

  })
})