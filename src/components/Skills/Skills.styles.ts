import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  dotsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%"
  },
  primaryDot: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%"
  },
  secondaryDot: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%"
  }
}));
