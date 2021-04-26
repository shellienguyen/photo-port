import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);


/*
Note that the describe function is not absolutely necessary for the test to run;
it is used to organize tests into sections that are typically labeled with the
element being tested.
*/


describe( 'Nav component', () => {
   // baseline test
   it( 'renders', () => {
      render( <Nav /> );
   });

   // snapshot test
   it( 'matches snapshot', () => {
      const { asFragment } = render( <Nav /> );
      
      expect( asFragment() ).toMatchSnapshot();
   });
});


describe( 'emoji is visible', () => {
   it( 'inserts emoji into the h2', () => {
   // Return the element containing the emoji
   const { getByLabelText } = render( <Nav /> );

   // Use the getByLabelText method and query by the aria-label value (for
   // testing accessability), which can be seen in the preceding markup as camera
   expect( getByLabelText( 'camera' )).toHaveTextContent( '📸' );
   });
});


describe( 'links are visible', () => {
   // Verify that the text content is being inserted into the <a> tags
   it( 'inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render( <Nav /> );

      // Assert
      expect( getByTestId( 'link' )).toHaveTextContent( 'Oh Snap!' );
      expect( getByTestId( 'about' )).toHaveTextContent( 'About me' );
   });
});