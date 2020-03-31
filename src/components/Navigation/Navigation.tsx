import React from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { Link } from "gatsby";
import { useStyles } from "./Navigation.styles";

const links = [
  {
    to: "/",
    title: "home"
  },
  {
    to: "/about/",
    title: "about"
  },
  {
    to: "/works/",
    title: "works"
  },
  {
    to: "/contact/",
    title: "contact"
  }
];

export default function Navigation() {
  const classes = useStyles();
  return (
    <Grid container={true} className={classes.wrapper} spacing={2}>
      {links.map((link, i) => (
        <Grid item={true} key={i}>
          <Box paddingX={1}>
            <Button
              component={Link}
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
  );
}
