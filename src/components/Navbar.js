import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css'

export default function NavTabs(props) {
  return (
    <div sx={{ display: "flex" }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="nav-link">Epistemica-X</Link>
          </Typography>
          <Typography sx={{ml: 2}}>
            <Link to="/user-home" className="nav-link">Home</Link>
          </Typography>
          <Typography sx={{ml: 2}}>
            <Link to="/login" className="nav-link">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
