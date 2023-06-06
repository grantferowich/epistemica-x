import React from 'react';
import BasketCard from "../components/BasketCard";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';

export default function BasketCardContainer() {
  const basketsArr = useSelector(state => state.user.basketsArr);
  // const generateUniqueAssetArray = (basketsArr) => {
  //   let uniqueAssetsArr = [];
  //   let xInt = 0
  //   // while (xInt < basketsArr.length) {
  //   //   let basketHM = basketsArr[xInt]
  //   //   let asset1HM = basketHM.asset1HM;
  //   //   let asset2HM = basketHM.asset2HM;
  //   //   let asset3HM = basketHM.asset3HM;
  //   //   let asset4HM = basketHM.asset4HM;
  //   //   let asset5HM = basketHM.asset5HM;
  //   //   let originalAssetsArr = [asset1HM, asset2HM, asset3HM, asset4HM, asset5HM];
  //   //   const newAssetsArr = originalAssetsArr
  //   //   .flatMap(assetObj => {
  //   //     let assetsArr = [];
  //   //     let iInt = 1;
  //   //     while (iInt <= 5){
  //   //       let assetName = assetObj[`asset${iInt}NameStr`];
  //   //       let apiKey = assetObj[`asset${iInt}APIKeyStr`];
  //   //       let assetInitialPrice = assetObj[`asset${iInt}IndexPriceInt`]
  //   //       let assetQuantity = assetObj[`asset${iInt}QuantityInt`]
  //   //       let assetWeight = assetObj[`asset${iInt}WeightInt`]
  //   //       let direction = assetObj[`asset${iInt}LoSStr`]
  //   //       if (assetName && !assetsArr.some(a => a.assetNameStr === assetName)){
  //   //         assetsArr.push({
  //   //           assetNameStr: assetName, 
  //   //           apiKeyStr: apiKey, 
  //   //           assetInitialPriceInt: assetInitialPrice,
  //   //           assetQuantityInt: assetQuantity,
  //   //           assetWeightInt: assetWeight,
  //   //           directionStr: direction
  //   //         });
  //   //       }
  //   //       iInt++
  //   //     }  
  //   //     return assetsArr;
  //   //   });
  //   //   uniqueAssetsArr = [...uniqueAssetsArr, newAssetsArr]
  //   //   xInt++
  //   // }
  //   // return uniqueAssetsArr;
  // }
  // const assetsArray = generateUniqueAssetArray(basketsArr);

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
