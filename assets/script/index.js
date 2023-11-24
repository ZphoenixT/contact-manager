'use strict';

import { createContact, Contact } from './utils';

document.getElementById('addContact').addEventListener('click', function() {
    const newContactInfo = createContact();
    console.log("New Contact Information:");
    console.log("Full Name:", newContactInfo.fullName);
    console.log("City:", newContactInfo.city);
    console.log("Email:", newContactInfo.email);

    const contactPage = document.querySelector('.contactPage');
    const newContactDiv = document.createElement('div');
    newContactDiv.classList.add('contactBox'); // Adding a class for styling

    const formattedInfo = `
        <p><strong>Name:</strong> ${newContactInfo.fullName}</p>
        <p><strong>City:</strong> ${newContactInfo.city}</p>
        <p><strong>Email:</strong> ${newContactInfo.email}</p>
    `;
    newContactDiv.innerHTML = formattedInfo;

    contactPage.appendChild(newContactDiv);
});