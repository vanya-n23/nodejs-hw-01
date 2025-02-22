import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    if (typeof number !== 'number' || number <= 0) {
      throw new Error('Аргумент має бути числом більше 0');
    }

    let existingData = [];

    const fileData = await readContacts();
    if (Array.isArray(fileData)) {
      existingData = fileData;
    }

    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...existingData, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Успішно додано ${number} нових контактів!`);
  } catch (err) {
    console.error('Помилка додавання контактів:', err);
  }
};

generateContacts(5);