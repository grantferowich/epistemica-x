import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/* Engineering card on user home page
 @ 2:10 pm on Tuesday, May 30.
*/

/* 
Percent return for each basket ... needs to be handled with Redux
Present value for each basket  .... needs to be handled with Redux
*/

export default function BasketCard({basketHM}) {

  return (
    <div>
      <Box className='basket-card'>
             <Card variant="outlined">
              <div><CardContent>
             <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
             {basketHM.basketNameStr}
               </Typography>
              <Typography variant="h5" component="div">
               Return: {basketHM.percentReturnInt.toString().slice(0,5)}%
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Present basket value = ${basketHM.presentBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              <br></br>
                Basket value on {basketHM.indexDateStr} = ${basketHM.initialBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
             </Typography>
            </CardContent>
            </div>
            </Card>
      </Box>
    </div>
    
  );
}


