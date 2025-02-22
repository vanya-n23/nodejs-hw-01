import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return `Кількість контактів: ${contacts.length}`;
};

console.log(await countContacts());