import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; //App components
import './index.css'; //globaly styling
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const Root = () => {
  //manages current color mode
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  //recreate theme when mode changes
  const theme = useMemo(() => {
    return createTheme({
      typography: {
        fontFamily: '"Lora", serif',
      },
      palette: {
        mode,
        //light mode
        ...(mode === 'light'
          ? {
              background: {
                default: '#fdf6f0',
              },
              text: {
                primary: '#4b3832',
              },
              primary: {
                main: '#a1887f',
              },
            }
        //dark mode
          : {
              background: {
                default: '#121212',
              },
              text: {
                primary: '#ffffff',
              },
              primary: {
                main: '#90caf9',
              },
            }),
      },
    });
  }, [mode]);

  return (
    //applies theme globally
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App toggleColorMode={toggleColorMode} mode={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);