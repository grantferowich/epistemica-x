import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CryptoStickyTableContainer from "../containers/CryptoStickyTableContainer";
import CreateBasketContainer from "../containers/CreateBasketContainer";

export default function NavTabs(props) {
 

  return (
    <div sx={{ display: 'flex' }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Epistemica-X
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        <CryptoStickyTableContainer/>
        <CreateBasketContainer/>
    </div>
  );
}
