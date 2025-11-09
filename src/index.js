import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// NEW: Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'; 

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },  // blue
    secondary: { main: '#f50057' } // pink
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* MANDATORY: BrowserRouter must wrap the main application (App)
      to enable routing across different pages.
    */}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);