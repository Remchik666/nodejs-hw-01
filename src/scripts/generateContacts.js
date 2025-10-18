import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        const data = await readContacts();
        for (let i = 0; i < number; i++) {
            data.push(createFakeContact());
        }
        await writeContacts(data);
    } catch {
        console.log('ERROR GENERATE');
    }
};

generateContacts(5);