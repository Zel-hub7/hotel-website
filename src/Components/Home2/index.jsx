import {
  Box,
  Grid,
  Typography,
  Button,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect } from "react";
import "./style.css";
import anniversary from "../../assets/offers/aniverary.jpg";
import honeymoon from "../../assets/offers/honeymoon.jpg";
import { FaPlus } from "react-icons/fa";
import Footer from "../Footer";
import NavBar from "../Navbar";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import wedding from "../../assets/offers/wedding.jpg";
import servemain from "../../assets/services/servemain.jpg";
import bar from "../../assets/services/bar.jpg";
import launge from "../../assets/gallery/launge.jpg";
import hotelmain from "../../assets/about/hotelMain.jpg"


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

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
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
            minHeight: "60vh",
            backgroundImage: `url(${hotelmain})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: 5,
          }}
        >
          <div className="home2-overlay"></div>
          <Grid item justifyContent="center" zIndex={1}>
            <Typography
              variant="h2"
              align="center"
              sx={{ fontFamily: "cursive" }}
            >
              Adane International Hotel
            </Typography>
            <Typography variant="h4" align="center" className="home2-slogan">
              Designed {"  "} For {"  "} Relaxation
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Our Special Offers
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                Our hotel offers a variety of special packages for different
                occasions such as weddings, vacations, and solo trips. These
                packages come with exclusive benefits such as discounted rates,
                complimentary meals, and access to top amenities. Customers can
                choose from a range of packages tailored to meet their needs and
                preferences.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ margin: 5 }}
          >
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <LazyLoad height={200} offset={100}>
                  <img
                    src={wedding}
                    alt="Your Image"
                    className="box-image"
                    loading="lazy"
                  />
                </LazyLoad>
                <div className="box-overlay">
                  <div className="box-text">Luxury Wedding</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <LazyLoad height={200} offset={100}>
                  <img
                    src={anniversary}
                    alt="Your Image"
                    className="box-image"
                    loading="lazy"
                  />
                </LazyLoad>
                <div className="box-overlay">
                  <div className="box-text">Ultimate Honeymoon</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <LazyLoad height={200} offset={100}>
                  <img
                    src={honeymoon}
                    alt="Your Image"
                    className="box-image"
                    loading="lazy"
                  />
                </LazyLoad>
                <div className="box-overlay">
                  <div className="box-text">Romantic Anniversary</div>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Link to="/special-offers">
              <Button
                variant="outlined"
                sx={{
                  marginBottom: 5,
                  borderRadius: "20px",
                  color: "white",
                  border: "2px solid gold",
                  padding: "10px 20px",
                  transition: "transform 0.3s ease",
                  boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid gold",
                  },
                }}
              >
                Explore More <FaPlus style={{ marginLeft: 10 }} />
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Box>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                Our Services
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" align="center">
                  Our Hotel offer personalized and unique experiences, along
                  with personalized concierge services, to cater to your every
                  need. Our team is committed to ensuring your complete
                  satisfaction, so you can relax and enjoy every moment of your
                  stay. Discover our exclusive offerings today for an
                  unforgettable luxury travel experience.
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              <Grid item xs={12} md={4}>
                <Box className="box-txt">
                  <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                      Resturant
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Box
                      sx={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "300px",
                      }}
                    >
                      <Typography variant="body2" align="center">
                        Our hotel has an excellent restaurant with friendly and
                        attentive staff who are dedicated to making your visit
                        memorable. The menu offers a wide variety of expertly
                        prepared dishes using only the freshest ingredients. Our
                        comfortable and inviting atmosphere makes our Hotel the
                        perfect place to enjoy a meal with loved ones.
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="box-txt">
                  <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                      Bar
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Box
                      sx={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "300px",
                      }}
                    >
                      <Typography variant="body2" align="center">
                        Our hotel offers an exceptional bar experience with
                        skilled bartenders who provide personalized drink
                        recommendations based on individual preferences. The
                        cozy atmosphere is perfect for unwinding with friends or
                        enjoying a night out. Our wide variety of classic and
                        innovative cocktail options make us the ideal
                        destination for any occasion.
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="box-txt">
                  <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                      Rooms
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Box
                      sx={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "300px",
                      }}
                    >
                      <Typography variant="body2" align="center">
                        Our hotel provides a comfortable and inviting room
                        experience, with a range of amenities and personalized
                        service to ensure a memorable stay. Whether you're
                        looking to unwind after a long day or enjoy a relaxing
                        getaway, we aim to make your stay exceptional.
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container justifyContent="center">
            <Link to="/services">
              <Button
                variant="outlined"
                sx={{
                  marginBottom: 5,
                  borderRadius: "20px",
                  color: "white",
                  border: "2px solid gold",
                  padding: "10px 20px",
                  transition: "transform 0.3s ease",
                  boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid gold",
                  },
                }}
              >
                Explore More <FaPlus style={{ marginLeft: 10 }} />
              </Button>
            </Link>
          </Grid>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                Places to Visit
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" align="center">
                  Our hotel boasts a variety of on-site attractions and
                  activities for guests to enjoy. From our luxurious spa to our
                  state-of-the-art fitness center, there is something for
                  everyone to indulge in. Our knowledgeable staff can provide
                  personalized recommendations based on your interests, ensuring
                  that you have a memorable and enjoyable stay. Whether you're
                  looking to relax and unwind or stay active and energized, our
                  hotel has everything you need for a fulfilling experience.
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ margin: 5 }}
            >
              <Grid item xs={12} sm={4}>
                <Box className="box-container">
                  <LazyLoad height={200} offset={100}>
                    <img
                      src={servemain}
                      alt="Your Image"
                      className="box-image"
                      loading="lazy"
                    />
                  </LazyLoad>
                  <div className="box-overlay">
                    <div className="box-text">Resturant</div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className="box-container">
                  <LazyLoad height={200} offset={100}>
                    <img
                      src={launge}
                      alt="Your Image"
                      className="box-image"
                      loading="lazy"
                    />
                  </LazyLoad>
                  <div className="box-overlay">
                    <div className="box-text">Lounge</div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className="box-container">
                  <LazyLoad height={200} offset={100}>
                    <img
                      src={bar}
                      alt="Your Image"
                      className="box-image"
                      loading="lazy"
                    />
                  </LazyLoad>
                  <div className="box-overlay">
                    <div className="box-text">Bar</div>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Link to="/gallery">
                <Button
                  variant="outlined"
                  sx={{
                    marginBottom: 5,
                    borderRadius: "20px",
                    color: "white",
                    border: "2px solid gold",
                    padding: "10px 20px",
                    transition: "transform 0.3s ease",
                    boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
                    "&:hover": {
                      transform: "scale(1.1)",
                      border: "2px solid gold",
                    },
                  }}
                >
                  Explore More <FaPlus style={{ marginLeft: 10 }} />
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ padding: "20px", margin: 1 }}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: "20px" }}
              >
                Where You Can Find Us
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              zIndex={1}
              justifyContent="center"
              sx={{ height: "60vh", paddingRight: 2 }}
            >
              <Box sx={{ width: "100%", height: "100%" }} className="home-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.958406780044!2d41.84623727511885!3d9.598849990487015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631018ef6cf08e7%3A0xd8cdd0828ca57800!2z4Yqg4Yuz4YqQIOGIhuGJtOGIjSBIb3RlbCBBZGFuZQ!5e0!3m2!1sen!2set!4v1689189837125!5m2!1sen!2set&maptype=dark"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ paddingLeft: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <Typography>Free Wi-Fi Internet in Rooms</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RoomServiceIcon />
                </ListItemIcon>
                <Typography>
                  In Room Dining (Room Service) Available At Anytime
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalParkingIcon />
                </ListItemIcon>
                <Typography>Local Self Parking: For Free</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <Typography>
                  Walking Distance from he famous and historical Dire Dawa
                  Bridge
                </Typography>
              </ListItem>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default index;
