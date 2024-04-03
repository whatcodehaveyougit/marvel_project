import { render } from '@testing-library/react';
import character2 from './testData/character2.json';
import React, { useRef } from 'react';
import Description from './description';


// Remove the unnecessary console.log statement
// React.useRef = () => ({ current: { clientHeight: 100, scrollHeight: 200 } });

describe('Description', () => {

  it('renders correctly with another character and useRef being mocked', () => {
    // reactMock.useRef = { current: { clientHeight: 100, scrollHeight: 200 } };
    // const useRefSig = jest.fn();
    jest.mock('react', () => {
      // const originReact = jest.requireActual('react');
      return {
        // ...originReact,
        'hello': 'world',
        'useRef': { current: { clientHeight: 100, scrollHeight: 200 } }, // Not working
      };
    });

    const { asFragment } = render(
        <Description character={character2} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

});


// Problem

// Cannot mock useRef in the test file and the HTML components are not rendered with
// All the attributes and values as normal so it does't go through the whole if statement
// So doesn't test the whole file
// I think it is useRef that I need to mock but not 100% sure.,.