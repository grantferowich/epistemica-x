import React, { Component } from 'react'
import BasketForm from "../components/BasketForm";
import BasketContainer from "./BasketContainer";
import Grid from "@mui/material/Grid";
import axios from 'axios';


export default class CreateBasketContainer extends Component {
  
      state = {
        names: [''],
        ids: [],
        pageUp: false
      };
    
      async componentDidMount() {   
        console.log("createBasketContainer")  
        console.log("fetch 2 starting")
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h")
        .then( (data) => this.Listify(data.data))
        .catch((err) =>console.log(err))
      }
    
    
      Listify(all) {
        all.forEach(token => {
          this.state.names[token.name]= token.id});
          this.setState({ pageUp: true });
        }
  
  
  
    render() {
    return (
    
      <div>
        <div>
      <BasketForm>
        names={this.state.names}
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
