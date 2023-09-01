import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const theme = createTheme();

const Landing: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          // backgroundColor: theme.palette.primary.main,
          // color: theme.palette.primary.contrastText,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to User Management System
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Manage users easily with GET, POST, DELETE operations
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
            sapien nec turpis suscipit aliquet.
          </Typography>
          <Box sx={{ textAlign: "center", marginTop: 4 }}>
            <Link href="/login" color="inherit">
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;