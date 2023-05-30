import React, { useEffect, useState } from 'react';
import BasketCard from "../components/BasketCard";
import Grid from "@mui/material/Grid";

export default function BasketCardContainer(props) {
    console.log("BasketContainer props", props);
    const [data, setData] = useState([]);
    
    useEffect( () => {
      const object = props.children[1];

      setData(object);
    },[]);

    console.log("Basketdata", data);




    return ( data.coin_1_q !== 0 ?
    (<div>BasketCardContainer
         <div>
        <div> 
          <h3>My Basket</h3>
          <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
            {data.map(basket => (
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
