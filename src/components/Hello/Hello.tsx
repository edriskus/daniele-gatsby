import React, { PropsWithChildren } from "react";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import Navigation from "../Navigation/Navigation";
import { useStyles } from "./Hello.styles";
import { useTheme } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";

interface Props {
  title: string;
  story: string;
  img?: FluidObject | FluidObject[];
}

export default function Hello({
  img,
  title,
  story,
  children
}: PropsWithChildren<Props>) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container={true} justify="flex-end">
      <Grid item={true} xs={9} md={6}>
        <Box paddingX={isMd ? 5 : 0}>
          <Box className={classes.navigation}>
            <Navigation />
          </Box>
          <Typography variant="h1" align="right" className={classes.title}>
            {title}
          </Typography>
          <Typography variant={isMd ? "body1" : "body2"} align="justify">
            {story}
          </Typography>
          {children}
        </Box>
      </Grid>
      <Grid item={true} xs={false} md={6}>
        {img != null && (
          <Box className={classes.fixedContent}>
            <Img fluid={img} className={classes.fixedImage} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
