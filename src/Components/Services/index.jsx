import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import "./style.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import RoomPage from "./Room";
import Bar from "../../assets/services/bar.jpg";
import Foods from "../../assets/services/Foods.jpg";
import Resaurant from "../../assets/services/Resaurant.jpg";
import servemain from "../../assets/services/servemain.jpg";
import twin1 from "../../assets/rooms/twin1.jpg";
import twin2 from "../../assets/rooms/twin2.jpg";
import twin3 from "../../assets/rooms/twin3.jpg";
import twin4 from "../../assets/rooms/twin4.jpg";
import lux1 from "../../assets/rooms/lux1.jpg";
import lux2 from "../../assets/rooms/lux2.jpg";
import lux3 from "../../assets/rooms/lux3.jpg";
import lux4 from "../../assets/rooms/lux4.jpg";
import stand1 from "../../assets/rooms/stand1.jpg";
import stand2 from "../../assets/rooms/stand2.jpg";
import stand3 from "../../assets/rooms/stand3.jpg";
import stand4 from "../../assets/rooms/stand4.jpg";

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

const roomData = [
  {
    image: lux1,
    description:
      "Experience royal luxury in the luxurious suite. Enjoy 24-hour room service and catch up on work at the study desk with multi-channel television system at your fingertips. Individual controlled air conditioning ensures your perfect temperature, and access to high-speed WiFi internet keeps you connected.",
    images: [lux1, lux2, lux3, lux4],
    title: "Luxurious Suite",
    features: [
      "24 hour room service",
      "Breakfast Services",
      "Study Desk",
      "Multi channel television system",
      "Acces to high speed WiFi internet",
      "luxurious Shower with Seam and bath-hub",
      "Living Room with Comfortable Sofas",
    ],
  },
  {
    image: twin1,
    description:
      "This cozy room is perfect for friends or family traveling together. Enjoy 24-hour room service and catch up on work at the study desk with multi-channel television system at your fingertips. Individual controlled air conditioning ensures your perfect temperature, and access to high-speed WiFi internet keeps you connected.",
    images: [twin1, twin2, twin3, twin4],
    title: "TWIN BED",
    features: [
      "24 hour room service",
      "Breakfast Services",
      "Study Desk",
      "Multi channel television system",
      "Acces to high speed WiFi internet",
      "2 Beds",
    ],
  },
  {
    image: stand1,
    description:
      "This comfortable room offers all the amenities you need for a relaxing stay. Enjoy 24-hour room service and catch up on work at the study desk with multi-channel television system at your fingertips. Individual controlled air conditioning ensures your perfect temperature, and access to high-speed WiFi internet keeps you connected.",
    images: [stand1, stand2, stand3, stand4],
    title: "STANDARD ROOM",
    features: [
      "24 hour room service",
      "Breakfast Services",
      "Study Desk",
      "Multi channel television system",
      "Acces to high speed WiFi internet",
    ],
  },
];

const index = () => {
  const [showRoomPage, setShowRoomPage] = useState(false);
  const [idx, setIdx] = useState(0);
  const scrollToRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = (i) => {
    setShowRoomPage(true);
    setIdx(i);
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ overflow: "hidden" }}>
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
            backgroundImage: `url(${servemain})`,
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
              Discover Our Exclusive Amenities for Unrivaled Luxury and
              Personalized Relaxation.
            </Typography>
          </Grid>
          <Grid container justifyContent="center"></Grid>
        </Grid>
        <Grid item justifyContent="center" sx={{ padding: 3 }}>
          <Typography variant="p" align="center">
            Whether you're planning a romantic wedding or a special event, a
            family vacation, or a solo adventure, our hotel offers a range of
            special packages that are tailored to meet your needs. From wedding
            packages that offer the perfect setting for your special day, to
            relaxation packages that allow you to unwind and recharge, we have
            something for everyone. Our packages include exclusive benefits such
            as discounted rates, complimentary meals, and access to our top
            amenities. Browse our selection of packages today and discover the
            perfect experience for you.
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          sx={{ marginTop: 3, marginBottom: 3 }}
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="primary">
              Comfortable Rooms
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
                Our rooms are designed for your comfort and relaxation. We
                provide comfortable bedding and a peaceful ambiance to help you
                unwind and get a good night's sleep. You'll also have access to
                modern amenities, such as high-speed internet, flat-screen TVs,
                and complimentary beverages. Whether you're traveling alone or
                with family and friends, we have a range of room types to choose
                from, including suites and connecting rooms.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={4}>
          {roomData.map((card, index) => (
            <Grid item key={index} ml={2} mr={2}>
              <Card
                sx={{
                  maxWidth: 450,
                  height: 550,
                  marginBottom: 5,
                  boxShadow: "0 2px 10px 0 rgba(255, 215, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "100%", height: "50%" }}
                    loading="lazy"
                  />
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
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleLoadMore(index)}
                  >
                    Show More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid ref={scrollToRef}>
          {showRoomPage ? <RoomPage roomData={roomData[idx]} /> : null}
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction={isMobile ? "column-reverse" : "row"}
        >
          <Grid item xs={12} md={6}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
              className="about-content-text"
            >
              <Typography
                variant="h3"
                align="center"
                className="about-text-title"
                color="primary"
              >
                Restaurant
              </Typography>
              <Typography variant="body1" align="center">
                Our Hotel offers an exceptional dining experience with its
                top-notch restaurant service. From the moment you step through
                the door, you will be greeted by a friendly and attentive staff
                who are dedicated to making your visit a memorable one. With an
                extensive menu of delicious and expertly prepared dishes, you
                are sure to find something that satisfies your taste buds. The
                restaurant prides itself on using only the freshest ingredients,
                so you can be sure that your meal will be of the highest
                quality. Combined with a comfortable and inviting atmosphere,
                Adane international Hotel is the perfect place to enjoy a meal
                with friends and family or to celebrate a special occasion.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="logo"
          >
            <img
              src={Resaurant}
              alt="logp"
              loading="lazy"
              style={{ width: "70%", height: "80%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="logo"
          >
            <img
              src={Bar}
              alt="logp"
              loading="lazy"
              style={{ width: "70%", height: "80%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
              className="about-content-text"
            >
              <Typography
                variant="h3"
                align="center"
                className="about-text-title"
                color="primary"
              >
                Bar
              </Typography>
              <Typography variant="body1" align="center">
                Our hotel provides an exceptional bar service experience for its
                patrons. The skilled bartenders are not only knowledgeable about
                the extensive selection of drinks, but also provide personalized
                recommendations based on individual preferences. Whether you are
                in the mood for a classic cocktail or want to try something new
                and innovative, the bar has a wide variety of options to choose
                from. The atmosphere is cozy and inviting, making it the perfect
                spot to unwind with friends after a long day or to enjoy a night
                out on the town. With its exceptional service and tempting
                libations, Our hotel is the ideal destination for any occasion.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction={isMobile ? "column-reverse" : "row"}
        >
          <Grid item xs={12} md={6}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
              className="about-content-text"
            >
              <Typography
                variant="h3"
                align="center"
                className="about-text-title"
                color="primary"
              >
                Conference and Banquet Facilities
              </Typography>
              <Typography variant="body1" align="center">
                Our hotel offers exceptional conference and banquet facilities
                that are perfect for a variety of events, from business meetings
                and conferences to weddings and other special occasions. The
                venue features a range of flexible event spaces, including
                elegant ballrooms, intimate boardrooms, and spacious conference
                halls. With state-of-the-art audio-visual equipment and reliable
                Wi-Fi, the facilities are equipped to handle any type of event,
                from small meetings to large-scale conferences. The professional
                and experienced event staff are dedicated to ensuring that every
                detail is taken care of, from catering and decorations to
                technical support and logistics. With its exceptional facilities
                and unparalleled service, Our hotel is the perfect destination
                for events of any size and type.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="logo"
          >
            <img
              src={Foods}
              alt="logp"
              loading="lazy"
              style={{ width: "50%", height: "70%" }}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default index;
