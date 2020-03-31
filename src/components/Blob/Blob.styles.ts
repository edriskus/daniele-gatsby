import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  blob: {
    borderRadius: "50%",
    position: "absolute",
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      width: 193,
      height: 193
    },
    [theme.breakpoints.up("md")]: {
      width: 315,
      height: 315
    }
  },
  sea: {
    backgroundColor: "#4E9CB5"
  },
  lips: {
    backgroundColor: "#FF4040"
  },
  lemon: {
    backgroundColor: "#F9DF82"
  }
}));
