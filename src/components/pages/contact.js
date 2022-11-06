import React, { useState } from "react";
import '../../css/contact.css';
import { validateEmail } from '../../helpers/helpers.js';

function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {
            target
        } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        }

        setUserName('');
        setEmail('');
    };

    return ( 
    <div id="contact">
    <h1>contact me via email below</h1>
    <form class="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <textarea
            id="message" 
            name="message"
            placeholder="this form will not send an email, please use the link at the bottom of the page"
        />
        <button 
        type="button" 
        onClick={handleFormSubmit}
        >
            Submit
        </button>
      </form>
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    );
}

export default Contact;