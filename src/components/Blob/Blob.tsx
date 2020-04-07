import clsx from "clsx";
import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Blob.styles";
import { useTheme } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";

interface Props {
  xsX: number; // Percent
  xsY: number;
  mdX: number; // Percent
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
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const y = isMd ? mdY : xsY;

  const lgX = `calc((100vw - ${theme.breakpoints.values.lg}px) / 2 + ${(theme
    .breakpoints.values.lg /
    100) *
    mdX}px)`;

  const x = isMd ? (isLg ? lgX : `${mdX}vw`) : `${xsX}vw`;

  return (
    <Box
      className={classes.wrapper}
      top={y}
      left={`calc(${x} - ${isMd ? 315 / 2 : 193 / 2}px)`}
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
