import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css';
import { Button } from "@mui/material";
const NavTabs = ({isLoggedIn, isLoggedOut, handleSignOut}) => { 
  
  console.log('NavBar: isLoggedIn..', isLoggedIn)
  console.log('NavBar:isLoggedOut: ')
  if (isLoggedIn) {
    return (
    <div> 
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" className="nav-link">Epistemica-X</Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/create-basket" className="nav-link">Create basket</Link>
        </Typography>
        <Typography sx={{ml: 2}}>
        <Link to="/user-home" className="nav-link">Home</Link>
        </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant='outlined' onClick={handleSignOut}>Sign out</Button>
      </div>
      
    </div>)
  };

  if (isLoggedOut) {
    return (
      <div style={{ display: "flex" }}>
         <Box style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="nav-link">Epistemica-X</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/create-basket" className="nav-link">Create basket</Link>
                </Typography>
                <Typography sx={{ml: 2}}>
                <Link to="/login" className="nav-link">Log-in</Link>
                </Typography>
                <Typography sx={{ml: 2}}>
                <Link to="/signup" className="nav-link">Sign-up</Link>
                </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
  } 
  
}
export default NavTabs