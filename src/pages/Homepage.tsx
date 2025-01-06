import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GalleryCard from "../components/GalleryCard";
import Grid from "@mui/material/Grid";
import menus from "./../sarkaraMenu.json";
import { Typography } from "@mui/material";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginY: 4 }}>
        <FeaturedCarousel />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Sarkara Menu
        </Typography>
        <Grid container spacing={4}>
          {menus.map((event) => (
            <GalleryCard key={event.id} event={event} />
          ))}
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
