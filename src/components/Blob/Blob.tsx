import clsx from "clsx";
import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Blob.styles";
import { useTheme } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";

interface Props {
  xsX: number;
  xsY: number;
  mdX: number;
  mdY: number;
  parallax?: number;
  color: "sea" | "lips" | "lemon";
}

export default function Blob({
  color,
  xsX,
  xsY,
  mdX,
  mdY,
  parallax = 50
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      className={classes.wrapper}
      top={isMd ? mdY : xsY}
      left={isMd ? mdX : xsX}
    >
      <Parallax y={[-parallax, parallax]}>
        <Box
          className={clsx(classes.blob, {
            [classes.lemon]: color === "lemon",
            [classes.lips]: color === "lips",
            [classes.sea]: color === "sea"
          })}
        />
      </Parallax>
    </Box>
  );
}
