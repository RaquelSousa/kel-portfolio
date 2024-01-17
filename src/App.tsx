import React from "react";
import "./App.scss";
import {
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import { getDesignTokens } from "./theme/Palette";
import Top from "./components/top/Top";
import ScrollToAnchor from "./utils/scrolltoanchor/ScrollToAnchor";
import Footer from "./components/footer/Footer";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Stack
          sx={{
            background:
              mode === "dark"
                ? "radial-gradient(circle, rgba(105,65,2,1) 0%, rgba(107,67,0,1) 0%, rgba(29,3,48,1) 52%)"
                : "radial-gradient(circle, rgba(244,201,134,1) 0%, rgba(255,255,255,1) 37%);",
          }}
        >
          <CssBaseline />
          <ScrollToAnchor />
          <Header />
          <Home />
          <Footer />
          <Top />
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
