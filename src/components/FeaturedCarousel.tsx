import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import events from "./../data.json";
import Featured from "./Featured";

const carouselSelected = [
  {
    id: 1,
    name: "Great Simple Coffee",
    desc: "Di antara tegukan kopi dan tawa bersama teman, mimpi besar untuk masa depan tumbuh perlahan",
    image: "carousel-1.jpg",
  },
  {
    id: 2,
    name: "Created For You",
    desc: "Dalam setiap cangkir kopi ada percakapan kecil tentang masa depan yang kita impikan",
    image: "carousel-2.jpg",
  },
];

const FeaturedCarousel = () => {
  const selectedEvents = carouselSelected;

  return (
    <Carousel navButtonsAlwaysVisible>
      {selectedEvents.map((event) => (
        <Featured event={event} key={event.id} isCarousel />
      ))}
    </Carousel>
  );
};

export default FeaturedCarousel;
