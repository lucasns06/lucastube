'use client'
import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("isDarkTheme") === "true";
        setIsDark(savedTheme)
    }, [])

    const toggleTheme = () => {
        setIsDark(prevState => !prevState);
    }

    useEffect(() => {
        isDark ? document.body.classList.add("dark-theme") : document.body.classList.remove("dark-theme");
        localStorage.setItem("isDarkTheme", isDark);
    }, [isDark])

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export const useTheme = () => useContext(ThemeContext);