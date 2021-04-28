import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


const Nav = ( props ) => {
   const { categories = [],
                        setCurrentCategory,
                        currentCategory,
                        contactSelected,
                        setContactSelected } = props;
   
   /*
   The first argument is the callback function, and the second argument is
   an array with a single element, currentCategory. The second argument
   directs the hook to re-render the component on changes to the value of
   this state. In other words, if currentCategory changes now, the component
   will re-render so that the change in document.title will be visible to the user.
   */
   useEffect(() => {
      document.title = capitalizeFirstLetter( currentCategory.name );
   }, [ currentCategory ]);

   return (
      <header className="flex-row px-1">
         <h2>
            <a data-testid="link" href="/">
               <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
         </h2>

         <nav>
            <ul className="flex-row">
               <li className="mx-2">
                  <a data-testid="about" href="#about"
                     onClick={() => setContactSelected( false )}>
                     About me
                  </a>
               </li>

               {/*
               If the value of contactSelected is true, which means that the user
               selected Contact, then use the the CSS class navActive, which will
               illuminate the background.
               */}
               <li className={ `mx-2 ${contactSelected && 'navActive' }` }>
                  <span onClick={ () => setContactSelected( true )}>Contact</span>
               </li>

               {/*
               Whenever we map over anything in JSX, the outermost element
               must have a key attribute that's set to be something unique.
               This helps React keep track of items in the virtual DOM.
               When mapping over an array in a JSX expression, return only a
               single JSX element.
               Note also that the navActive class value is assigned only if
               Contact hasn't been selected and the current category HAS been
               selected.
               */}
               {categories.map(( category ) => (
                  <li className={ `mx-1
                                  ${ currentCategory.name === category.name
                                     && !contactSelected && `navActive` }`
                                } key={category.name}>
                     {/*
                     The onClick() attribute is expecting a callback function
                     declaration. It's important to wrap it in a function
                     declaration rather than just calling
                     categorySelected(category.name), which would cause the
                     function to get called whenever the component renders as well.
                     */}
                     <span onClick={ () => { setCurrentCategory( category );
                                             setContactSelected( false ); }}>
                        {capitalizeFirstLetter( category.name )}
                     </span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};


export default Nav;