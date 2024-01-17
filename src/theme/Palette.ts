import { PaletteMode } from "@mui/material";
import {
  deepOrange,
  deepPurple,
  grey,
  orange,
  purple,
} from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          //light mode
          primary: orange,
          secondary: deepPurple,
          divider: deepPurple[700],
          background: {
            default: "#e3dce6",
            paper: "#fff",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          //dark mode
          primary: deepPurple,
          secondary: orange,
          divider: deepPurple[700],
          background: {
            default: "#1d0330",
            paper: "#1d0330",
          },
          text: {
            primary: "#fff",
            secondary: deepOrange[500],
          },
        }),
  },
});
