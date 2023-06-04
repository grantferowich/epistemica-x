import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormHelperText, MenuItem, CssBaseline, Grid, Box, Container, Button, TextField, Typography, Select } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Copyright from "./Copyright";
import { useDispatch, useSelector } from "react-redux";
import Switch from '@mui/material/Switch';

export default function BasketForm(props) {

  const [data, setData] = useState([]);
  const [query] = useState('react');
  const [handleSubmitFired, setHandleSubmitFired] = useState(false);
  const dispatchFn = useDispatch();
  // constants
  const getLastUpdatedAPIStr = 'https://epistemica-x-db.vercel.app/api/time/get';
  const get250CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get250'
  const postCoinsAPIStr = 'https://epistemica-x-db.vercel.app/api/coin/post'
  useEffect(() => {
    const fetchData = async () => {
      const currentTimeInt = Date.now();
      // retrieve the date string of the last time the external api call was made
      const responseHM = await axios.get(getLastUpdatedAPIStr)
      console.log('/BasketForm.js: line 24: ResponseHM', responseHM)
      const lastUpdatedDateStr = responseHM.data.lastUpdatedDate
      const lastUpdatedInt = Date.parse(lastUpdatedDateStr)
      const timeDifferenceInt = currentTimeInt - lastUpdatedInt;
      // miliseconds to seconds, seconds to minutes, minutes to hours
      const hoursDifferenceInt = timeDifferenceInt / (1000 * 60 * 60);
      console.log('Hours difference', hoursDifferenceInt)
      dispatchFn({type: 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL', payload: hoursDifferenceInt})

      // PRODUCTION ENVIRONMENT CODE
      if (hoursDifferenceInt >= 24) {
        try {
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h" + query);
          const apiDataArr = (response.data);
          await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
            withCredentials: false,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(responseHM => {
            console.log('200: Successfully posted to the coin/post API.')
            dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr})
            setData(apiDataArr);
          }).catch(errorHM => {
            console.log('Error running fetchData() inside BasketForm.js.')
            console.error(errorHM)
          })
          dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr})
          setData(apiDataArr);
        } catch (error){
          console.log('Error running fetchData. Check BasketForm.js.')
          console.log(error)
        }   
      } else {
        console.log('Hours different < 24.')
        console.log('Retrieving 250 Coings from EPX API.')
        const get250CoinsHM = await axios.get(get250CoinsAPIStr)
        console.log('BasketForm.js. Line 71. Variable check: get250CoinsHM', get250CoinsHM)
        const coinListArr = get250CoinsHM.data;
        console.log('BasketForm.js. Line 71. Variable check: coinsListArr', coinListArr)
        console.log('Coin List Arr: ', coinListArr)
        dispatchFn({type: 'SET_COIN_LIST', payload: coinListArr})
        setData(coinListArr)
      }
    }
  fetchData();
  }, [query, dispatchFn]);
  // successfully read the user id from the redux store
  // on May 28, 2023
  const user_IdStr = useSelector(state => state.user.id)

  // URL endpoint for posting new baskets
  const postBasketURLString = 'https://epistemica-x-db.vercel.app/api/basket/post';

  // state variables set by user
  const [basketName, setBasketName] = useState('');
  const [indexDate, setIndexDate] = useState('');
  const [initialBasketValue, setInitialBasketValue] = useState('');
  const [presentBasketValue, setPresentBasketValue] = useState(0);
  const [percentReturn, setPercentReturn ] = useState(0);

  const [currency1, setCurrency1] = useState('');
  const [currency1Weight, setCurrency1Weight] = useState(0);
  const [currency1APIKey, setCurrency1APIKey] = useState('');
  const [c1LongOrShort, setc1LongOrShort ] = useState('long'); 
  const currency1Q = 0;

  const [currency2, setCurrency2] = useState('');
  const [currency2Weight, setCurrency2Weight] = useState(0);
  const [currency2APIKey, setCurrency2APIKey] = useState('');
  const [ c2LongOrShort, setc2LongOrShort ] = useState('long'); 
  const currency2Q = 0;

  const [currency3, setCurrency3] = useState('');
  const [currency3Weight, setCurrency3Weight] = useState(0);
  const [currency3APIKey, setCurrency3APIKey] = useState('');
  const [ c3LongOrShort, setc3LongOrShort ] = useState('long'); 
  const currency3Q = 0;

  const [currency4, setCurrency4] = useState('');
  const [currency4Weight, setCurrency4Weight] = useState(0);
  const [currency4APIKey, setCurrency4APIKey] = useState('');
  const [ c4LongOrShort, setc4LongOrShort ] = useState('long'); 
  const currency4Q = 0;

  const [currency5, setCurrency5] = useState('');
  const [currency5Weight, setCurrency5Weight] = useState(0);
  const [currency5APIKey, setCurrency5APIKey] = useState('');
  const [c5LongOrShort, setc5LongOrShort] = useState('long'); 
  const currency5Q = 0;
  
  // The basket object contains the crypto token names, initial basket value, historical date and quantity of crypto tokens.
  // All the basket data fields are from user inputs except the quantity values, which are calculated in state. 
  // Present basket value will be calculated by multiplying the historically derived quantity by the present price. 

  const handleBasketNameChange = event => {
    setBasketName(event.target.value);
  };

  const handleDateChange = event => {
    setIndexDate(event.target.value);
  };

  const handleIBVChange = event => {
    setInitialBasketValue(parseFloat(event.target.value));
  }

  const handleWeight1 = event => {
    setCurrency1Weight(parseInt(event.target.value));
  };

  const handleWeight2 = event => {
    setCurrency2Weight(parseInt(event.target.value));
  };

  const handleWeight3 = event => {
    setCurrency3Weight(parseInt(event.target.value));
  };

  const handleWeight4 = event => {
    setCurrency4Weight(parseInt(event.target.value));
  };

  const handleWeight5 = event => {
    setCurrency5Weight(parseInt(event.target.value));
  };

  const handleChange1 = event => {
    const key = event.target.value;
    setCurrency1(key.name);
    // console.log("key is", key);
    // console.log("key.id is", key.id);
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

  const handleLoSChange1 = event => {
    const newState = event.target.checked ? 'long' : 'short';
    setc1LongOrShort(newState)
  }
  const handleLoSChange2 = event => {
    const newState = event.target.checked ? 'long' : 'short';
    setc2LongOrShort(newState)
  }
  const handleLoSChange3 = event => {
    const newState = event.target.checked ? 'long' : 'short';
    setc3LongOrShort(newState)
  }
  const handleLoSChange4 = event => {
    const newState = event.target.checked ? 'long' : 'short';
    setc4LongOrShort(newState)
  }
  const handleLoSChange5 = event => {
    const newState = event.target.checked ? 'long' : 'short';
    setc5LongOrShort(newState)
  }

  const currencyQs = [currency1Q, currency2Q, currency3Q, currency4Q, currency5Q]
  const apiKeysArr = [currency1APIKey, currency2APIKey, currency3APIKey, currency4APIKey, currency5APIKey];
  const currencies = [currency1, currency2, currency3, currency4, currency5]
  const weights = [currency1Weight, currency2Weight, currency3Weight, currency4Weight, currency5Weight];
    
  const basketData = {
      basketNameStr: basketName,
      user_IDStr: user_IdStr,
      indexDateStr: indexDate,
      initialBasketValueInt: initialBasketValue,
      presentBasketValueInt: 0,
      percentReturnInt: 0,
      asset1HM: {
          asset1NameStr: currency1,
          asset1IndexPriceInt: 0,
          asset1QuantityInt: currency1Q,
          asset1WeightInt: currency1Weight,
          asset1APIKeyStr: currency1APIKey
      },
      asset2HM: {
          asset2NameStr: currency2,
          asset2IndexPriceInt: 0, 
          asset2QuantityInt: currency2Q,
          asset2WeightInt: currency2Weight,
          asset2APIKeyStr: currency2APIKey
      },
      asset3HM: {
          asset3NameStr: currency3,
          asset3IndexPriceInt: 0,
          asset3QuantityInt: currency3Q,
          asset3WeightInt: currency3Weight,
          asset3APIKeyStr: currency3APIKey
      },
      asset4HM: {
          asset4NameStr: currency4,
          asset4IndexPriceInt: 0,
          asset4QuantityInt: currency4Q,
          asset4WeightInt: currency4Weight,
          asset4APIKeyStr: currency4APIKey
      },
      asset5HM: {
          asset5NameStr: currency5,
          asset5IndexPriceInt: 0, 
          asset5QuantityInt: currency5Q,
          asset5WeightInt: currency5Weight,
          asset5APIKeyStr: currency5APIKey
      }
    }

  const calculateQuantityX = async (currency1APIKey, currency1Weight,currency2APIKey, currency2Weight,currency3APIKey, currency3Weight, currency4APIKey, currency4Weight, currency5APIKey, currency5Weight, indexDate) => {     
      
    for (let z=0; z < apiKeysArr.length; z++) {
        if (apiKeysArr[z] !== ""){
          let historicalPriceAPIStr = "https://api.coingecko.com/api/v3/coins/"+apiKeysArr[z]+"/history?date="+indexDate+"&localization=false";
          let historicalPriceInt = await axios.get(historicalPriceAPIStr).then((response) => response.data.market_data.current_price.usd);
          let iInt = z + 1
          basketData[`asset${iInt}HM`][`asset${iInt}IndexPriceInt`] = historicalPriceInt;
          let quantityInt = ((weights[z]/100) * initialBasketValue) / historicalPriceInt;
          basketData[`asset${iInt}HM`][`asset${iInt}QuantityInt`] = quantityInt
          currencyQs[z] = quantityInt;
        }
      }     
    }

  const calculatePercentReturn = ( async (presentBasketValue, currency1APIKey, currency2APIKey, currency3APIKey, currency4APIKey, currency5APIKey, currency1Q, currency2Q, currency3Q, currency4Q, currency5Q) => {
      console.log('calculatePercentReturn function started.');

      // eslint-disable-next-line
      const result = await calculateQuantityX(currency1APIKey, currency1Weight,currency2APIKey, currency2Weight,currency3APIKey, currency3Weight, currency4APIKey, currency4Weight, currency5APIKey, currency5Weight, indexDate, basketData)
      for (let x = 0; x <= apiKeysArr.length; x++) {
        if ((apiKeysArr[x] !== "") && !(apiKeysArr[x] === undefined)) {
          const presentPriceAPI = "https://api.coingecko.com/api/v3/simple/price?ids="+apiKeysArr[x]+"&vs_currencies=usd";
          const presentPrice = await axios.get(presentPriceAPI).then((response) => response.data[apiKeysArr[x]].usd); 
          let value = parseFloat(presentPrice * currencyQs[x]);
          presentBasketValue = parseFloat(presentBasketValue+value) 
          setPresentBasketValue(presentBasketValue);
        } 
      }      
      basketData.presentBasketValueInt = presentBasketValue;
      const pctReturn = (100 * (presentBasketValue - initialBasketValue) / initialBasketValue);
      setPercentReturn(pctReturn)
      basketData.percentReturnInt = pctReturn;
      console.log('basketData after updates to percent return and present basketvalue', basketData)
      setHandleSubmitFired(true);
      sendPostRequestToAPI();
    });

  const discoverCurencies = async () => {
      console.log("discoverCurrencies function started.")
      if (currencies[0] !=="") {
        const runCalculation = async () => {
          await calculatePercentReturn(presentBasketValue, 
            currency1APIKey, currency2APIKey, 
            currency3APIKey, currency4APIKey, 
            currency5APIKey, currency1Q, 
            currency2Q, currency3Q, 
            currency4Q, currency5Q)
          }
        runCalculation()
      }
    }

  const sendPostRequestToAPI = () => {
    console.log('basket data ', basketData)
    console.log('sendPostRequestToAPI fired.')
    axios.post(postBasketURLString, JSON.stringify(basketData), {
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then((responseHM) => {
      console.log(responseHM.data)
    })
    .catch((errorHM) => {
      console.log('Error', errorHM.message)})

    }  
  
  const handleSubmit = async event => {
    event.preventDefault();
    // console.log('handleSubmit completed.')
    await discoverCurencies(basketData); 
    //  let postDataHM = basketData;
    //  console.log('postData', postDataHM);
  }

  const card = (
    <React.Fragment>
       <><CardContent>
         <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
           {basketData.basketNameStr}
         </Typography>
         <Typography variant="h5" component="div">
           {/* Return: {basketData.percentReturnInt.toString().slice(0,5)}% */}
           Return: {basketData.percentReturnInt.toString().slice(0,5)}%
         </Typography>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Present basket value = ${basketData.presentBasketValueInt.toLocaleString(undefined, { maximumFractionDigits: 2 })}
           <br></br>
           Basket value on {indexDate} = ${initialBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
         </Typography>
       </CardContent></>
    </React.Fragment>
  );

  return (
    (handleSubmitFired === false) ? (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto'}}>
        <Typography component="h1" variant="h5">
          Build Your Basket
        </Typography>
        <Typography variant="p" style={{width: '100%'}}>
          INSTRUCTIONS: Calculate the historical performance of a basket by selecting up to 5 crypto tokens and a weight for each crypto token. For example, try 50% Bitcoin and 50% Ether, and an initial basket value of your choice, with a start date of 01-01-2022 to see how the calculator works for yourself! 
        </Typography>
        <Box mx="auto"  sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
          <form
            
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="basketName"
                  label="Basket Name"
                  fullWidth
                  required
                  onChange={event => {
                    handleBasketNameChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} >
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
              <Grid item xs={12}>
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

              {/* {// asset 1} */}
              <Box sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
              <Grid container spacing={3}>
                  <Grid item xs={4} >
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
                  </Grid>
                  <Grid item xs={4}>
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
                  </Grid>
                  <Grid item xs={4}>
                      <Typography>Short</Typography>
                      <Switch 
                          checked={c1LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                          onChange={handleLoSChange1}
                          inputProps={{ 'aria-label': 'controlled' }}
                      />
                      <Typography>Long</Typography>
                  </Grid>
              </Grid>
              </Box>

              {/* {// asset 2} */}
              <Box sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
                  <Grid item xs={6}> 
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
                  </Grid>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={4}>
                          <Typography>Short</Typography>
                          <Switch 
                              checked={c2LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                              onChange={handleLoSChange2}
                              inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography>Long</Typography>
                  </Grid>
              </Box>

              {/* {// asset 3} */}
              <Box sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={4}>
                          <Typography>Short</Typography>
                          <Switch 
                              checked={c3LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                              onChange={handleLoSChange3}
                              inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography>Long</Typography>
                  </Grid>
              </Box>


              {/* {// asset 4} */}
              <Box sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={6}> 
                  <div>
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
                  </Grid>
                  <Grid item xs={4}>
                          <Typography>Short</Typography>
                          <Switch 
                              checked={c4LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                              onChange={handleLoSChange4}
                              inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography>Long</Typography>
                  </Grid>
              </Box>


              {/* {// asset 5} */}
              <Box sx={{ border: '2px solid black', maxWidth: 'md', margin: '0 auto' }}>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={4}>
                          <Typography>Short</Typography>
                          <Switch 
                              checked={c5LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                              onChange={handleLoSChange5}
                              inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography>Long</Typography>
                  </Grid>
              </Box>
              <Grid item maxWidth='md'>
                <Button
                type="submit"
                color="primary"
                variant="contained" 
               >
                CREATE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright/>
      </div>

    </Container>): (
      <div>
        <Box sx={{ minWidth: 275, width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
          <Card>
             {card}
          </Card>
        </Box>
     <Copyright/>
    </div>)
  );
}