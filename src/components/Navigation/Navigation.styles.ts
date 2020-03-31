import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      left: 0,
      transform: "rotate(-90deg)",
      transformOrigin: "0 0",
      width: "100vh",
      height: theme.spacing(9),
      flexDirection: "row-reverse",
      top: "100vh"
    }
  },
  active: {
    fontWeight: 600,
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      left: "calc(50% - 4px)",
      bottom: 0,
      width: 8,
      height: 8,
      background:
        theme.palette.type === "light"
          ? theme.palette.common.black
          : theme.palette.common.white,
      borderRadius: "50%"
    }
  }
}));
