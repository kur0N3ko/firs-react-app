import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
const [isNavbarVisible, setIsNavbarVisible] = useState(false);

const toggleNavbarVisibility = () => {
    setIsNavbarVisible(!isNavbarVisible);
};

const showNavbar = () => {
    setIsNavbarVisible(true);
};

return (
    <NavbarContext.Provider value={{ isNavbarVisible, toggleNavbarVisibility, showNavbar}}>
    {children}
    </NavbarContext.Provider>
);
};