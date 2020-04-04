import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({});

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FF4040"
    },
    secondary: {
      main: "#4E9CB5"
    },
    text: {
      secondary: "rgba(0,0,0,.5)"
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
    body2: {
      fontSize: 18,
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        lineHeight: "15px"
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
    subtitle1: {
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "27px",
      [theme.breakpoints.down("sm")]: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "20px"
      }
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "27px",
      [theme.breakpoints.down("sm")]: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "15px"
      }
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
