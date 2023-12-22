import { ThemeProvider, createTheme } from '@mui/material';
import { ReactNode, createContext, useContext, useState } from 'react';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => {
  return useContext(ColorModeContext);
}

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = {
    toggleColorMode: () =>
      setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark')),
  };
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
