import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import events from "./../data.json";
import Featured from "../components/Featured";
import MasonryImageList from "../components/MasonryImageList";
import { useParams } from "react-router-dom";

const GalleryDetail = () => {
  const { id } = useParams<{ id?: string }>(); // Get the event ID from the URL parameter
  const selectedEvent = events.find(
    (event) => event.id === parseInt(id ?? "", 10)
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginY: 4 }}>
        {selectedEvent && <Featured event={selectedEvent} />}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {selectedEvent?.name} Definition
            </Typography>
            {selectedEvent?.desc}
          </Grid>
          <MasonryImageList id={selectedEvent?.id} />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GalleryDetail;
