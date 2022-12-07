const { name } = require("ejs");
const fs = require("fs");

//buat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//buat contact.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//mengambil semua data contact.json
const saveContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

//mencari kontak berdasarkan nama
const findContact = (name) => {
  const contacts = saveContact();
  const contact = contacts.find((contact) => contact.name === name);
  return contact;
};

module.exports = { saveContact, findContact };
