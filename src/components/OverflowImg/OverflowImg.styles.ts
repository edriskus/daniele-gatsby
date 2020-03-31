import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    overflow: "visible",
    maxWidth: "100%",
    position: "relative",
    zIndex: -2
  },
  image: {
    width: "130%",
    transform: "translateX(-32px)"
  }
}));
