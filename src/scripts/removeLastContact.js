import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();

    if (contacts.length >= 1) {
      contacts.pop();
      await writeContacts(contacts);
      console.log(`Останній контакт успішно видалено!`);
    } else {
      console.log(`Немає контактів для видалення!`);
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакта', error);
  }
};

removeLastContact();