import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GalleryCard from '../components/GalleryCard';
import Grid from '@mui/material/Grid';


const Homepage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginY: 4}}>
      <h1>Hello World</h1>
        <Grid container spacing={4}>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Homepage