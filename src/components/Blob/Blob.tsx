import clsx from "clsx";
import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Blob.styles";
import { useTheme } from "@material-ui/core";

interface Props {
  xsX: number;
  xsY: number;
  mdX: number;
  mdY: number;
  color: "sea" | "lips" | "lemon";
}

export default function Blob({ color, xsX, xsY, mdX, mdY }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      top={isMd ? mdY : xsY}
      left={isMd ? mdX : xsX}
      className={clsx(classes.blob, {
        [classes.lemon]: color === "lemon",
        [classes.lips]: color === "lips",
        [classes.sea]: color === "sea"
      })}
    />
  );
}
