import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useContactStore } from '../StoreFolder/useContactStore';

function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const addContact = useContactStore((state) => state.addContact);
    const contacts = useContactStore((state) => state.contacts);

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, number, email });
        setName('');
        setNumber('');
        setEmail('');
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="number" className="mb-1">Contact Number</label>
                    <input
                        type="text"
                        id="number"
                        placeholder="Enter contact number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Add Contact
                </button>
            </form>
            <table className="w-4/5 ml-10 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 py-2 px-4">Name</th>
                        <th className="border border-gray-300 py-2 px-4">Contact Number</th>
                        <th className="border border-gray-300 py-2 px-4">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.email} className="hover:bg-gray-100">
                            <td className="border border-gray-300 py-2 px-4">{contact.name}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.number}</td>
                            <td className="border border-gray-300 py-2 px-4">{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;
