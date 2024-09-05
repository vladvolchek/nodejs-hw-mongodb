import { ContactsCollection } from '../db/models/contacts.js';

// export const getAllContacts = async () => {
//   const contacts = await ContactsCollection.find();
//   return contacts;
// };

// export const getContactById = async (id) => {
//   const contact = await ContactsCollection.findById(id);
//   return contact;
// };

export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (id) => ContactsCollection.findById(id);
