import React, { PropsWithChildren } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./Section.styles";

interface Props {
  title: string;
}

export default function Section({ title, children }: PropsWithChildren<Props>) {
  const classes = useStyles();
  return (
    <Box paddingBottom={4}>
      <Typography variant="h2" align="right" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
