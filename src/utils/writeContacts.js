import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, jsonData, 'utf8');
  } catch (err) {
    console.error('Помилка при додаванні контактів:', err);
  }
};