import { useState } from "react";
import "./App.css";
import ColorModeProvider from "./contexts/ColorModeProvider";

import Box from "@mui/material/Box";
import ToggleThemeBtn from "./components/ToggleThemeBtn/ToggleThemeBtn";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import CopyrightFooter from "./components/Copyright/CopyrightFooter";

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
        <Box sx={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <ToggleThemeBtn />
        </Box>
        <CurrencyConverter />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "1rem",
          }}
        >
          <CopyrightFooter />
        </Box>
      </Box>
    </ColorModeProvider>
  );
}

export default App;
