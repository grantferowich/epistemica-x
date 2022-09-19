

  //have calculate quantity return an array
    //then in the conditionals, set basket.coin_1/2/3/4/5 = quantity[1] or whatever.. I feel like arrays are easier to work with than values...
    // basket.coin_1_q = quantity;






  // getHistoricalPrice( currency, historicalDate)
  // let string =
  //   "https://api.coingecko.com/api/v3/coins/" +
  //   currency1 +
  //   "/history?date=" +
  //   indexDate +
  //   "&localization=false";
  // await fetch(string)
  //   .then(resp => resp.json())
  //   .then(data => quantity1Conversion(data.market_data.current_price.usd));


  // const getQuantities = async event => {
  //   if (currency1 !== "") {
  //     const quantity1Conversion = price => {
  //       let q = (currency1weight * initialBasketValue) / price;
  //       console.log('baseket.coin_1_q', q);
  //       basket.coin_1_q = q;
  //     };
  //     let string =
  //       "https://api.coingecko.com/api/v3/coins/" +
  //       currency1 +
  //       "/history?date=" +
  //       indexDate +
  //       "&localization=false";
  //     await fetch(string)
  //       .then(resp => resp.json())
  //       .then(data => quantity1Conversion(data.market_data.current_price.usd));
  //   }  
  // }; 
    // if (currency1 !== "") {
    //   const updateTotal = (price) => {
    //     let v = (price * basket.coin_1_q);
    //     presentBasketValue += v;
    //     console.log("presentBasketValue", presentBasketValue);
    //   };
    //   let string2 = 'https://api.coingecko.com/api/v3/simple/price?ids='+currency1+'&vs_currencies=usd';
    //   await fetch(string2)
    //   .then(data => updateTotal(data.data.currency1.usd) 
    //   .catch(error => console.log(error.message));
    // }

    // if (currency2 !== "") {
    //   const quantity2Conversion = price => {
    //     const q = (currency2weight * initialBasketValue) / price;
    //     basket.coin_2_q = q;
    //   };
    //   let string =
    //     "https://api.coingecko.com/api/v3/coins/" +
    //     currency2API +
    //     "/history?date=" +
    //     indexDate +
    //     "&localization=false";
    //   await fetch(string)
    //     .then(resp => resp.json())
    //     .then(data => quantity2Conversion(data.market_data.current_price.usd));
    //   const updateTotal = (price) => {
    //       presentBasketValue += (price * basket.coin_1_q)
    //       console.log("presentBasketValue", presentBasketValue)
    //     };
    //   let string2 = 'https://api.coingecko.com/api/v3/simple/price?ids='+currency1+'&vs_currencies=usd'
    //     await axios.get(string2)
    //     .then(data => updateTotal(data.data.currency2.usd) 
    //     .catch(error => console.log(error.message))
    // }

    // if (currency3API !== "") {
    //   const quantity3Conversion = price => {
    //     const q = (currency3weight * initialBasketValue) / price;
    //     // console.log(q);
    //     basket.coin_3_q = q;
    //   };
    //   let string =
    //     "https://api.coingecko.com/api/v3/coins/" +
    //     currency3API +
    //     "/history?date=" +
    //     indexDate +
    //     "&localization=false";
    //   await fetch(string)
    //     .then(resp => resp.json())
    //     .then(data => quantity3Conversion(data.market_data.current_price.usd));
    // }

    // if (currency4API !== "") {
    //   const quantity4Conversion = price => {
    //     const q = (currency4weight * initialBasketValue) / price;
    //     // console.log(q);
    //     basket.coin_4_q = q;
    //   };
    //   let string =
    //     "https://api.coingecko.com/api/v3/coins/" +
    //     currency4API +
    //     "/history?date=" +
    //     indexDate +
    //     "&localization=false";
    //   await fetch(string)
    //     .then(resp => resp.json())
    //     .then(data => quantity4Conversion(data.market_data.current_price.usd));
    // }

    // if (currency5API !== "") {
    //   const quantity5Conversion = price => {
    //     const q = (currency5weight * initialBasketValue) / price;
    //     // console.log(q);
    //     basket.coin_5_q = q;
    //   };
    //   let string =
    //     "https://api.coingecko.com/api/v3/coins/" +
    //     currency5API +
    //     "/history?date=" +
    //     indexDate +
    //     "&localization=false";
    //   await fetch(string)
    //     .then(resp => resp.json())
    //     .then(data => quantity5Conversion(data.market_data.current_price.usd));
    // }