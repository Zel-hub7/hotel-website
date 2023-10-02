import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import image from "../../assets/offers/special.jpg";
import "./style.css";
import { Card, CardContent, CardMedia } from "@mui/material";
import honeymoon from "../../assets/offers/honeymoon.jpg";
import anniversary from "../../assets/offers/aniverary.jpg";
import wedding from "../../assets/offers/wedding.jpg";
import birth from "../../assets/offers/birth.jpg";
import other from "../../assets/offers/other.jpg";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD700",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const cardsData = [
  {
    image: wedding,
    title: "Luxury Wedding",
    description:
      "Indulge in the ultimate wedding experience with our Luxury Wedding package. Our professional team will handle every detail to ensure that your special day is unforgettable. With access to exclusive facilities and services, your dream wedding will become a reality. ",
  },
  {
    image: birth,
    title: "Unforgettable Birthday",
    description:
      "Escape the stresses of everyday life and celebrate your birthday in ultimate relaxation with our Unforgettable Birthday package.Whether you want to unwind with your loved ones or celebrate in style with your closest friends, our Unforgettable Birthday package offers the perfect way to create lasting memories. ",
  },
  {
    image: anniversary,
    title: "Romantic Anniversary ",
    description:
      "Celebrate your love and rekindle the romance with our Romantic Anniversary package.Whether you're celebrating your first anniversary or your 50th, our Romantic Anniversary package is the perfect way to create lasting memories with the one you love.",
  },
  {
    image: honeymoon,
    title: "Ultimate Honeymoon",
    description:
      "Experience the ultimate in romantic luxury with our Elite Honeymoon package.  With the Elite Honeymoon package, you can celebrate your love in style and sophistication, and make your honeymoon dreams a reality. Create memories that will last a lifetime with this unforgettable honeymoon experience.",
  },
  {
    image: other,
    title: "Special Occasions",
    description:
      "At Adane International, we're here for every special occasion. With our Special Occasions package, we'll help you celebrate life's biggest milestones in style.Make your special moments truly unforgettable with our Special Occasions package.",
  },
];

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "relative",
            minHeight: "40vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: 5,
          }}
        >
          <div className="special-overlay"></div>
          <Grid item justifyContent="center" zIndex={1}>
            <Typography
              variant="h3"
              align="center"
              sx={{ fontFamily: "cursive" }}
            >
              Escape to Relaxation: Experience a One-of-a-Kind Getaway with Our
              Unique Packages
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item justifyContent="center" sx={{ padding: 3 }}>
            <Typography variant="p" align="center">
              Whether you're planning a romantic wedding or a special event, a
              family vacation, or a solo adventure, our hotel offers a range of
              special packages that are tailored to meet your needs. From
              wedding packages that offer the perfect setting for your special
              day, to relaxation packages that allow you to unwind and recharge,
              we have something for everyone. Our packages include exclusive
              benefits such as discounted rates, complimentary meals, and access
              to our top amenities. Browse our selection of packages today and
              discover the perfect experience for you.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={4}>
          {cardsData.map((card, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  minHeight: 380,
                  marginBottom: 5,
                  boxShadow: "0 2px 10px 0 rgba(255, 215, 0, 0.5)",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "gold", fontWeight: "bold" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
};
export default index;
