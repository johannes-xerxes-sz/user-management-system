import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; 

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Typography variant="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The requested page could not be found.
      </Typography>
      <Link to="/">
      <Button variant="contained" color="primary">
        Back to Home
      </Button>
      </Link>
    </div>
  );
}

export default NotFound;
