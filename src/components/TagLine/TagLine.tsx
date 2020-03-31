import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./TagLine.styles";

interface Props {
  tags: string[];
}

export default function TagLine({ tags }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      {tags.map((tag, i) => (
        <>
          <Typography variant="caption">{tag}</Typography>
          {i !== tags.length - 1 && <Box className={classes.divider} />}
        </>
      ))}
    </Box>
  );
}
