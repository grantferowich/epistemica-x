import React from 'react'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material'
import Copyright from './Copyright';
import BasketCard from './BasketCard';
export default function ViewSingleBasketPage() {
  const lastBasketData = useSelector(state => state.user.lastBasketData)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
    <div> 
      <div>
        <h3>Here is the basket you just created!</h3>
      </div>
      <div>
        <Box style={{  maxWidth: "35%", textAlign: "center", justify: "center"}}>
          <div style={{margin: '20px 0',  }}>
            <div>
            <BasketCard basketHM={lastBasketData} />
            </div>
          </div>  
          <Copyright />
        </Box>
      </div>
      </div>
    </div>
  );
  
}
