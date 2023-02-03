import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#286EF1",
    },
    success: {
      main: "#52D194",
    },
    secondary: {
      main: "#9026B1",
    },
    grey: {
      900: "#333333",
    },
    info: {
      main: "#EAF1FE",
    },
  },
  typography: {
    button: {
      fontSize: "0.8rem",
      textTransform: "none",
    },
    body2: {
      fontWeight: 300,
    },
    caption: {
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: "0.7rem",
    },
  },
});
