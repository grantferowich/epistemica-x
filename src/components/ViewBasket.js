import React from 'react';
import { useEffect } from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Copyright from "./Copyright";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

// export default function ViewBasket() {
//     const navigateFn = useNavigate()
    // either pass the data as props
    // or get the most recent basket from state..
    
    // const basketData = useSelector(state => state.user.mostRecentBasketHM)
    // console.log('View basket: Line 14: View Basket: basketHM', basketData) 
    // if (basketData === undefined){
    //     navigateFn('/user-home')
    // }
       
    

    
//   return (
//     <div>
//         <div style={{ marginTop: '20px'}}>
//         <Box sx={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
//           <Card>
//              {card}
//           </Card>
//         </Box>
//         <Box sx={{ textAlign: 'center', paddingBottom: '20px' }}>
//         <Copyright />
//       </Box>
//     </div>
//     </div>
//   )
// }
