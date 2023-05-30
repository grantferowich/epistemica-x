import React, { useEffect, useState } from 'react';
import BasketCard from "../components/BasketCard";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';


export default function BasketCardContainer() {
  const basketsArr = useSelector(state => state.user.basketsArr);
    
  useEffect(() =>{
      let xInt = 0;
      while (xInt < basketsArr){
        let basket = basketsArr[xInt]
        console.log('xInt is...', xInt)
        console.log('basket._id', basket._id)
      }
    }, [basketsArr])
   


    return ( basketsArr.length !== 0 ?
    (<div>
         <div>
        <div> 
          <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
            {basketsArr.map(basket => {
              console.log(basket)
              console.log(basket.basket_IDInt);
              <Grid item xs={12} sm={6}>
                <BasketCard key={basket.basket_IdInt} basket={basket}/>
              </Grid>
            })} :
          </Grid>
        </div>
      </div>
    </div>)
    : (
      <div>
        <p> You haven't created a basket yet.</p>
      </div>
    )
  );
}
