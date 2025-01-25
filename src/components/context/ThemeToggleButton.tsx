import React, { useContext } from 'react';
import ThemeContext from './ThemeProvider';

const ThemeToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  // Ensure ThemeContext is not undefined
  if (!themeContext) {
    throw new Error('ThemeToggleButton must be used within a ThemeProvider');
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;
