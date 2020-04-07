import React, {
  PropsWithChildren,
  ReactNode,
  useState,
  useEffect
} from "react";
import clsx from "clsx";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Hidden,
  Fade
} from "@material-ui/core";
import Navigation from "../Navigation/Navigation";
import { useStyles } from "./Hello.styles";
import { useTheme } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import OverflowImg from "../OverflowImg/OverflowImg";
import { TransitionPortal } from "gatsby-plugin-transition-link";

interface Props {
  title: string;
  story: string;
  featured?: ReactNode;
  bottomNavigation?: boolean;
  img?: FluidObject | FluidObject[];
  imgFit?: "cover" | "contain";
  timeout?: number;
}

export default function Hello({
  img,
  title,
  story,
  featured,
  children,
  timeout = 500,
  bottomNavigation,
  imgFit = "cover"
}: PropsWithChildren<Props>) {
  const classes = useStyles();
  const [prevImg, setPrevImg] = useState(img);

  useEffect(() => {
    setTimeout(() => {
      setPrevImg(img);
    }, timeout);
  }, [img, timeout]);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container={true} justify="flex-end">
      <Grid item={true} xs={9} md={6}>
        <Box paddingX={isMd ? 5 : 0}>
          <Box className={classes.navigation}>
            <Navigation />
          </Box>
          <Typography variant="h1" align="right" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            dangerouslySetInnerHTML={{ __html: story }}
          />
          {featured}
          <Hidden mdUp={true}>
            {img != null && <OverflowImg img={img} alt={title} />}
          </Hidden>
          {children}
          {bottomNavigation && (
            <Hidden smDown={true}>
              <Box className={classes.bottomNavigation}>
                <Navigation />
              </Box>
            </Hidden>
          )}
        </Box>
      </Grid>
      <Grid item={true} xs={false} md={6}>
        <Hidden smDown={true}>
          {img != null && (
            <TransitionPortal level="top">
              {!!prevImg && (
                <Fade
                  // direction="down"
                  timeout={{ enter: timeout, exit: timeout }}
                  appear={false}
                  in={img === prevImg}
                  key={"prev" + (prevImg[0] ?? prevImg)?.src}
                >
                  <Box
                    className={clsx(classes.fixedContent, {
                      [classes.hidden]: prevImg === img
                    })}
                  >
                    <Img
                      fluid={prevImg}
                      alt={title}
                      className={classes.fixedImage}
                      imgStyle={{
                        objectFit: imgFit
                      }}
                    />
                  </Box>
                </Fade>
              )}
              <Fade
                // direction="up"
                timeout={{ enter: timeout, exit: timeout }}
                in={true}
                key={(img[0] ?? img)?.src}
                exit={false}
              >
                <Box className={classes.fixedContent}>
                  <Img
                    fluid={img}
                    alt={title}
                    className={classes.fixedImage}
                    imgStyle={{
                      objectFit: imgFit
                    }}
                  />
                </Box>
              </Fade>
            </TransitionPortal>
          )}
        </Hidden>
      </Grid>
    </Grid>
  );
}
