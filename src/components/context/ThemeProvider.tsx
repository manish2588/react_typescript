import { createContext, useState, ReactNode, FC } from "react";

// Define the shape of the context value
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Create the context with an initial default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Create the ThemeProvider component
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
