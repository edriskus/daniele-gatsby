import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(18),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(8),
      marginBottom: theme.spacing(3.5),
      width: "calc(100% + 20vw)",
      transform: "translateX(-20vw)"
    }
  },
  navigation: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(6)
    }
  },
  bottomNavigation: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(6)
    }
  },
  fixedContent: {
    position: "fixed",
    height: "100vh",
    width: "50vw",
    top: 0,
    zIndex: 1,
    left: "50vw",
    textAlign: "center"
  },
  fixedImage: {
    height: "100vh"
  },
  hidden: {
    visibility: "hidden"
  }
}));
