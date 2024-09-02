import React, { useRef } from 'react';
import './ContactPage.css';

const ContactPage = () =>{

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) =>{

    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    //console log silebiliriz isternirse
    console.log('ad,email, mesaj:', { name, email, message });

    //Send dedikten sonra silmek için
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="contact-container">

      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <label>
          Name
          <input type="text" ref={nameRef} required />
        </label>

        <label>
          Email
          <input type="email" ref={emailRef} required />
        </label>

        <label>
          Message
          <textarea ref={messageRef} rows="5" required />
        </label>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
