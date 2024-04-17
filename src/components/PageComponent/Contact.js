import React, { useState } from 'react';
import Navbar from '../Navbar';
import {useContactStore} from '../StoreFolder/useContactStore';

function Contact() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const addContact = useContactStore((state) => state.addContact);

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, number, email });
        setName('');
        setNumber('');
        setEmail('');
    };

    return (
        <div>
            <Navbar/>
                <h1>Contact</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                <input
                    type="contact-number"
                    placeholder="Contact Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
    
}

export default Contact;
