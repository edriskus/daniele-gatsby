import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(6),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      width: "calc(100% + 20vw)",
      transform: "translateX(-20vw)"
    }
  }
}));
