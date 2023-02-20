const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  console.table(data.toString());
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  try {
    const contacts = JSON.parse(data);
    const contactById = contacts.find((contact) => contact.id === contactId);
    console.log(contactById);
  } catch {
    (err) => console.log(err.message);
  }
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  try {
    const contacts = JSON.parse(data);
    const newContacts = contacts.filter(({ id }) => id !== contactId);
    console.log(newContacts);
  } catch {
    (err) => console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf8");

  const contacts = JSON.parse(data);
  const id = contacts.length + 1;

  const contact = { id, name, email, phone };

  contacts.push(contact);
  console.log(contacts);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
