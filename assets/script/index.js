'use strict';

import { Contact, addContact, createContactDiv } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit');
    const contactPage = document.querySelector('.contactPage');
    let contacts = [];

    submitButton.addEventListener('click', () => {
        const contactInput = document.querySelector('.contactInfo');
        addContact(contacts, contactInput, contactPage, createContactDiv);
    });
});
