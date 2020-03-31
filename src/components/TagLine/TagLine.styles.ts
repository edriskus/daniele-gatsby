import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  divider: {
    width: 36,
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      left: "calc(50% - 2px)",
      bottom: "calc(50% - 2px)",
      width: 4,
      height: 4,
      background: theme.palette.primary.main,
      borderRadius: "50%",
      [theme.breakpoints.up("md")]: {
        left: "calc(50% - 4px)",
        bottom: "calc(50% - 4px)",
        width: 8,
        height: 8
      }
    }
  }
}));
