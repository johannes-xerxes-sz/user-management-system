import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
            HELLO USER
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;