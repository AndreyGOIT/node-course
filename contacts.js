import * as fs from "fs/promises";
const fs = require("fs/promises");
const path = require("path");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const contactsPath = path.basename("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  fs.readFile("contacts.json")
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  // ...твой код
  fs.readFile("contacts.json")
    .then((data) => data.find(contactId))
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  // ...твой код
  fs.unlink(contactsPath, (data) => data.filter(({ id }) => id !== contactId))
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function addContact({ name, email, phone }) {
  // ...твой код
  fs.appendFile("contacts.json", { name, email, phone }, [options])
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
