import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import stories from "../stories.json";
import { Grid, Typography } from "@mui/material";
import StoryChapter from "../components/StoryChapter";

const StoryDetail = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recent StoryDetail
        </Typography>
        <Grid container spacing={4}>
          {stories[0].storyContent.map((chapter) => (
            <StoryChapter key={chapter.id} chapter={chapter} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default StoryDetail;
