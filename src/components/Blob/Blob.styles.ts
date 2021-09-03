import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "absolute",
    zIndex: -1,
  },
  blob: {
    position: "relative",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: 193,
      height: 193,
    },
    [theme.breakpoints.up("md")]: {
      width: 315,
      height: 315,
    },
  },
  grey: {
    backgroundColor: "#D8D8D8",
  },
  lightGrey: {
    backgroundColor: "#ECECEC",
  },
  darkGrey: {
    backgroundColor: "#7E7E7E",
  },
}));
