import React from 'react';
import Navbar from '../Navbar';
import { NavbarProvider } from '../NavbarContext';

function Contact() {
    return (
        <>
        <NavbarProvider>
            <Navbar/>
            <h1>Contact</h1>
            <br/>
                <p>No Data</p>
        </NavbarProvider >
        </>
    )
}

export default Contact;
