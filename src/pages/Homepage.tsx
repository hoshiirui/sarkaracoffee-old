import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GalleryCard from "../components/GalleryCard";
import Grid from "@mui/material/Grid";
import menus from "./../sarkaraMenu.json";
import { Typography } from "@mui/material";
import FeaturedCarousel from "../components/FeaturedCarousel";

const sarkaraProducts = [
  {
    id: 1,
    name: "Sarkara Original Coffee",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 10,
    categories: ["signature", "ice"],
  },
  {
    id: 2,
    name: "Sarkara Mocktail",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 18000,
    recPrior: 10,
    categories: ["signature", "ice"],
  },
  {
    id: 3,
    name: "Espresso Single",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 10,
    categories: ["espresso", "hot"],
  },
  {
    id: 4,
    name: "Espresso Double",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 12000,
    recPrior: 6,
    categories: ["espresso", "hot"],
  },
  {
    id: 5,
    name: "Americano",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["espresso", "hot", "ice"],
  },
  {
    id: 6,
    name: "Kopi Susu",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["coffee", "hot", "ice"],
  },
  {
    id: 7,
    name: "Latte",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["coffee", "hot", "ice"],
  },
  {
    id: 8,
    name: "Latte + Syrup",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 20000,
    recPrior: 7,
    categories: ["coffee", "hot", "ice"],
  },
  {
    id: 9,
    name: "Cappucino",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 17000,
    recPrior: 6,
    categories: ["coffee", "hot", "ice"],
  },
  {
    id: 10,
    name: "Mochacino",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 17000,
    recPrior: 6,
    categories: ["coffee", "hot", "ice"],
  },
  {
    id: 11,
    name: "Matcha Coffee Milk",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 20000,
    recPrior: 6,
    categories: ["coffee", "ice"],
  },
  {
    id: 12,
    name: "Redvelvet Coffee Milk",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 20000,
    recPrior: 6,
    categories: ["coffee", "ice"],
  },
  {
    id: 13,
    name: "Oreo Coffee Milk",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 20000,
    recPrior: 6,
    categories: ["coffee", "ice"],
  },
  {
    id: 14,
    name: "Matcha Latte",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "hot", "ice"],
  },
  {
    id: 15,
    name: "Redvelvet Latte",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "hot", "ice"],
  },
  {
    id: 16,
    name: "Taro Latte",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "hot", "ice"],
  },
  {
    id: 17,
    name: "Chocolatte",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "hot", "ice"],
  },
  {
    id: 18,
    name: "Vanilla Milk Original",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["non-coffee", "hot", "ice"],
  },
  {
    id: 19,
    name: "Vanilla Caramel",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "ice"],
  },
  {
    id: 20,
    name: "Vanilla Hazelnut",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "ice"],
  },
  {
    id: 21,
    name: "Vanilla Oreo",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 16000,
    recPrior: 6,
    categories: ["non-coffee", "ice"],
  },
  {
    id: 22,
    name: "Choco Hazelnut",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 18000,
    recPrior: 6,
    categories: ["non-coffee", "ice"],
  },
  {
    id: 23,
    name: "Choco Oreo",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 18000,
    recPrior: 6,
    categories: ["non-coffee", "ice"],
  },
  {
    id: 24,
    name: "Tea",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 6000,
    recPrior: 6,
    categories: ["others", "hot", "ice"],
  },
  {
    id: 25,
    name: "Leci Tea",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["others", "hot", "ice"],
  },
  {
    id: 26,
    name: "Lemon Tea",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["others", "hot", "ice"],
  },
  {
    id: 27,
    name: "Strawberry Tea",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["others", "hot", "ice"],
  },
  {
    id: 28,
    name: "Virgin Squash",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["others", "ice"],
  },
  {
    id: 29,
    name: "Strawberry Squash",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["others", "ice"],
  },
  {
    id: 30,
    name: "Lemon Squash",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["others", "ice"],
  },
  {
    id: 31,
    name: "Leci Squash",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["others", "ice"],
  },
  {
    id: 32,
    name: "Mineral Water",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 5000,
    recPrior: 6,
    categories: ["others", "hot", "ice"],
  },
  {
    id: 33,
    name: "Nasi Goreng",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 15000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 34,
    name: "Mie Instan Goreng Lengkap",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 12000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 35,
    name: "Mie Instan Kuah Lengkap",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 12000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 36,
    name: "Nasi Putih",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 5000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 37,
    name: "Telur",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 5000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 38,
    name: "Kentang Goreng",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 39,
    name: "Roti Panggang",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["food"],
  },
  {
    id: 40,
    name: "Pisang Goreng",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: 10000,
    recPrior: 6,
    categories: ["food"],
    variants: [
      {
        name: "coklat",
        add: 0,
      },
      {
        name: "keju",
        add: 0,
      },
      {
        name: "mix",
        add: 2000,
      },
    ],
  },
];

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
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
