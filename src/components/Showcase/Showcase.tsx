import React, { forwardRef, Ref } from "react";
import { FluidObject } from "gatsby-image";
import {
  Box,
  Typography,
  Hidden,
  Button,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import OverflowImg from "../OverflowImg/OverflowImg";
import { ArrowRightAlt } from "@material-ui/icons";

export interface Props {
  title: string;
  type: string;
  link: string;
  subtitle: string;
  img?: FluidObject | FluidObject[];
  story: string;
}

export default forwardRef(
  (
    { type, subtitle, img, story, title, link }: Props,
    ref: Ref<HTMLElement>
  ) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));

    return (
      <Box>
        <Typography
          variant="subtitle1"
          align="right"
          gutterBottom={true}
          ref={ref}
        >
          {type}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="right">
          {subtitle}
        </Typography>
        <Hidden mdUp={true}>
          {img != null && <OverflowImg img={img} alt={title} paddingY={2} />}
        </Hidden>
        <Box paddingY={isMd ? 2 : 0}>
          <Typography align="justify">{story}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent={isMd ? "flex-end" : "flex-start"}
          marginX={-1}
        >
          <Button
            variant="text"
            color="primary"
            component="a"
            href={link}
            target="_blank"
          >
            Check it out
            <Box marginLeft={1} display="flex" alignItems="center">
              <ArrowRightAlt />
            </Box>
          </Button>
        </Box>
      </Box>
    );
  }
);
