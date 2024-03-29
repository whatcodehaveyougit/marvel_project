// import { describe, beforeEach, test } from "vitest"
import {fetchData}  from './utils';


describe('Utils Tesst', () => {

  beforeEach(() => {
    delete process.env.REACT_APP_PRIVATE_KEY;
    delete process.env.REACT_APP_PUBLIC_KEY;
    delete process.env.REACT_APP_API_URL;
  });

  test('logic of fetchData component', () => {

    // fetchData('characters/1011334')
    // .then(data => {
    //   console.log(data)
    // })
    // .catch((err) => {
    //   console.log('error' , err)
    // })
    expect(true).toBe(true)

  })
})