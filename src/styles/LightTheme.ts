import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light"
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      body1: {
        fontSize: 22
      },
      body2: {
        fontSize: 12,
        lineHeight: "20px"
      },
      button: {
        fontSize: 16
      },
      h1: {
        fontFamily: "'Playfair Display', serif",
        fontSize: 120,
        fontWeight: 700
      },
      h2: {
        fontFamily: "'Playfair Display', serif",
        fontSize: 100,
        fontWeight: 700
      }
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none"
        }
      }
    }
  }),
  {
    factor: 1.625
  }
);
