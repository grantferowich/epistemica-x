import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import axios from "axios";


export default function BasketForm(props) {
  
  console.log('basketForm props', props.children[1]);
  // console.log('basketForm keys', props.children[1].keys)
  const [namesMap, setNamesMap] = useState(props.children[1]);
  console.log('namesMap', namesMap);
  // namesMap looks ok 
  console.log('namesMapK', Array.from(namesMap.keys()));
  // what worked was deleting NamesKeys var, setting watchlist as Array.from(namesMap.keys())
  const watchList = Array.from(namesMap.keys());
  console.log('watchlist', watchList);
 // watchList is pulling properly

  // i think some of the responsiveness wierdness is unrelated to the code and existing because the API itself is somewhat shaky
  // sometimes the CG api is slow, that's all. 
  // currency1APIKey = namesMap.get(currency1)

  const [name, setName] = useState('');
  const [indexDate, setIndexDate] = useState('');
  const [initialBasketValue, setInitialBasketValue] = useState('');
  
  const [currency1, setCurrency1] = useState('');
  const [currency1weight, setCurrency1weight] = useState('');
  const [currency1APIKey, setCurrency1APIKey] = useState('');
  const currency1Q = 0;

  

  const [currency2, setCurrency2] = useState('');
  const [currency2weight, setCurrency2weight] = useState('');
  const [currency2APIKey, setCurrency2APIKey] = useState('');
  const currency2Q = 0;

  const [currency3, setCurrency3] = useState('');
  const [currency3weight, setCurrency3weight] = useState('');
  const [currency3APIKey, setCurrency3APIKey] = useState('');
  const currency3Q = 0;

  const [currency4, setCurrency4] = useState('');
  const [currency4weight, setCurrency4weight] = useState('');
  const [currency4APIKey, setCurrency4APIKey] = useState('');
  const currency4Q = 0;

  const [currency5, setCurrency5] = useState('');
  const [currency5weight, setCurrency5weight] = useState('');
  const [currency5APIKey, setCurrency5APIKey] = useState('');
  const currency5Q = 0;


  // The basket object contains the crypto token names, initial basket value, historical date and quantity of crypto tokens.
  // All the basket data fields are from user inputs except the quantity values, which are calculated in state. 
  // Present basket value will be calculated by multiplying the historically derived quantity by the present price. 
  const basket = {
    name: name,
    initialBasketValue: initialBasketValue,
    indexDate: indexDate,
    coinOne: currency1,
    coin_1_q: currency1Q,
    tokne_1_api_key: currency1APIKey,
    coinTwo: currency2,
    coin_2_q: currency2Q,
    tokne_2_api_key: currency1APIKey,
    coinThree: currency3,
    coin_3_q: currency3Q,
    tokne_3_api_key: currency1APIKey,
    coinFour: currency4,
    coin_4_q: currency4Q,
    tokne_4_api_key: currency1APIKey,
    coinFive: currency5,
    coin_5_q: currency5Q,
    tokne_5_api_key: currency1APIKey
  };


  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDateChange = event => {
    setIndexDate(event.target.value);
  };

  const handleIBVChange = event => {
    setInitialBasketValue(event.target.value);
  }

  const handleWeight1 = event => {
    setCurrency1weight(event.target.value);
    console.log('currency1weight', currency1weight)
  };

  const handleWeight2 = event => {
    setCurrency2weight(event.target.value);
    console.log('currency2weight', currency2weight)
  };

  const handleWeight3 = event => {
    setCurrency3weight(event.target.value);
    console.log('currency3weight', currency3weight)
  };

  const handleWeight4 = event => {
    setCurrency4weight(event.target.value);
    console.log('currency4weight', currency4weight)
  };

  const handleWeight5 = event => {
    setCurrency5weight(event.target.value);
    console.log('currency5weight', currency5weight)
  };

  const handleChange1 = event => {
    const items = event.target.value.split(",");
    setCurrency1(items[0]);
    setCurrency1APIKey(items[1]);
  };

  const handleChange2 = event => {
    const items = event.target.value.split(",");
    setCurrency2(items[0]);
    setCurrency2APIKey(items[1]);
  };
  const handleChange3 = event => {
    const items = event.target.value.split(",");
    setCurrency3(items[0]);
    setCurrency3APIKey(items[1]);
  };

  const handleChange4 = event => {
    const items = event.target.value.split(",");
    setCurrency4(items[0]);
    setCurrency4APIKey(items[1]);
  };
  const handleChange5 = event => {
    const items = event.target.value.split(",");
    setCurrency5(items[0]);
    setCurrency5APIKey(items[1]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('handleSubmit')

    const calculateQuantity1 = async (currency1APIKey, currency1Weight, indexDate) => {
      let historicalPriceAPI = "https://api.coingecko.com/api/v3/coins/"+currency1.toLowerCase()+"/history?date="+indexDate+"&localization=false";
      console.log(historicalPriceAPI)
      let historicalPrice = await axios.get(historicalPriceAPI).then((response) => response.data.market_data.current_price.usd)
      console.log("historicalPrice", historicalPrice)
      let quantity = ((currency1Weight/100) * initialBasketValue) / historicalPrice;
      console.log("basket.coin_1_q", quantity)
      basket.coin_1_q = quantity;
    }
  
    const calculateQuantity2 = async (currency2APIKey, currency2Weight, indexDate) => {
      let historicalPriceAPI2 = "https://api.coingecko.com/api/v3/coins/"+currency2.toLowerCase()+"/history?date="+indexDate+"&localization=false";
      console.log("api2", historicalPriceAPI2)
      let historicalPrice2 = await axios.get(historicalPriceAPI2).then((response) => response.data.market_data.current_price.usd)
      console.log("historicalPrice", historicalPrice2)
      let quantity2 = ((currency2Weight/100) * initialBasketValue) / historicalPrice2;
      console.log("basket.coin_2_q", quantity2)
      basket.coin_2_q = quantity2;
    }
  
    const calculateQuantity3 = async (currency3APIKey, currency3Weight, indexDate) => {
      let historicalPriceAPI3 = "https://api.coingecko.com/api/v3/coins/"+currency3.toLowerCase()+"/history?date="+indexDate+"&localization=false";
      let historicalPrice3 = await axios.get(historicalPriceAPI3).then((response) => response.data.market_data.current_price.usd)
      console.log("historicalPrice", historicalPrice3)
      let quantity3 = ((currency3Weight/100) * initialBasketValue) / historicalPrice3;
      console.log("basket.coin_3_q", quantity3)
      basket.coin_3_q = quantity3;
    }
  
    const calculateQuantity4 = async (currency4APIKey, currency4Weight, indexDate) => {
      let historicalPriceAPI4 = "https://api.coingecko.com/api/v3/coins/"+currency4.toLowerCase()+"/history?date="+indexDate+"&localization=false";
      let historicalPrice4 = await axios.get(historicalPriceAPI4).then((response) => response.data.market_data.current_price.usd)
      console.log("historicalPrice", historicalPrice4)
      let quantity4 = ((currency4Weight/100) * initialBasketValue) / historicalPrice4;
      console.log("basket.coin_4_q", quantity4)
      basket.coin_4_q = quantity4;
    }
  
    const calculateQuantity5 = async (currency5APIKey, currency5Weight, indexDate) => {
      let historicalPriceAPI5 = "https://api.coingecko.com/api/v3/coins/"+currency5.toLowerCase()+"/history?date="+indexDate+"&localization=false";
      let historicalPrice5 = await axios.get(historicalPriceAPI5).then((response) => response.market_data.current_price.usd)
      console.log("historicalPrice", historicalPrice5)
      let quantity5 = ((currency5Weight/100) * initialBasketValue) / historicalPrice5;
      console.log("basket.coin_5_q", quantity5)
      basket.coin_5_q = quantity5;
    }

  if (currency1 !== "") {
    console.log('currency1', currency1APIKey)
    calculateQuantity1(currency1APIKey, currency1weight, indexDate)
   
  }

  if (currency2 !== "") {
    console.log("currency2", currency2APIKey)
    setTimeout(calculateQuantity2(currency2APIKey, currency2weight, indexDate),1000)
  }

  if (currency3 !== "") {
    console.log("currency3", currency3)
    setTimeout(calculateQuantity3(currency3APIKey, currency3weight, indexDate),1000)
  }

  if (currency4 !== "") {
    console.log("currency4", currency4)
    setTimeout(calculateQuantity4(currency4APIKey, currency4weight, indexDate),1000)
  }

  if (currency5 !== "") {
    console.log("currency5", currency5)
    setTimeout(calculateQuantity5(currency5APIKey, currency5weight, indexDate),1000)
  }

  };

  

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Typography component="h1" variant="h5">
          Build Your Basket
        </Typography>
        <Typography variant="p">
          INSTRUCTIONS: Calculate the historical performance of a basket by selecting up to 5 crypto tokens and a weighting for each crypto token. Try 50% Bitcoin and 50% Ether with a start date of 01-01-2022 to see how the calculator works for yourself! 
        </Typography>
        <Box mx="auto">
          <form
            
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Basket Name"
                  fullWidth
                  required
                  onChange={event => {
                    handleNameChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="Starting date"
                  fullWidth
                  required
                  defaultValue=""
                  helperText="DD-MM-YYYY"
                  onChange={event => {
                    handleDateChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="initial-basket-value"
                  label="Initial Basket $ Value"
                  required
                  fullWidth
                  defaultValue=""
                  onChange={ event => {
                    handleIBVChange(event)
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              id="weight1"
              label="Weight (%)"
              variant="filled"
              type="number"
              onChange={event => {
                handleWeight1(event);
              }}
              InputLabelProps={{
                shrink: true
              }}
            />

            <div >
              <TextField
                id="component 1"
                select
                value={currency1}
                onChange={handleChange1}
                SelectProps={{
                  native: true
                }}
                helperText="Please select a digital asset"
              >
                {watchList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                

              </TextField>
            </div>
            <TextField
              id="weight2"
              label="Weight (%)"
              variant="filled"
              type="number"
              onChange={event => {
                handleWeight2(event);
              }}
              InputLabelProps={{
                shrink: true
              }}
              
            />
            <div >
              <TextField
                id="component 2"
                select
                value={currency2}
                onChange={handleChange2}
                SelectProps={{
                  native: true
                }}
                helperText="Please select a digital asset"
              >
                {watchList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
            <br></br>
            <TextField
              id="weight3"
              label="Weight (%)"
              variant="filled"
              type="number"
              onChange={event => {
                handleWeight3(event);
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
            <div >
              <TextField
                id="component 3"
                select
                value={currency3}
                onChange={handleChange3}
                SelectProps={{
                  native: true
                }}
                helperText="Please select a digital asset"
              >
                {watchList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
            <br></br>
            <TextField
              id="weight4"
              label="Weight (%)"
              variant="filled"
              type="number"
              onChange={event => {
                handleWeight4(event);
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
            <div >
              <TextField
                id="component 4"
                select
                value={currency4}
                onChange={handleChange4}
                SelectProps={{
                  native: true
                }}
                helperText="Please select a digital asset"
              >
                {watchList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
            <br></br>
            <TextField
              id="weight5"
              label="Weight (%)"
              variant="filled"
              type="number"
              onChange={event => {
                handleWeight5(event);
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
            <div >
              <TextField
                id="component 5"
                select
                value={currency5}
                onChange={handleChange5}
                SelectProps={{
                  native: true
                }}
                helperText="Please select a digital asset"
              >
                {watchList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                
              >
                CREATE
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </Container>
  );
}