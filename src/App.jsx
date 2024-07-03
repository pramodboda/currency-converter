import { useState } from 'react'
import './App.css'
import ColorModeProvider from "./contexts/ColorModeProvider";

import Box from "@mui/material/Box";
import ToggleThemeBtn from "./components/ToggleThemeBtn/ToggleThemeBtn";
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'

function App() {
  return (
    <ColorModeProvider>
    <Box
      display="flex"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <ToggleThemeBtn />
      <CurrencyConverter/>      </Box>
    </ColorModeProvider>
  )
}

export default App
