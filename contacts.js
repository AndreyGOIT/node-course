const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then(
      console.log((data) => data.toString().find(({ id }) => id === contactId))
    )
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  fs.writeFile(contactsPath, (data) =>
    data.filter(({ id }) => id !== contactId)
  )
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function addContact(name, email, phone) {
  fs.appendFile(contactsPath, { name, email, phone })
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
