import { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProvider = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
    return (
        <ThemeContext.Provider
            value={theme}
        >{children}</ThemeContext.Provider>
    )
}