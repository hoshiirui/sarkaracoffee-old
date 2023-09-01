import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import stories from "../stories.json";
import { Grid, Typography } from "@mui/material";
import StoryChapter from "../components/StoryChapter";
import { useParams } from "react-router-dom";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the event ID from the URL parameter
  const story = stories.find((event) => event.id === parseInt(id ?? "", 10));

  // Check if story exists and has a storyContent property
  const chapters = story?.storyContent || [];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recent StoryDetail
        </Typography>
        <Grid container spacing={4}>
          {chapters.map((chapter: any) => (
            <StoryChapter key={chapter.id} chapter={chapter} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default StoryDetail;
