import React from 'react'
import { useSelector } from 'react-redux';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from '@mui/material';

export default function ViewSingleBasketPage() {

    const lastBasketData = useSelector(state => state.user.lastBasketData)
    console.log(lastBasketData)

  const updateCard = (basketData) => {
    const card = ( 
      <React.Fragment>
        <><CardContent>
           <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
             {basketData.basketNameStr}
           </Typography>
           <Typography variant="h5" component="div">
             {/* Return: {percentReturn.toString().slice(0,5)}% */}
           </Typography>
           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {/* Present basket value = ${presentBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} */}
             <br></br>
             {/* Basket value on {indexDate} = ${initialBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} */}
           </Typography>
           <Typography>
           </Typography>
         </CardContent></>
      </React.Fragment>
    );
    return card
    }


  return (
    <div>
        <h3>Here is the basket you just created!</h3>
        <Card>
            {updateCard(lastBasketData)}
        </Card>
        
    </div>
  )
}
