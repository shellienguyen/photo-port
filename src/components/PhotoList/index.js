import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {
   // Set to false, wait until a user clicks on an image first
   const [ isModalOpen, setIsModalOpen ] = useState( false );
   const [ currentPhoto, setCurrentPhoto ] = useState();

   const [ photos ] = useState([
      {
         name: 'Grocery aisle',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Grocery booth',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Building exterior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Restaurant table',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Cafe interior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Cat green eyes',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Green parrot',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Yellow macaw',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Pug smile',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Pancakes',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burrito',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Scallop pasta',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burger',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Fruit bowl',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Green river',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Docks',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Panoramic village by sea',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Domestic landscape',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Park bench',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
   ]);

   /*
   Go through each photo in the photos array, find every photo that matches
   the category that was selected by the user. If a photo matches the
   condition, it is returned in an array and assigned to currentPhotos
   */
   const currentPhotos = photos.filter(( photo ) => photo.category === category );
    
   const toggleModal = ( image, i ) => {
      // Set current photo.  The ... spread operation retains the key:value pairs
      setCurrentPhoto({ ...image, index: i });
      setIsModalOpen( !isModalOpen );
    }

   return (
      <div>
         { isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} /> }

         <div className="flex-row">
            {/* Map the currentPhotos array to render each photo that matches the category selected by the user. */}
            {currentPhotos.map(( image, i ) => (
               <img src={require( `../../assets/small/${category}/${i}.jpg` ).default}
                    alt={image.name} className="img-thumbnail mx-1"
                    onClick={() => toggleModal( image, i )}
                    key={image.name} />
            ))}
         </div>
      </div>
  );
};


export default PhotoList;