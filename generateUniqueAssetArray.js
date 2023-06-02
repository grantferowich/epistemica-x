/* 
Successfully tested the function Friday, June 2, 2023.



basketNameStr:"CowboyCoins 2023"
indexDateStr: "01-01-2023"
initialBasketValueInt: 1000
user_IDStr: "646678e5024aad67cf201bfb".  */



let originalAssetsArr = 
[{asset1NameStr: 'CowboyCoins', asset1IndexPriceInt: 1, asset1QuantityInt: 500, asset1WeightInt: 50, asset1APIKeyStr: 'cowboy'},
{asset2NameStr: 'Bitcoin', asset2IndexPriceInt: 10000, asset2QuantityInt: 0.05, asset2WeightInt: 50, asset2APIKeyStr: 'bitcoin'},
{asset3NameStr: '', asset3IndexPriceInt: 0, asset3QuantityInt: 0, asset3WeightInt: 0, asset3APIKeyStr: ''},
{asset4NameStr: '', asset4IndexPriceInt: 0, asset4QuantityInt: 0, asset4WeightInt: 0, asset4APIKeyStr: ''},
{asset5NameStr: '', asset5IndexPriceInt: 0, asset5QuantityInt: 0, asset5WeightInt: 0, asset5APIKeyStr: ''}]




const newAssetsArr = originalAssetsArr
      .flatMap(assetObj => {
        let assetsArr = [];
        let iInt = 1;
        while (iInt <= 5){
          let assetName = assetObj[`asset${iInt}NameStr`];
          let apiKey = assetObj[`asset${iInt}APIKeyStr`];
          if (assetName && !assetsArr.some(a => a.assetNameStr === assetName)){
            assetsArr.push({assetNameStr: assetName, apiKeyStr: apiKey})
          }
          iInt++
        }
        return assetsArr
    })

console.log(newAssetsArr)