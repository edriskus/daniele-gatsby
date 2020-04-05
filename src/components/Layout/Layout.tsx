import React, { PropsWithChildren, useState, useLayoutEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

import LightTheme from "../../styles/LightTheme";
import {
  Container,
  ThemeProvider,
  CssBaseline,
  Theme
} from "@material-ui/core";
import { useStyles } from "./Layout.styles";
import "../../styles/overrides.css";
import { ParallaxProvider } from "react-scroll-parallax";

const SSRTheme = createMuiTheme(LightTheme);

export default function({ children }: PropsWithChildren<{}>) {
  /**
   * Transition from SSR to Regular theme
   */
  const [theme, setTheme] = useState<Theme>(SSRTheme);
  useLayoutEffect(() => {
    setTheme(LightTheme);
  }, []);

  const classes = useStyles();

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </ThemeProvider>
    </ParallaxProvider>
  );
}
