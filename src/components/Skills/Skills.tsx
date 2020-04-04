import React from "react";
import clsx from "clsx";
import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Skill } from "../../types/Skill";
import { skillDots } from "../../utils/Skill";
import { useTheme } from "@material-ui/core";
import { useStyles } from "./Skills.styles";

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  const size = isMd ? 20 : 12;
  return (
    <Box paddingTop={2} paddingBottom={3}>
      <Grid container={true} spacing={2}>
        {skills.map((skill, i) => (
          <Grid item xs={12} key={i}>
            <Grid container={true}>
              <Grid xs={5}>
                <Box className={classes.dotsWrapper}>
                  {skillDots(skill).map(m => (
                    <Box
                      width={Math.floor(size * m)}
                      height={Math.floor(size * m)}
                      marginX={`${Math.floor(
                        (size * 1.5 - Math.floor(size * m)) / 2
                      )}px`}
                      style={{ opacity: m }}
                      className={clsx({
                        [classes.primaryDot]: skill.type === "primary",
                        [classes.secondaryDot]: skill.type === "secondary"
                      })}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid xs={7}>
                <Typography
                  align="right"
                  variant={skill.type === "primary" ? "subtitle1" : "body1"}
                >
                  {skill.title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
