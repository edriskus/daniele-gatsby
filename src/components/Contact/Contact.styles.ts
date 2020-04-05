import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  form: {
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 32px)",
      transform: "translateX(-32px)"
    }
  },
  loveIcon: {
    transition: theme.transitions.create(["transform", "opacity"])
  }
}));
