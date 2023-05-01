import { describe, expect, test } from "vitest"
import About from '../about/about.component'
import React from 'react'
import { render } from "@testing-library/react"


describe('AboutComponentTest', () => {
  test('Does a snapshot of the About component', () => {
    const { container } = render(
      <About />
    )
    expect(container).toMatchSnapshot()

  })
})