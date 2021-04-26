// Need react to enable the components to function properly in order to test them.
import React from 'react';

/*
Retrieve functions from the React Testing Library
The render function is to render the components
The cleanup function is to remove the components from the DOM in order
to prevent memory leak, as well as variable/data collisions between
tests that could corrupt test results.
*/
import { render, cleanup } from '@testing-library/react';

// jest-drom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

import About from '..';


// This is to ensure that after each test, there isn't any leftover memory
// data that could produce false results
afterEach( cleanup );


// The describe function declares the component being tested
describe( 'About component', () => {
   /*
   First Test: baseline to verify that the component is rendering
   Notice the use of the it function. In the first argument, a string declares
   what is being tested. In the second argument, a callback function runs the test.
   The render function renders the About component using JSX.
   Alternatively, test can also be used interchangeably with it to create a test.
   */
   it( 'renders', () => {
      render( <About /> );
   });

   /*
   Second Test: also known as a "test case", will compare snapshot versions
   of the DOM node structure. A snapshot is a serialized version of the DOM
   node structure, enabled by Jest.
   */
   it( 'matches snapshot DOM node structure', () => {
      // render About
      // asFragment returns a snapshot of the About component
      const { asFragment } = render( <About /> );

      /*
      Test and compare whether the expected and actual outcomes match.
      Use the expect function with a matcher to assert something about a value.
      Use the toMatchSnapshot matcher to assert that snapshots will match:
      */
     expect( asFragment()).toMatchSnapshot();
   });
});