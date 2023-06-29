import React from 'react'
import { useSelector } from 'react-redux';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from '@mui/material';
import { Box, Link, Button } from '@mui/material'
import Copyright from './Copyright';
import BasketCard from './BasketCard';
export default function ViewSingleBasketPage() {
  const lastBasketData = useSelector(state => state.user.lastBasketData)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div> 
      <div>
        <h3>Here is the basket you just created!</h3>
      </div>
      <div>
        <Box style={{  maxWidth: "35%", textAlign: "center", justify: "center"}}>
          <div style={{margin: '20px 0',  }}>
            <div>
            <BasketCard basketHM={lastBasketData} />
              <Link to='/'>
                <Button variant="contained">View all assets</Button>
              </Link>
              <Link to="/create-basket">
              <Button variant="contained">Create a new basket</Button>
              </Link>
            </div>
          </div>  
          <Copyright />
        </Box>
      </div>
      </div>
    </div>
  );
  
}
