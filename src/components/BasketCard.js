import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from 'axios';

export default function BasketCard({basketHM}) {
  const basketIDStr = basketHM._id
  const deleteAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/delete/'+basketIDStr
  console.log('basketIDStr: ', basketIDStr)
  
  const handleDelete = () => {
    axios.delete(deleteAPIStr)
    .then(responseHM => {
      console.log(responseHM.data)
    })
    .catch(error => {
      console.log('Error deleting card:', error)
    })
  }
  return (
    <div>
      <Box className='basket-card'>
             <Card variant="outlined">
              <div><CardContent>
             <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
             {basketHM.basketNameStr}
               </Typography>
               <button onClick={handleDelete}>x</button>
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


