import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Lora", serif',
  },
  palette: {
    background: {
      default: '#fdf6f0',  // Beige-white
    },
    text: {
      primary: '#4b3832',  // Elegant deep brown
    },
    primary: {
      main: '#a1887f',      // Soft taupe for accents
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
