import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({});

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FF4040"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    body1: {
      fontSize: 18,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight: "20px"
      }
    },
    button: {
      fontSize: 16
    },
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 120,
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: 80
      }
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 100,
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: 56
      }
    },
    h4: {
      fontWeight: 600,
      fontSize: 26,
      [theme.breakpoints.down("sm")]: {
        fontSize: 18
      }
    },
    caption: {
      fontSize: 14,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10
      }
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "15px"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
});
