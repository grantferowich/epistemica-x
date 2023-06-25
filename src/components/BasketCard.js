/* 
High level overview of this file: BasketCard.js
Date: June 25, 2023
On the /user-home page, the user will be able to view information about 
all of the baskets the user has previously created.
BasketCard.js is the file which populates information in each basket card. 
Each basket card instance may have up to 5 assets included.
(In the future, there will be a version of the application which enables users to put 
an arbitrary number of assets in the basket.)

*/

import * as React from 'react';
import { useState } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Button } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from 'axios';

export default function BasketCard({basketHM}) {
  const [isDeletedToF, setIsDeletedToF] = useState(false)
  const basketIDStr = basketHM._id;
  const deleteAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/delete/'+basketIDStr

  // DELETE
  const handleDelete = () => {
    axios.delete(deleteAPIStr)
    .then(responseHM => {
      console.log(responseHM.data)
      setIsDeletedToF(true)
    })
    .catch(error => {
      console.log('Error deleting card:', error)
    })
  }

  if (isDeletedToF){
    return null
  }

  let asset1HM = basketHM.asset1HM;
  let asset2HM = basketHM.asset2HM;
  let asset3HM = basketHM.asset3HM;
  let asset4HM = basketHM.asset4HM;
  let asset5HM = basketHM.asset5HM;
  let assetsArr = [asset1HM, asset2HM, asset3HM, asset4HM, asset5HM];

  const getAssetInfo = (arr) => {
    let xInt = 1;
    let outputArr = []
    while (xInt <= 5){
      let assetHM = arr[xInt -1];
      // console.log('assetHM', assetHM);
      if (assetHM[`asset${xInt}NameStr`] !== ''){
        let name = assetHM[`asset${xInt}NameStr`];
        let LoS = assetHM[`asset${xInt}LoSStr`]
        outputArr.push([`Asset: ${name} | Direction: ${LoS}`])
      }
      xInt++
    }
    return outputArr
  }

  const arr = getAssetInfo(assetsArr);

  return (
    <div>
      <Box className='basket-card'>
          <Card variant="outlined">
              <div style={{ display: 'flex', justifyContent: 'space-between'}}> 
                <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {basketHM.basketNameStr}
            </Typography>
            <Typography variant="h5" component="div">
               Return: {basketHM.percentReturnInt.toString().slice(0,5)}%
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Current basket value: ${basketHM.presentBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            <br></br>
              Initial basket value ({basketHM.indexDateStr}): ${basketHM.initialBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Composition
             </Typography>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {arr.map((asset, index) => (
                <React.Fragment key={index}>
                  {asset}
                  <br />
                </React.Fragment>
              ))} 
             </Typography>
            </CardContent>
            <div style={{ marginTop: '20px', marginRight: '4px'}}>
                <Button variant='contained' onClick={handleDelete}>Delete x</Button>
            </div>
            </div>
            </Card>
      </Box>
    </div>
    
  );
}


