import React, { FormEvent, useCallback } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./Contact.styles";
import Img from "gatsby-image";
import { Contact as ContactType } from "../../types/Contact";

interface Props {
  contacts: ContactType[];
}

export default function Contact({ contacts }: Props) {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box
          display="flex"
          paddingTop={2}
          justifyContent={"flex-end"}
          alignItems={isMd ? "center" : "flex-end"}
          marginX={-1}
          flexDirection={isMd ? "row" : "column-reverse"}
        >
          <Box display="flex" justifyContent={"flex-end"} marginX={-1}>
            {contacts.map((contact, key) => (
              <IconButton
                component="a"
                target="_blank"
                href={contact.link}
                title={contact.title}
                key={key}
              >
                <Img
                  fluid={contact.icon}
                  className={classes.contactIcon}
                  alt={contact.title}
                  imgStyle={{
                    objectFit: "contain"
                  }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>
      </form>
    </Box>
  );
}
