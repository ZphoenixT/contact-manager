'use strict';

import { createContact } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
    let contactCount = 0;

    document.querySelector('.submit').addEventListener('click', function() {
        if (contactCount < 9) {
            const newContactInfo = createContact();
            const contactPage = document.querySelector('.contactPage');

            let currentRow = document.querySelector('.contactRow:last-child');

            if (!currentRow || currentRow.children.length === 3) {
                currentRow = document.createElement('div');
                currentRow.classList.add('contactRow');
                contactPage.appendChild(currentRow);
            }

            const newContactDiv = document.createElement('div');
            newContactDiv.classList.add('contactBox');

            const formattedInfo = `
                <p class="contactText"><strong>Name:</strong> ${newContactInfo.fullName}</p>
                <p class="contactText"><strong>City:</strong> ${newContactInfo.city}</p>
                <p class="contactText"><strong>Email:</strong> ${newContactInfo.email}</p>
            `;
            newContactDiv.innerHTML = formattedInfo;

            currentRow.appendChild(newContactDiv);
            contactCount++;
        } else {
            alert("You've reached the limit of 9 contacts (3x3 grid)!");
        }
    });
});