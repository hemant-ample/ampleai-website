import React from 'react'
import './App.css';
import {Typography} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
const theme = createTheme({
  typography: {
    fontFamily: ['"Spartan"', 'Sans-serif'].join(','),
    fontStyle: 'normal',
    button: {
      textTransform: "none"
    }
  }
});
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
    </ThemeProvider>
  )
}

export default App

