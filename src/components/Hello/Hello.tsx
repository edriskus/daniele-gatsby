import React, { PropsWithChildren, ReactNode } from "react";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Hidden
} from "@material-ui/core";
import Navigation from "../Navigation/Navigation";
import { useStyles } from "./Hello.styles";
import { useTheme } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import OverflowImg from "../OverflowImg/OverflowImg";
import { TransitionPortal } from "gatsby-plugin-transition-link";

interface Props {
  title: string;
  story: string;
  featured?: ReactNode;
  img?: FluidObject | FluidObject[];
}

export default function Hello({
  img,
  title,
  story,
  featured,
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
          <Typography variant="body1" align="justify">
            {story}
          </Typography>
          {featured}
          <Hidden mdUp={true}>
            {img != null && <OverflowImg img={img} alt={title} />}
          </Hidden>
          {children}
        </Box>
      </Grid>
      <Grid item={true} xs={false} md={6}>
        <Hidden smDown={true}>
          {img != null && (
            <TransitionPortal level="top">
              <Box className={classes.fixedContent}>
                <Img fluid={img} className={classes.fixedImage} />
              </Box>
            </TransitionPortal>
          )}
        </Hidden>
      </Grid>
    </Grid>
  );
}
