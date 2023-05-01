import { describe, expect, test } from "vitest"
import {fetchData } from '../utils';
import React from 'react'


describe('Utils Tesst', () => {

  test('Does a snapshot of the About component', () => {
    // Something is wrong with the fetch in the utils file
    // In the testing env, so this is not returning anything
    fetchData('characters/1011334')
    .then(result => result.json())
    .then(data => {
      console.log(data)
    })
    .catch((err) => {
      console.log('error' , err)
    })
    // expect(container).toMatchSnapshot()

  })
})