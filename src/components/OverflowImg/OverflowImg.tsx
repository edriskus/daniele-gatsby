import React from "react";
import { Box } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import { useStyles } from "./OverflowImg.styles";

interface Props {
  alt: string;
  img?: FluidObject | FluidObject[];
}

export default function OverflowImg({ img, alt }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} paddingY={4}>
      <Img fluid={img} alt={alt} className={classes.image} />
    </Box>
  );
}
