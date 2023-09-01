import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import stories from "../stories.json";
import { Grid, Typography } from "@mui/material";
import StoryCard from "../components/StoryCard";

const Stories = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recent Stories
        </Typography>
        <Grid container spacing={4}>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Stories;
