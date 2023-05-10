import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CryptoStickyTableContainer from "../containers/CryptoStickyTableContainer";
import CreateBasketContainer from "../containers/CreateBasketContainer";
import { Link } from 'react-router-dom';

export default function NavTabs(props) {
  return (
    <div sx={{ display: 'flex' }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>Epistemica-X</Link>
          </Typography>
          <Typography>
            <Link to="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
