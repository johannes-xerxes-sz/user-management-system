import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const FooterContainer = styled("div")({
  backgroundColor: "#f5f5f5",
  padding: "10px",
  textAlign: "right",
  position: "fixed",
  bottom: 0,
  width: "100%",
});

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="body2" color="textSecondary">
        © 2023 Johannes Xerxes Dalogdog. All rights reserved.
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
