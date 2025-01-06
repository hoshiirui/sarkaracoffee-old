import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Email, Instagram } from "@mui/icons-material";
import { CardMedia } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        Sarkara Coffee Bali
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            {/* <SitemarkIcon /> */}
            <CardMedia
              component="img"
              sx={{
                mb: 1,
                display: "inline",
                maxWidth: "128px", // Limit the maximum width of the image
                height: "auto", // Maintain aspect ratio
                color: "inherit",
                textDecoration: "none",
              }}
              image={`sarkaralogo-red.svg`}
              alt="green iguana"
            />
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Jl. WR Supratman No.208, Banyuning Utara, Singaraja, Kabupaten
              Buleleng, Bali 81119
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0304863479355!2d115.10305621178152!3d-8.098373291896715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd191824698fe51%3A0x4237ae78fcb5b09f!2sSarkara%20Coffee%20Bali!5e0!3m2!1sen!2sid!4v1736037048969!5m2!1sen!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/sarkaracoffee.bali/"
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
          >
            {/* <FacebookIcon /> */}
            <Instagram />
          </IconButton>

          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/sarkaracoffee.bali/"
            aria-label="Email"
            sx={{ alignSelf: "center" }}
          >
            <Email />
            {/* <LinkedInIcon /> */}
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
