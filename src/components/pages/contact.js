import React, { useState } from "react";
import '../../css/contact.css';
import { validateEmail } from '../../helpers/helpers.js';

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {
            target
        } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name is invalid');
            return;
        }

        setName('');
        setEmail('');
    };

    return ( 
    <div id="contact">
    <h1>contact me via email below</h1>
    <form 
        target="_blank" 
        action="https://formsubmit.co/jessica.lane.a@gmail.com"
        method="POST"
        class="form"
    >
        <input
            type="hidden"
            name="subject"
            value="email from portfolio"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          required
        />
        <textarea
            id="message" 
            name="message"
            placeholder="this form will not send an email, please use the link at the bottom of the page"
            required
        />
        <button 
        type="submit" 
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