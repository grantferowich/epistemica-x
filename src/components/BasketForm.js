import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormHelperText, MenuItem, CssBaseline, Grid, Box, Container, Button, TextField, Typography, Select } from "@mui/material";

export default function BasketForm(props) {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('react');
 
  useEffect( () => {
   
    async function fetchData() {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h" + query);
      const apiData = (response.data);
      setData(apiData);
    }
    fetchData();
  }, [query]);

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
    token_1_api_key: currency1APIKey,
    coinTwo: currency2,
    coin_2_q: currency2Q,
    token_2_api_key: currency1APIKey,
    coinThree: currency3,
    coin_3_q: currency3Q,
    token_3_api_key: currency1APIKey,
    coinFour: currency4,
    coin_4_q: currency4Q,
    token_4_api_key: currency1APIKey,
    coinFive: currency5,
    coin_5_q: currency5Q,
    token_5_api_key: currency1APIKey
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
    const key = event.target.value;
    setCurrency1(key.name);
    setCurrency1APIKey(key.id);
  };

  const handleChange2 = event => {
   const key = event.target.value;
    setCurrency2(key.name);
    setCurrency2APIKey(key.id);
    
  };
  const handleChange3 = event => {
    const key = event.target.value;
    setCurrency3(key.name);
    setCurrency3APIKey(key.id);
  };

  const handleChange4 = event => {
    const key = event.target.value;
    setCurrency4(key.name);
    setCurrency4APIKey(key.id);
  };
  const handleChange5 = event => {
    const key = event.target.value;
    setCurrency5(key.name)
    setCurrency5APIKey(key.id)
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
              <FormControl>
                <Select 
                  displayEmpty
                  onChange={handleChange1}
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value=""><em>None</em></MenuItem>
                    {data.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}

                </Select>
                <FormHelperText>Select basket token 1</FormHelperText>
              </FormControl>
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
            <FormControl>
                <Select 
                  displayEmpty
                  onChange={handleChange2}
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value=""><em>None</em></MenuItem>
                    {data.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}

                </Select>
                <FormHelperText>Select basket token 2</FormHelperText>
              </FormControl>
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
            <FormControl>
                <Select 
                  displayEmpty
                  onChange={handleChange3}
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value=""><em>None</em></MenuItem>
                    {data.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}

                </Select>
                <FormHelperText>Select basket token 3</FormHelperText>
              </FormControl>
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
            <FormControl>
                <Select 
                  displayEmpty
                  onChange={handleChange4}
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value=""><em>None</em></MenuItem>
                    {data.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}

                </Select>
                <FormHelperText>Select basket token 4</FormHelperText>
              </FormControl>
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
            <FormControl>
                <Select 
                  displayEmpty
                  onChange={handleChange5}
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value=""><em>None</em></MenuItem>
                    {data.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.name}
                  </MenuItem>
                ))}

                </Select>
                <FormHelperText>Select basket token 5</FormHelperText>
              </FormControl>
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