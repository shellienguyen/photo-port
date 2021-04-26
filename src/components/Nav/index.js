import React from 'react';

const Nav = () => {
   const categories = [
      { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects" },
      { name: "portraits", description: "Portraits of people in my life" },
      { name: "food", description: "Delicious delicacies" },
      { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature" },
   ];

   function categorySelected( name ) {
      console.log( `${name} clicked` );
   };

   return (
      <header>
         <h2>
            <a data-testid="link" href="/">
               <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
         </h2>

         <nav>
            <ul className="flex-row">
               <li className="mx-2"><a data-testid="about" href="#about">About me</a></li>
               <li><span>Contact</span></li>
               {/*
               Whenever we map over anything in JSX, the outermost element
               must have a key attribute that's set to be something unique.
               This helps React keep track of items in the virtual DOM.
               When mapping over an array in a JSX expression, return only a
               single JSX element.
               */}
               {categories.map(( category ) => (
                  <li className="mx-1" key={category.name}>
                     {/*
                     The onClick() attribute is expecting a callback function
                     declaration. It's important to wrap it in a function
                     declaration rather than just calling
                     categorySelected(category.name), which would cause the
                     function to get called whenever the component renders as well.
                     */}
                     <span onClick={() => categorySelected( category.name )}>{category.name}</span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};


export default Nav;