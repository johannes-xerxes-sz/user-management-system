import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, AppBar, useTheme } from "@mui/material";
import "./Footer.css"; // You can create a CSS file for additional styling

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky" // Make the footer sticky at the bottom
      sx={{
        top: "auto",
        bottom: 0,
      }}
    >
      <Box
        component="footer"
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 2, // Reduce padding to make it less prominent
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}> {/* Adjust spacing */}
            <Grid item sm={4}> {/* Remove xs */}
              <Typography variant="h6" color="textPrimary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item sm={4}> {/* Remove xs */}
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item sm={4}> {/* Remove xs */}
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Follow Us
              </Typography>
              <div className="social-icons"> {/* CSS class for social icons */}
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </div>
            </Grid>
          </Grid>
          <Box mt={2}> {/* Adjust margin */}
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Footer;