import React, { Component, useState } from 'react'
import BasketForm from "../components/BasketForm";
import BasketContainer from "./BasketContainer";
import Grid from "@mui/material/Grid";
import axios from 'axios';


export default class CreateBasketContainer extends Component {

      
      state = {
        namesMap: new Map(),
        pageUp: false
      }

      

      //example of what the names ds will look like according to key-value pair. 
      //The names are the keys, the API keys are the values. 
     
      // names: {
      //   "bitcoin" => "bitcoin", 
      //   "binance" => "binancoin", 
      //   "Polygon" => "matic-network"
      // }

      
      
      async componentDidMount() {   
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h")
        .then( (data) => this.namesMap(data.data))
        .catch((err) =>console.log(err))
      }
    

    
      namesMap(all) {
        all.forEach((token) => {
          this.state.namesMap.set(token.name, token.id)})
      } 
  

    render() {
    return (
    
      <div>
        <div>
      <BasketForm>
        namesMap={this.state.namesMap}
      </BasketForm>
        <div id="basketpageDiv" display="flex" flexWrap="wrap">
        <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
       <Grid item xs={9}>
         <BasketContainer/>
       </Grid>
     </Grid>
    </div>
    </div>


    </div>
    )
    }
}
