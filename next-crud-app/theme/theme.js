import { createTheme } from "@mui/material";
import { alpha } from "@mui/material";

const mainThemes = {
  primary: "#1b967a"
};

const classicDarkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: mainThemes.primary,
      lighter: alpha(mainThemes.primary, 0.25),
      light: alpha(mainThemes.primary, 0.45),
      dark: alpha(mainThemes.primary, 0.85),
      darker: alpha(mainThemes.primary, 0.95),
    },

    secondary: {
      main: "#f50057",
    },

    /*  Success Colors */
    success: {
      main: "#4caf50",
      lighter: alpha("#4caf50", 0.25),
      light: alpha("#4caf50", 0.45),
      dark: alpha("#4caf50", 0.85),
      darker: alpha("#4caf50", 0.95),
    },

    /* Error Colors */
    error: {
      main: "#ef5350",
      lighter: alpha("#ef5350", 0.25),
      light: alpha("#ef5350", 0.45),
      dark: alpha("#ef5350", 0.85),
      darker: alpha("#ef5350", 0.95),
    },

    background: {
      default: "#0d0f10",   // deep dark background
      paper: "#161819",     // card/section background
    },

    text: {
      primary: "#f5f5f5",
      secondary: "#aaaaaa",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#3a3a3a #1a1a1a",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#1a1a1a",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3a3a3a",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: ".7em 2em",
          borderRadius: 30,
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "currentColor",
        },
      },
      defaultProps: {
        htmlColor: "inherit",
      },
    },
  },

  divider: "rgba(255, 255, 255, 0.12)",

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default classicDarkTheme;
