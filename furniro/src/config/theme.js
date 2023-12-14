import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

let theme = createTheme({
  /** @type{import('@mui/material').SxProps}*/

  palette: {
    primary: {
      //   main: indigo[500],
      main: "#B88E2F",
      normal: "#4878BC",
      light: "#5c5c5c",
      dark: "#e0ffff",
      accent: "#147EFB",
    },
    text: {
      black: "#212121",
      grey: "#898989",
    },
    secondary: {
      main: "#FAF3EA",
      variant: "#F9F1E7",
    },
    neutral: {
      light: "#FFFFFF",
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
      dark: "#1E1E1E",
    },
    green: {
      main: green[800],
    },
  },
});

var customTheme = createTheme(theme, {
  /** @type{import('@mui/material').SxProps}*/
  typography: {
    link: {
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
      },
      fontWeight: 700,
      color: theme.palette.neutral.main,
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },

    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.4rem",
    },
    h3: {
      fontSize: "1.3rem",
    },
    h4: {
      fontSize: "1.2rem",
    },
    h5: {
      fontSize: "1.1rem",
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.8rem",
    },
    h8: {
      fontSize: "0.7rem",
    },
  },
});

export default customTheme;
