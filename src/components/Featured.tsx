import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

interface FeaturedProps {
  event: {
    id: number;
    name: string;
    image: string;
    desc: string;
  };
  isCarousel?: boolean;
}

const Featured: React.FC<FeaturedProps> = ({ event, isCarousel }) => {
  const imgUrl = `/img/${event.image}`;

  const displayButton = () => {
    if (isCarousel) {
      return (
        // <a href={`/${event.id}`}>
        //   <Button
        //     variant="contained"
        //     disableElevation
        //     sx={{ backgroundColor: "#FFBCDA" }}
        //   >
        //     Read More
        //   </Button>
        // </a>
        <div>p</div>
      );
    } else {
      return (
        // <a href={event.drive} target="_blank" rel="noopener noreferrer">
        //   <Button
        //     variant="contained"
        //     disableElevation
        //     sx={{ backgroundColor: "#FFBCDA" }}
        //   >
        //     Drive Link
        //   </Button>
        // </a>
        <div>p</div>
      );
    }
  };

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src='https://images.unsplash.com/photo-1598890777032-bde835ba27c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='para' />} */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {event.name}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {event.desc}
            </Typography>
            {/* {displayButton()} */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Featured;
