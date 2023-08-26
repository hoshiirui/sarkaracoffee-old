import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GalleryCard from '../components/GalleryCard';
import Grid from '@mui/material/Grid';
import events from "./../data.json"
import { Typography } from '@mui/material';
import FeaturedCarousel from '../components/FeaturedCarousel';

const Homepage = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginY: 4}}>
      <FeaturedCarousel/>
      <Typography variant="h4" gutterBottom>
        Recent Events
      </Typography>
        <Grid container spacing={4}>
        {events.map((event) => (
            <GalleryCard key={event.id} event={event}/>
        ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Homepage