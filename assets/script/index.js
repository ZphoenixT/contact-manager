'use strict';

import { createContact } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit').addEventListener('click', function() {
        const newContactInfo = createContact();

        const contactPage = document.querySelector('.contactPage');
        const newContactDiv = document.createElement('div');
        newContactDiv.classList.add('contactBox');

        const formattedInfo = `
            <p><strong>Name:</strong> ${newContactInfo.fullName}</p>
            <p><strong>City:</strong> ${newContactInfo.city}</p>
            <p><strong>Email:</strong> ${newContactInfo.email}</p>
        `;
        newContactDiv.innerHTML = formattedInfo;

        contactPage.appendChild(newContactDiv);
    });
});