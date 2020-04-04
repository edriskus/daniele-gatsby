import React from "react";
import { Box } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import { useStyles } from "./OverflowImg.styles";

interface Props {
  alt: string;
  paddingY?: number;
  img?: FluidObject | FluidObject[];
}

export default function OverflowImg({ img, alt, paddingY = 4 }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} paddingY={paddingY}>
      <Img fluid={img} alt={alt} className={classes.image} />
    </Box>
  );
}
