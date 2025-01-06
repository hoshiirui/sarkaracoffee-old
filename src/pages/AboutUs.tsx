import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GalleryCard from "../components/GalleryCard";
import Grid from "@mui/material/Grid";
import menus from "./../sarkaraMenu.json";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Footer from "../components/Footer";

const AboutUs = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md" sx={{ marginY: 4 }}>
      <FeaturedCarousel />
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent sx={{ padding: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#460000" }}
              >
                Tentang Kami
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image={`img/about.jpg`}
                alt={`about us`}
                sx={{ marginTop: 3 }}
              />
              <Typography variant="body1" align="justify" sx={{ marginTop: 2 }}>
                Sarkara Coffee merupakan sebuah startup kopi yang didirikan pada
                tahun 2023. Kami percaya bahwa setiap cangkir kopi adalah sebuah
                karya seni. Dengan menggabungkan biji kopi berkualitas dengan
                teknik roasting yang unik, kami menciptakan cita rasa yang tak
                terlupakan. Setiap menu kami memiliki cerita dan karakternya
                masing-masing, siap untuk memanjakan lidah Anda.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent sx={{ padding: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#460000" }}
              >
                Contact Us
              </Typography>
              <Typography variant="body1">
                Silahkan sampaikan kritik dan saran melalui kontak dibawah:
                <ul style={{ padding: "20px" }}>
                  <li>
                    <a>Phone number: +123 456 7890</a>
                  </li>
                  <li>
                    <a>Email: halo@sarkaracoffee.vercel.app</a>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <a href="https://www.instagram.com/sarkaracoffee.bali/">
                      Instagram: @sarkaracoffee.bali
                    </a>
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginTop: 2 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", marginBottom: 3, color: "#460000" }}
              >
                Lokasi Kami
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0304863479355!2d115.10305621178152!3d-8.098373291896715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd191824698fe51%3A0x4237ae78fcb5b09f!2sSarkara%20Coffee%20Bali!5e0!3m2!1sen!2sid!4v1736037048969!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  </React.Fragment>
);

export default AboutUs;
