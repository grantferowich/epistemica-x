import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css'
import { useSelector } from "react-redux";

export default function NavTabs(props) {
  let userLoggedInToF = false
  const userNameStr = useSelector(state => state.user.name);
  if (userNameStr.length > 0){
    userLoggedInToF = true;
  }

  return (
    <div sx={{ display: "flex" }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="nav-link">Epistemica-X</Link>
          </Typography>
          <div>
              {userLoggedInToF ? 
              (<div><Typography sx={{ml: 2}}>
            <Link to="/user-home" className="nav-link">Home</Link>
          </Typography></div>) : ( 
            <div> 
              <Typography sx={{ml: 2}}>
              <Link to="/login" className="nav-link">Login</Link>
              </Typography>
              <Typography sx={{ml: 2}}>
              <Link to="/signup" className="nav-link">Sign-up</Link>
              </Typography>
            </div>
          )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
