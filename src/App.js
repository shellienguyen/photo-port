/*
This App.js file is the center of the application. Think of App.js as the
root component, or the wrapper component that houses all of the other
components. To effect any change on the application, we need to either
modify this file or add components inside it.

Need to import React in every component file
*/
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
   return (
      <div>
         <Nav></Nav>
         <main>
            <About></About>
         </main>
      </div>
   );
};


export default App;