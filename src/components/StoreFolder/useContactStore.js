import { create } from 'zustand';

export const useContactStore = create((set) => ({
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    addContact: (contact) => set((state) => {
        const existingContact = state.contacts.find((c) => c.email === contact.email);
        if (!existingContact) {
            const updatedContacts = [...state.contacts, contact];
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return { contacts: updatedContacts };
        } else {
            alert('Contact already exists:', contact.email);
            return state;
        }
    }),
}));

// export default useContactStore;
