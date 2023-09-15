import React, { useState } from "react";
import { Box, Switch } from "@mui/material";

const ToggleDarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      bottom="0"
      left="0"
      width="48px"
      height="48px"
    >
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        color="primary"
      />
    </Box>
  );
};

export default ToggleDarkModeButton;
