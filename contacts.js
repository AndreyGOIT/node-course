const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  console.table(data.toString());
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  console.log(data);
  try {
    const contacts = JSON.parse(data);
    console.log(contacts);

    const contactById = contacts.find((contact) => contact.id === contactId);
    console.log(contactById);
  } catch {
    (err) => console.log(err.message);
  }
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  // console.log(data);
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
  contacts.push({ name, email, phone });
  console.log(contacts);
  // fs.appendFile(contactsPath, (name, email, phone), "utf8")
  //   .then((data) => console.log(data.toString()))
  //   .catch((err) => console.log(err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
