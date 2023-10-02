import { useEffect, useRef, Suspense, useState } from "react";
import "./style.css";
import { Grid, Typography } from "@mui/material";
import { gsap } from "gsap";
import Loader from "../Loader";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import vid from "../../assets/homevid.mp4";
import thumbnail from "../../assets/o.jpg";
import { FaTimes, FaPlay } from "react-icons/fa";
import Footer from "../Footer";
import NavBar from "../Navbar";
import hotelmain from "../../assets/about/hotelMain.jpg";
import img1 from "../../assets/about/1.jpg";
import img2 from "../../assets/about/about1.jpg";
import img3 from "../../assets/about/about2.jpg";
import message from "../../assets/about/message.jpg";

const index = () => {
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline({});
    tl.current.fromTo(
      ".about-img",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic",
        duration: 3,
      }
    );

    tl.current.fromTo(
      ".logo",
      {
        opacity: 0,
        x: "-100vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
    tl.current.fromTo(
      ".about-content-text",
      {
        opacity: 0,
        x: "200vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ overflowX: "hidden", overflowy: "auto", height: "100vh" }}>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <div className="images">
          <div className="main-title">
            <h1 style={{ marginTop: "5px" }}>Welcome</h1>
            <br />
            <h1>To</h1>
            <br />
            <h1>Our Hotel</h1>
            <br />
          </div>
          <div className="container">
            <input type="radio" name="slider" id="item-1" defaultChecked />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />
            <div className="cards">
              <label className="card" htmlFor="item-1" id="song-1">
                <img
                  src={img2}
                  alt="song"
                  className="about-img"
                  loading="lazy"
                />
              </label>
              <label className="card" htmlFor="item-2" id="song-2">
                <img
                  src={img1}
                  alt="song"
                  className="about-img"
                  loading="lazy"
                />
              </label>
              <label className="card" htmlFor="item-3" id="song-3">
                <img
                  src={img3}
                  alt="song"
                  className="about-img"
                  loading="lazy"
                />
              </label>
            </div>
          </div>
        </div>
        <div style={{ flexGrow: 1, margin: "16px" }}>
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
                src={hotelmain}
                alt="logp"
                style={{ width: "75%", height: "80%" }}
                loading="lazy"
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
                >
                  Adane International Hotel
                </Typography>
                <Typography variant="body1" align="center">
                  Our hotel's slogan, "Designed for Relaxation," encapsulates
                  our commitment to providing our guests with a serene and
                  peaceful environment to unwind and recharge. We understand the
                  importance of taking a break from the stresses of everyday
                  life, and our hotel is designed to help you do just that. From
                  our tranquil rooms to our on-site amenities, we strive to
                  create a calming atmosphere that will leave you feeling
                  refreshed and rejuvenated. Whether you are traveling for
                  business or pleasure, our goal is to provide you with a
                  comfortable and stress-free experience that will leave you
                  looking forward to your next visit. Come stay with us and
                  discover what true relaxation feels like.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Suspense>
      <Grid container justifyContent="center">
        <Typography variant="h3" align="center" className="about-text-title">
          A Message From The Owner
        </Typography>
        <img
          src={message}
          alt="logp"
          style={{ width: "75%", height: "80%", margin: "15px" }}
          loading="lazy"
        />
      </Grid>
      <div>
        <Grid container justifyContent="center">
          <Typography variant="h3" align="center" className="about-text-title">
            A Place, Exquisitely Designed for Relaxation
          </Typography>
        </Grid>
        {!isOpen ? (
          <div className="play-image">
            <img src={thumbnail} alt="Play Video" />

            <div className="play-button-overlay" onClick={handleOpenPopup}>
              <FaPlay />
            </div>
          </div>
        ) : null}
        {isOpen ? (
          <div>
            <div className="popup-overlay">
              <div className="close-icon" onClick={handleClosePopup}>
                <FaTimes />
              </div>
            </div>
            <div className="video-container">
              <Video
                autoPlay
                loop
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster={thumbnail}
              >
                <source src={vid} type="video/mp4" />
              </Video>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default index;
