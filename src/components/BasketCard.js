import * as React from 'react';
import { useState } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from 'axios';

export default function BasketCard({basketHM}) {
  const [isDeletedToF, setIsDeletedToF] = useState(false)
  const basketIDStr = basketHM._id
  const deleteAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/delete/'+basketIDStr
  console.log('deleteAPIStr', deleteAPIStr)
  console.log('basketIDStr: ', basketIDStr)
  
  const handleDelete = () => {
    axios.delete(deleteAPIStr)
    .then(responseHM => {
      console.log(responseHM.data)
      setIsDeletedToF(true)
    })
    .catch(error => {
      console.log('Error deleting card:', error)
    })
  }

  if (isDeletedToF){
    return null
  }

  return (
    <div>
      <Box className='basket-card'>
             <Card variant="outlined">
              <div style={{ display: 'flex', justifyContent: 'space-between'}}> 
                <CardContent>
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
            <div style={{ marginTop: '20px', marginRight: '4px'}}>
                <button onClick={handleDelete}>Delete x</button>
            </div>
            </div>
            </Card>
      </Box>
    </div>
    
  );
}


