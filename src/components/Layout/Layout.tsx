import React, { PropsWithChildren } from "react";

import LightTheme from "../../styles/LightTheme";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";

export default function({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
    </ThemeProvider>
  );
}
