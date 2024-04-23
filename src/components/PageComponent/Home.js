import React from 'react';
import Navbar from '../Navbar';
import bg1 from './images/bg1.gif';

function Home() {
    return(
        <>
            <Navbar/>
            <div
                className="flex bg-cover bg-center w-screen h-screen justify-center items-center flex-col text-white text-center"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <h1 className="text-4xl">Welcome to My Homepage</h1>
            </div>
            
        </>
    )
}

export default Home;
