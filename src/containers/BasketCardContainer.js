import React, { useEffect, useState } from 'react';
import BasketCard from "../components/BasketCard";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';

export default function BasketCardContainer() {
    
    // const [data, setData] = useState([]);
    const basketsArr = useSelector(state => state.user.basketsArr)
    // useEffect( () => {
    //   const object = props.children[1];

    //   setData(object);
    // },[]);

    // console.log("Baskets arr", basketsArr);




    return ( basketsArr.length !== 0 ?
    (<div>BasketCardContainer
         <div>
        <div> 
          <h3>My Basket</h3>
          <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
            {basketsArr.map(basket => (
              <Grid item xs={12} sm={6}>
                <BasketCard key={basket.id} basket={basket}/>
              </Grid>
            ))} :
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
