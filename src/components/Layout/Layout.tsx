import React, { PropsWithChildren } from "react";

import LightTheme from "../../styles/LightTheme";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { useStyles } from "./Layout.styles";

export default function({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
