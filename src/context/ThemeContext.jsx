import { createContext, useContext, useState, useEffect } from 'react';

const themes = {
    default: {
        name: 'Default',
        background: 'bg-white',
        dialogBg: 'bg-slate-900',
        textColor: 'text-slate-900',
        dialogTextColor: 'text-slate-50',
        buttonBg: 'bg-slate-700',
        buttonText: 'text-slate-300',
        footerBg: 'bg-slate-900',
        footerText: 'text-slate-50',
        font: 'font-jetbrains-mono'
    },
    dark: {
        name: 'Dark',
        background: 'bg-slate-900',
        dialogBg: 'bg-slate-800',
        textColor: 'text-slate-100',
        dialogTextColor: 'text-slate-50',
        buttonBg: 'bg-slate-700',
        buttonText: 'text-slate-300',
        footerBg: 'bg-slate-800',
        footerText: 'text-slate-50',
        font: 'font-jetbrains-mono'
    },
    terminal: {
        name: 'Terminal',
        background: 'bg-black',
        dialogBg: 'bg-zinc-900',
        textColor: 'text-green-500',
        dialogTextColor: 'text-green-400',
        buttonBg: 'bg-zinc-800',
        buttonText: 'text-green-400',
        footerBg: 'bg-zinc-900',
        footerText: 'text-green-400',
        font: 'font-jetbrains-mono'
    },
    book: {
        name: 'Book',
        background: 'bg-[#f5e6d3]',
        dialogBg: 'bg-[#2c1810]',
        textColor: 'text-[#2c1810]',
        dialogTextColor: 'text-[#f5e6d3]',
        buttonBg: 'bg-[#4a2c20]',
        buttonText: 'text-[#f5e6d3]',
        footerBg: 'bg-[#2c1810]',
        footerText: 'text-[#f5e6d3]',
        font: 'font-sentient-serif'
    }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'default';
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const theme = themes[currentTheme];

    const value = {
        theme,
        currentTheme,
        setCurrentTheme,
        themes
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 