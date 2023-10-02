import React, { useEffect } from "react";
import "./style.css";
import { Grid, Typography, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import Footer from "../Footer";
import NavBar from "../Navbar";
import img2 from "../../assets/about/about1.jpg";


const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={0}
        sx={{
          position: "relative",
          maxHeight: "50vh",
          backgroundImage: `url(${img2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 5,
        }}
      >
        <div className="contact-overlay"></div>
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ marginTop: 5 }}
          xs={12}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "cursive" }}
          >
            Come And Visit
          </Typography>
        </Grid>
        <Grid
          zIndex={1}
          container
          justifyContent="center"
          sx={{ marginTop: 7, height: "100vh" }}
        >
          <Box
            sx={{
              width: "80%",
              height: "60%", 
            }}
            className="contact-box"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.958406780044!2d41.84623727511885!3d9.598849990487015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631018ef6cf08e7%3A0xd8cdd0828ca57800!2z4Yqg4Yuz4YqQIOGIhuGJtOGIjSBIb3RlbCBBZGFuZQ!5e0!3m2!1sen!2set!4v1689189837125!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0,filter: "invert(90%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
      <Grid
          container
          justifyContent="center"
          zIndex={1}
          sx={{ marginTop: 40 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{color:'gold',fontWeight:'bold'}}
          >
            Get In Touch
          </Typography>
        </Grid>
        <ContactForm />
        <Footer />
    </div>
  );
};
export default index;
