import React from "react";
import BasketForm from "./BasketForm";
import Copyright from "./Copyright";
import Box from "@mui/material/Box";
import WatchlistContainer from "../containers/WatchlistContainer";
import BasketContainer from "../containers/BasketContainer";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";


export default function CreatePage(props) {
  console.log("props", props);
  return  (
    <div>
      <BasketForm></BasketForm>
    <div id="basketpageDiv" display="flex" flexWrap="wrap">
     <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
       <Grid item xs={3}>
         <WatchlistContainer
           display="flex"
           currentUserId={props.currentUserId}
         ></WatchlistContainer>
       </Grid>
       <Grid item xs={9}>
         <BasketContainer></BasketContainer>
       </Grid>
     </Grid>
     <Box mt={8}>
       <Copyright />
     </Box>
    </div>
  </div>
   
  );
}
