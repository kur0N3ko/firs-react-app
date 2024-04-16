import React from 'react';
import Navbar from '../Navbar';
import { NavbarProvider } from '../NavbarContext';

function Home() {
    return(
        <>
        <NavbarProvider>
        <Navbar/>
            <h1>Just Home</h1>
            <br/>
                <p>Just Home</p>
        </NavbarProvider>
        </>
    )
}

export default Home;
