import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const Root = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    return createTheme({
      typography: {
        fontFamily: '"Lora", serif',
      },
      palette: {
        mode,
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