import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Demandas from './pages/Demandas';
import DetalhesDemanda from './pages/DetalhesDemanda';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demandas" element={<Demandas />} />
          <Route path="/demandas/:tipo" element={<DetalhesDemanda />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
