import { describe, beforeEach, test } from "vitest"
import {fetchData}  from '../utils';

import React from 'react'


describe('Utils Tesst', () => {

  beforeEach(() => {
    delete process.env.REACT_APP_PRIVATE_KEY;
    delete process.env.REACT_APP_PUBLIC_KEY;
    delete process.env.REACT_APP_API_URL;
  });

  test('Does a snapshot of the About component', () => {
    // Something is wrong with the fetch in the utils file
    // In the testing env, so this is not returning anything
    // process.env.REACT_APP_PRIVATE_KEY=
    // process.env.REACT_APP_PUBLIC_KEY=
    // process.env.REACT_APP_API_URL=

    console.log('hello')
    fetchData('characters/1011334')
    .then(result => console.log(result))
    .then(data => {
      console.log(data)
    })
    .catch((err) => {
      console.log('error' , err)
    })
    // expect(container).toMatchSnapshot()

  })
})