'use strict';

class Contact {
    #fullName;
    #city;
    #email;

    constructor(fullName, city, email) {
        this.#fullName = fullName;
        this.#city = city;
        this.#email = email;
    }

    get fullName() { return this.#fullName; }
    get city() { return this.#city; }
    get email() { return this.#email; }
}

let contactCounter = 0;


function displayContact(contact, contactPage) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.innerHTML = `
        <p><strong>Name:</strong> ${contact.fullName}</p>
        <p><strong>City:</strong> ${contact.city}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
    `;
    contactPage.appendChild(contactDiv);
}


function addContact(contacts, contactInput, contactPage, createContactDiv) {
    const contactInfo = contactInput.value.trim();
    const [fullName, city, email] = contactInfo.split(',');

    const isValidFullName = fullName.trim().length >= 3;
    const isValidCity = city.trim().length >= 3;
    const isValidEmail = email.includes('@') && email.includes('.');

    if (!(isValidFullName && isValidCity && isValidEmail)) {
        alert('Please enter valid information.');
        return; 
    }

    const contactNumberElement = document.querySelector('.contactNumber');

    if (contactCounter >= 9) {
        alert('You can only add up to 9 contacts.');
        return; 
    }

    const newContact = new Contact(fullName, city, email);
    contacts.push(newContact);

    const contactDiv = createContactDiv(newContact);

    contactDiv.addEventListener('click', () => {
        contactDiv.remove();
        contactCounter--;
        contactNumberElement.textContent = `Number of contacts: ${contactCounter}`;
    });

    contactPage.appendChild(contactDiv);

    contactCounter++;
    contactNumberElement.textContent = `Number of contacts: ${contactCounter}`;

    contactInput.value = '';
}


function createContactDiv(contact) {
    const contactBox = document.createElement('div');
    contactBox.classList.add('contactBox');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.innerHTML = `
        <p><strong>Name:</strong> ${contact.fullName}</p>
        <p><strong>City:</strong> ${contact.city}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
    `;

    contactBox.appendChild(contactDiv);
    return contactBox;
}

export { Contact, addContact, createContactDiv };