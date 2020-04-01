import React from "react";
import clsx from "clsx";
import { Grid, Box, Typography } from "@material-ui/core";
import { TimelineEvent } from "../../types/Timeline";
import { useStyles } from "./Timeline.styles";

interface Props {
  events: TimelineEvent[];
}

export default function Timeline({ events }: Props) {
  const classes = useStyles();
  return (
    <Grid container={true} wrap="nowrap">
      <Grid item={true}>
        {events.map((event, i) => (
          <Box className={classes.eventWrapper} key={i}>
            <Box
              className={clsx({
                [classes.bigDot]: i === 0,
                [classes.mediumDot]: i !== 0
              })}
            />
            <Typography align="right" variant="caption" gutterBottom={true}>
              {event.date}
            </Typography>
            <Typography align="right" variant="subtitle2" gutterBottom={true}>
              {event.title}
            </Typography>
            <Typography align="right" variant="caption">
              {event.story}
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid item={true} className={classes.lineWrapper}>
        <Box className={classes.line} />
      </Grid>
    </Grid>
  );
}
