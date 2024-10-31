import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    light: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8485e",
    },
    secondary: {
      main: "#3f51b5",
    },
    background: {
      default: "#f4f6f8",
      paper: "#efefef",
    },
    text: {
      primary: "#000",
      secondary: "#a0a0a0",
      light: "#fff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
