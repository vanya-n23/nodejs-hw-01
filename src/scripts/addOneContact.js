import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  let existingData = [];

  try {
    const fileData = await readContacts();
    if (Array.isArray(fileData)) {
      existingData = fileData;
      const newContact = createFakeContact();

      const updatedContacts = [...existingData, newContact];

      await writeContacts(updatedContacts);
      console.log(`Успішно додано новий контакт!`);
    }
  } catch (err) {
    console.error('Помилка додавання контакту', err);
  }
};

addOneContact();