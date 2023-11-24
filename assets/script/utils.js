'use strict';

class Contact {
    #fullName;
    #city;
    #email;

    constructor (fullName, city, email) {
        this.#fullName = fullName;
        this.#city = city;
        this.#email = email;
    }

    get fullName() {return this.#fullName};
    get city() {return this.#city};
    get email() {return this.#email};
}

function createContact() {
    const fullName = document.querySelector('.contactInfo').value;
    const [fullNameInput, cityInput, emailInput] = 
    fullName.split(',').map(info => info.trim());

    const newContact = new Contact(fullNameInput, cityInput, emailInput);
    return newContact;
}

export { Contact, createContact };