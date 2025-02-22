import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();
    if (contacts.length >= 1) {
      await writeContacts([]);
      console.log(`Контакти успішно видалено!`);
    } else {
      console.log(`Немає контактів для видалення!`);
    }
  } catch (error) {
    console.error('Помилка при видаленні  контактів', error);
  }
};

removeAllContacts();