import React, { createContext, useState, ReactNode } from 'react';

interface MenuContextType {
    isMenuOpen: boolean;
    toggleMenuMode: () => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface NavStateProps {
    children: ReactNode;
}

const NavState: React.FC<NavStateProps> = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
            {children}
        </MenuContext.Provider>
    );
};

export default NavState;