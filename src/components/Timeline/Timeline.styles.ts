import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  line: {
    marginLeft: 3,
    marginRight: 3,
    width: 2,
    height: "100%",
    background: theme.palette.common.black
  },
  lineWrapper: {
    display: "flex",
    minWidth: 60,
    maxWidth: 60,
    justifyContent: "center"
  },
  eventsGrid: {
    flexGrow: 1
  },
  eventWrapper: {
    paddingBottom: theme.spacing(3),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "&:not(:first-child)": {
      marginTop: theme.spacing(3)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      width: "calc(100% + 5vw)",
      transform: "translateX(-5vw)"
    }
  },
  bigDot: {
    position: "absolute",
    top: 0,
    right: -40,
    width: 20,
    height: 20,
    [theme.breakpoints.down("sm")]: {
      top: 0,
      right: -37,
      width: 14,
      height: 14
    },
    borderRadius: "50%",
    background: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.main}`
  },
  mediumDot: {
    position: "absolute",
    top: 4,
    right: -36,
    width: 12,
    height: 12,
    [theme.breakpoints.down("sm")]: {
      top: 2,
      right: -35,
      width: 10,
      height: 10
    },
    borderRadius: "50%",
    background: theme.palette.primary.main
  }
}));
