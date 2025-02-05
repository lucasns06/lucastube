'use client'
import { useContext, createContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebar] = useState(true);

    const toggleSidebar = () =>{
        setSidebar(prevState => !prevState);
        console.log(sidebarIsOpen)
    }
    return (
        <SidebarContext.Provider value={{ sidebarIsOpen,setSidebar, toggleSidebar  }}>
            {children}
        </SidebarContext.Provider>
    );
}
export const useSidebar = () => useContext(SidebarContext);