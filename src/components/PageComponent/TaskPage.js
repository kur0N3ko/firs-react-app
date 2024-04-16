import React from 'react'
import Form from '../Form'
import { CrudProvider } from '../CrudContext'
import { NavbarProvider } from '../NavbarContext'
import Navbar from '../Navbar'

export default function TaskPage() {
    return (
        <>
        <NavbarProvider>
        <Navbar/>
            <div className='Form'>
                <h1>SHEDULING SYSTEM</h1>
                <CrudProvider>
                    <Form/>
                </CrudProvider>
            </div>
        </NavbarProvider>
    </>
    )
}
