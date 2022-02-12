import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Theme } from "./types";



type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);

    return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { Theme, ThemeProvider, useTheme };