import React from 'react';
import { NavbarProvider } from '../NavbarContext';
import Navbar from '../Navbar';

function About() {
    return( 
        <>
        <NavbarProvider >
            <Navbar/>
            <h1>About</h1>
            <br/>
                <p>Just about, about</p>
        </NavbarProvider>
        </>
    )
}

export default About;
