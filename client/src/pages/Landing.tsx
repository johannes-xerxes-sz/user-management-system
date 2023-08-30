// import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Landing: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h2" gutterBottom>
          Welcome to User Management System
        </Typography>
        <Typography variant="h4" gutterBottom>
          GET, POST, DELETE
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
          sapien nec turpis suscipit aliquet.
        </Typography>
        <Link href="/signin">
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  );
};
export default Landing;
