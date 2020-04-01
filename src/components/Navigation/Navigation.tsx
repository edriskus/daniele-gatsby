import React from "react";
import { Button, Grid, Box, useTheme, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Navigation.styles";
import AniRefButton from "../AniRefButton/AniRefButton";
import { TransitionPortal } from "gatsby-plugin-transition-link";

const links = [
  {
    to: "/",
    title: "home",
    bg: "#F9DF82"
  },
  {
    to: "/about/",
    title: "about",
    bg: "#4E9CB5"
  },
  {
    to: "/works/",
    title: "works",
    bg: "#FF4040"
  },
  {
    to: "/contact/",
    title: "contact",
    bg: "#F9DF82"
  }
];

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const Wrapper = isMd ? Box : TransitionPortal;
  return (
    <Wrapper>
      <Grid container={true} className={classes.wrapper} spacing={2}>
        {links.map((link, i) => (
          <Grid item={true} key={i}>
            <Box paddingX={1}>
              <Button
                component={AniRefButton}
                paintDrip={true}
                duration={isMd ? 0.6 : 0.4}
                hex={link.bg}
                to={link.to}
                variant="text"
                color="default"
                activeClassName={classes.active}
              >
                {link.title}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
