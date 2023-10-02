import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
const TikTokIcon = ({ color = "white" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="25px"
      height="25px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                About Us
              </Typography>
            </Link>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#fff" }}
            >
              Our Hotel is dedicated to providing guests with a luxurious and
              personalized experience. With top-notch amenities and a committed
              staff, we strive to exceed expectations and make every stay as
              comfortable and enjoyable as possible.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Contact Us
              </Typography>
            </Link>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#fff" }}
            >
              HRXX+GGM, Dire Dawa, Ethiopia
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#fff" }}
            >
              Email: adaneinternationalhotel@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#fff" }}
            >
              Phone: 025-411-94-95
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook sx={{ color: "#fff" }} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram sx={{ color: "#fff" }} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter sx={{ color: "#fff" }} />
            </Link>
            <Link
              href="https://www.tiktok.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <TikTokIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ color: "#fff" }}
          >
            {"Copyright © "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "gold",
              }}
            >
              Adane International Hotel
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ color: "#fff" }}
          >
            {"Developed by - "}
            <a
              href="https://www.linkedin.com/in/dawit-sishu-309ab1241/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "gold",
              }}
            >
              Dawit
            </a>
            {" , "}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ color: "#fff" }}
          >
            {"Photography, videography & Editing - "}
            <a
              href="https://www.linkedin.com/in/fares-yigeremu-39ab87271/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "gold",
              }}
            >
              Faris
            </a>
            {" & "}
            <a
              href="https://www.linkedin.com/in/efrata-tamirat-967a1624b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "gold",
              }}
            >
              Efrata
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
