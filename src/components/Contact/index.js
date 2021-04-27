import React, { useState } from 'react';


const ContactForm = () => {
   const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
   const { name, email, message } = formState;

   /*
   Use the setFormState function to update the formState value for the name
   property. Assign the value taken from the input field in the UI with
   e.target.value and assign this value to the property formState.name.
   Use the spread operator, ...formState to retain the other key-value pairs
   in this object. Without the spread operator, the formState object would be
   overwritten to only contain the name: value key pair.
   */
   const handleChange = ( e ) => {
      /* setFormState is asynchronous
      The name property of target actually refers to the name attribute of the
      form element. This attribute value matches the property names of
      formState (name, email, and message) and allows us to use [ ] to
      create dynamic property names.
      */
      setFormState({ ...formState, [e.target.name]: e.target.value });
   };

   const handleSubmit = ( e ) => {
      e.preventDefault();
      console.log( formState );
   };

   return (
      <section>
         <h1>Contact me</h1>

         <form id="contact-form" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Name:</label>
               <input type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>

            <div>
               <label htmlFor="email">Email address:</label>
               <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>

            <div>
               <label htmlFor="message">Message:</label>
               <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>

            <button type="submit">Submit</button>
         </form>
      </section>
   );
};


export default ContactForm;