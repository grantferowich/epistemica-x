import React, {useState} from "react";
import BasketForm from "../components/BasketForm";
import BasketContainer from "./BasketContainer";
import Grid from "@mui/material/Grid";


export default function CreateBasketContainer(props) {
    const [names, setNames] = useState([]);
    
    useEffect( () => {
      const fetchData = async() => {
         data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h")
        }
    },[]);

    updateNames(data) {
      data.forEach( coin => {
        names.push(coin.name)
      })
    };
  

 

  return  (
    <div>
      <BasketForm></BasketForm>
    <div id="basketpageDiv" display="flex" flexWrap="wrap">
     <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
       
       <Grid item xs={9}>
         <BasketContainer/>
       </Grid>
     </Grid>
    </div>
  </div>
   
  );
}
