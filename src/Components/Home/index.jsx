import React, { useEffect, useRef, useState, Suspense } from "react";
import { Box, Typography, Grid,Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import background from "../../assets/homevid.mp4";
import "./style.css";
import Logo from "../../assets/logo.png";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
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


const Home = ({stop}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoLoaded = () => {
      videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    };

    videoElement.addEventListener("loadeddata", handleVideoLoaded);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoaded);
    };
  }, []);

  const toggleAudio = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !videoElement.muted;
    setIsMuted(!isMuted);
  };

  return (
 
      <div className="main" style={{height:'100vh',overflowY:'hidden',overflowX:'hidden'}}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <video ref={videoRef} src={background} autoPlay muted={isMuted} onEnded={stop} />
      <div className="overlay">
        <IconButton
          onClick={toggleAudio}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 99,
            fontSize: '32px',
          }}
        >
          {isMuted ? (
            <VolumeOff style={{ borderRadius: '50%', border: '2px solid gold', color: 'gold' }} />
          ) : (
            <VolumeUp style={{ borderRadius: '50%', border: '2px solid gold', color: 'gold' }} />
          )}
        </IconButton>
      </div>
        <Grid container justifyContent="center">
        <Box sx={{ width: '100%', maxWidth: '500px',position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 99,
            fontSize: '32px',}}>
          <img src={Logo} alt="Your Image" style={{ width: '100%', height: 'auto' }} loading="lazy" />
        </Box>
          <Button
            variant="outlined"
            style={{
              backgroundColor: 'transparent',
              borderRadius: '20px',
              border: '1px solid gold',
              color: 'gold',
              position: 'fixed',
              bottom: '20px',
              zIndex: 99,
            }}
            onClick={stop}
          >
            Skip & continue
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Home;
