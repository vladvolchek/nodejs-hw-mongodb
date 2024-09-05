import { ContactsCollection } from '../db/models/contacts.js';


export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (id) => ContactsCollection.findById(id);
