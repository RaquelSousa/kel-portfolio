import React from "react";
import "./App.scss";
import {
  CssBaseline,
  PaletteMode,
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
        <CssBaseline />
        <ScrollToAnchor />
        <Header />
        <Home />
        <Top />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
