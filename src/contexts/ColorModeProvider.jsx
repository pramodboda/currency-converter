import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ColorModeContext from "./ColorModeContext.js";

import { purple, grey } from "@mui/material/colors";

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        shape: {
          borderRadius: 0,
        },
        typography: {
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        },
        components: {
          MuiCard: {
            styleOverrides:{
                root:{
                    border: "none",
                    borderRadius:"1.2rem",
                }
            }
          },
          MuiCardContent: {
            styleOverrides:{
                root:{
                    padding:"1.2rem"
                }
            }
          },

          
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                // primary: grey,
                primary: purple,
                divider: grey[300],
                background: {
                  default: grey[300],
                  paper: grey[50],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                // primary: grey,
                primary: purple,
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: "#333",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
