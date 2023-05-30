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

const card = (props) => {
  console.log(props);
  let basketHM = props[0];
  return (
    <React.Fragment>
     <><CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         {basketHM.basketNameStr}
         </Typography>
        <Typography variant="h5" component="div">
         {/* Return: {basketHM.percentReturn.toString().slice(0,5)}% */}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {/* Present basket value = ${basketHM.presentBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} */}
         <br></br>
         Basket value on {basketHM.indexDateStr} = ${basketHM.initialBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
         </Typography>
      </CardContent></>
    </React.Fragment>
  )
  
};

export default function OutlinedCard() {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
         <Card variant="outlined">{card}</Card>
      </Box>
    </div>
    
  );
}
