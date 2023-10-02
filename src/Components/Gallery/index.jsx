import React, { useState, useEffect } from "react";
import "./style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyLoad from "react-lazyload";
import lux1 from "../../assets/rooms/lux1.jpg";
import lux2 from "../../assets/rooms/lux2.jpg";
import twin2 from "../../assets/rooms/twin2.jpg";
import twin3 from "../../assets/rooms/twin3.jpg";
import stand1 from "../../assets/rooms/stand1.jpg";
import stand2 from "../../assets/rooms/stand2.jpg";
import bar1 from "../../assets/gallery/bar1.jpg";
import bar2 from "../../assets/gallery/bar2.jpg";
import bar3 from "../../assets/gallery/bar3.jpg";
import bar4 from "../../assets/gallery/bar4.jpg";
import bar5 from "../../assets/gallery/bar5.jpg";
import food1 from "../../assets/gallery/food1.jpg";
import food3 from "../../assets/gallery/food3.jpg";
import food4 from "../../assets/gallery/food4.jpg";
import food5 from "../../assets/gallery/food5.jpg";
import food7 from "../../assets/gallery/food7.jpg";
import food8 from "../../assets/gallery/food8.jpg";
import other1 from "../../assets/gallery/other1.jpg";
import other2 from "../../assets/gallery/other2.jpg";
import other3 from "../../assets/gallery/other3.jpg";
import other4 from "../../assets/gallery/other4.jpg";
import other5 from "../../assets/gallery/other5.jpg";
import launge from "../../assets/gallery/launge.jpg";
import space1 from "../../assets/gallery/space1.jpg";
import space2 from "../../assets/gallery/space2.jpg";
import space3 from "../../assets/gallery/space3.jpg";
import space4 from "../../assets/gallery/space4.jpg";
import space5 from "../../assets/gallery/space5.jpg";
import space6 from "../../assets/gallery/space6.jpg";
import { SpaceBarRounded } from "@mui/icons-material";

const images = [
  lux1,
  twin2,
  stand1,
  lux2,
  twin3,
  stand2,
  bar1,
  bar5,
  bar2,
  bar3,
  bar4,
  food1,
  food3,
  food4,
  food5,
  food7,
  food8,
  other1,
  other2,
  other3,
  other4,
  other5,
  launge,
  space1,
  space2,
  space3,
  space4,
  space5,
  space6,
];

const index = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action == "next") {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action == "prev") {
      setData({ img: images[i - 1], i: i - 1 });
    } else if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {data.img ? (
        <div className="img-displayer">
          <IconButton
            onClick={() => imgAction()}
            sx={{ position: "absolute", right: "4%", top: "4%" }}
          >
            <CloseIcon sx={{ color: "gold", fontSize: "2.5rem" }} />
          </IconButton>
          <Grid
            container
            justifyContent="center"
            sx={{ position: "absolute", bottom: "5%" }}
            spacing={10}
          >
            <Grid item>
              <IconButton
                onClick={() => imgAction("prev")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateBeforeIcon sx={{ color: "gold" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => imgAction("next")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateNextIcon sx={{ color: "gold" }} />
              </IconButton>
            </Grid>
          </Grid>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            loading="lazy"
          />
        </div>
      ) : null}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item justifyContent="center" sx={{ margin: 5 }}>
          <Typography align="center" variant="h2" className="gallery-text">
            Get A Glimpse Of Our Exquisite Hotel
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          The Rooms
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return i <= 5 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Foods & Drinks
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 10 < i && i <= 16 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Some Other Places
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 16 < i && i <= 22 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Our Gardenary For Events
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 22 < i && i <= 28 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Lobby Bar
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 5 < i && i <= 10 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default index;
