import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: 2 }}>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h6" sx={{ fontFamily: 'Helvetica', fontWeight: 'normal', color: 'common.white' }}>
            User Management System
          </Typography>
          </IconButton>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <Button color="inherit" sx={{ marginLeft: 2,  color: 'common.white' }}>
            Home
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="inherit" sx={{ marginLeft: 2,  color: 'common.white' }}>
            Sign Up
          </Button>
          </Link>
          <Link to="/signin">
          <Button color="inherit" sx={{ marginLeft: 2,  color: 'common.white' }}>
            Sign In
          </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
