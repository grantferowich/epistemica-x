import React, { Component, useState } from 'react'
import BasketForm from "../components/BasketForm";
import BasketContainer from "./BasketContainer";
import Grid from "@mui/material/Grid";

export default class CreateBasketContainer extends Component {       
    render() {
    return (
    
      <div>
        <div>
            <BasketForm/>
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
