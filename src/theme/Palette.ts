import { PaletteMode } from "@mui/material";
import { deepOrange, deepPurple, grey, orange } from "@mui/material/colors";

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
            default:
              "#553500 radial-gradient(circle, #553500 6%, #1d0330 100%)",

            // background: rgb(85,53,0);
            // background: radial-gradient(circle, rgba(85,53,0,1) 6%, rgba(29,3,48,1) 100%);
            paper: "#1d0330",
          },
          text: {
            primary: "#fff",
            secondary: deepOrange[500],
          },
        }),
  },
});
