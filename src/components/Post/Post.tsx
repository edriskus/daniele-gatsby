import React from "react";
import { Box, Typography } from "@material-ui/core";
import TagLine from "../TagLine/TagLine";

interface Props {
  title: string;
  tags: string[];
  story: string;
}

export default function Post({ title, story, tags }: Props) {
  return (
    <Box paddingBottom={4}>
      <Typography variant="h4" align="right" color="primary">
        {title}
      </Typography>
      <Box paddingTop={1} paddingBottom={2}>
        <TagLine tags={tags} />
      </Box>
      <Typography variant="body1" align="justify">
        {story}
      </Typography>
    </Box>
  );
}
