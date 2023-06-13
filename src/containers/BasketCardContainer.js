import React from 'react';
import BasketCard from "../components/BasketCard";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';

export default function BasketCardContainer() {
  const basketsArr = useSelector(state => state.user.basketsArr);

  return ( basketsArr.length !== 0 ?
    (<div>
        <div> 
          <Grid container spacing={2}>
            {basketsArr.map(basket => {
              return (
              <Grid item xs={12} sm={6} key={basket._id}>
                <BasketCard basketHM={basket}/>
              </Grid>
              )
            })} 
          </Grid>
        </div>
    </div>)
    : (
      <div>
        <p> You haven't created a basket yet. Once you do, all of your baskets will appear here!</p>
      </div>
    )
  );
}
