/* 
High level overview of this file: BasketForm.js
Date: June 25, 2023
1. BasketForm.js is a file responsible for rendering the form after users click "Create basket."
2. BasketForm.js is responsible for posting data to the /baskets API.
3. BasketForm.js retrieves a list of asset names to render in the dropdown menu "select basket token 1/2/3/4/5"
4. BasketForm.js renders the most recently created basket immediately after a user creates the basket.
When the user enters invalid inputs, there will be an error message 
returned and the basket will not post to the API.
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormHelperText, MenuItem, CssBaseline, Grid, Box, Container, Button, TextField, Typography, Select } from "@mui/material";
import Copyright from "./Copyright";
import { useDispatch, useSelector } from "react-redux";
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasketForm(){
  const [data, setData] = useState([]);
  const [handleSubmitFired, setHandleSubmitFired] = useState(false);
  const navigateFn = useNavigate();
  const dispatchFn = useDispatch();
  const coinListArr = useSelector(state => state.system.coinList);
  
  useEffect(() => {
    const fetchDataArr = async () => {
      if (coinListArr !== '' && coinListArr.length > 0){
        setData(coinListArr)
        return
      } else {
        const get250CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get250';
        let coinHM = await axios.get(get250CoinsAPIStr)
        let coinArray = coinHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
        setData(coinArray)
        return 
      }
    }
    fetchDataArr()
  }, [])
  
  
  // DATA MANAGEMENT SYSTEM (DMS)
  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     const currentTimeInt = Date.now();
  //     // retrieve the date string of the last time the external api call was made
  //     const responseHM = await axios.get(getLastUpdatedAPIStr)
  //     const lastUpdatedDateStr = responseHM.data.lastUpdatedDate;
  //     const lastUpdatedInt = Date.parse(lastUpdatedDateStr)
  //     const timeDifferenceInt = currentTimeInt - lastUpdatedInt;
  //     // miliseconds to seconds, seconds to minutes, minutes to hours
  //     const hoursDifferenceInt = timeDifferenceInt / (1000 * 60 * 60);
  //     console.log('Hours difference', hoursDifferenceInt)
  //     // PRODUCTION ENVIRONMENT CODE
  //     if (hoursDifferenceInt >= 24) {
  //       try {
  //         console.log('//// RETRIEVING FRESH VERSION OF FUlL TABLE')
  //         const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h" + query);
  //         // ensure menu options are sorted by market cap rank
  //         const apiDataArr = (response.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
  //         await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
  //           withCredentials: false,
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         }).then(responseHM => {
  //           console.log('200: Successfully posted to the coin/post API.');
  //           dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr});
  //           dispatchFn({type: 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL', payload: 0});
  //           setData(apiDataArr);
  //         }).catch(errorHM => {
  //           console.log('Error running fetchData() inside BasketForm.js.')
  //           console.error(errorHM)
  //         })
  //       } catch (error){
  //         console.log('Error running fetchData. Check BasketForm.js.')
  //         console.log(error)
  //       }   
  //     } else {
  //       console.log('//// RETRIEVING LOCAL VERSION OF FUlL TABLE');
  //       const get250CoinsHM = await axios.get(get250CoinsAPIStr);
  //       // ensure menu options are sorted by market cap rank
  //       const coinListArr = get250CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
  //       dispatchFn({type: 'SET_COIN_LIST', payload: coinListArr});
  //       setData(coinListArr);
  //     }

  //     if (hoursDifferenceInt >= 24){
  //       await axios.post(postNewTimeAPIStr)
  //       .then(response => {
  //         console.log('200: Successfully posted to the time/post API.')
  //       })
  //       .catch ( error => { console.log('Error with posting to the time post api,', error)})
  //     }
  //   }

  // fetchData();
  // }, [query, dispatchFn]);
  // successfully read the user id from the redux store
  // on May 28, 2023
  
  const user_IdStr = useSelector(state => state.user.id)
  // URL endpoint for posting new baskets
  const postBasketURLString = 'https://epistemica-x-db.vercel.app/api/basket/post';
  // state variables set by user
  const [basketName, setBasketName] = useState('');
  const [indexDate, setIndexDate] = useState('');
  const [errorMessageStr, setErrorMessageStr] = useState('')

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


  useEffect(() => {
    let currArr = [currency1, currency2, currency3, currency4, currency5]
  }, [currency1, currency2, currency3, currency4, currency5])
  
  // The basket object contains the crypto token names, initial basket value, historical date and quantity of crypto tokens.
  // All the basket data fields are from user inputs except the quantity values, which are calculated in state. 
  // Present basket value will be calculated by multiplying the historically derived quantity by the present price. 

  const handleBasketNameChange = event => {
    setBasketName(event.target.value);
  };

  const handleDateChange = event => {
    let inputStr = event.target.value
    let monthStr = inputStr.slice(0, 3)
    let dayStr = inputStr.slice(3, 5)
    let yearStr = inputStr.slice(6, 10)
    let apiFormattedDateStr = dayStr+"-"+monthStr+yearStr
    setIndexDate(apiFormattedDateStr);
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
  const directionsArr = [c1LongOrShort, c2LongOrShort, c3LongOrShort, c4LongOrShort, c5LongOrShort]
  
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
          console.log('line 263: Quantity Int:', quantityInt);
          basketData[`asset${iInt}HM`][`asset${iInt}QuantityInt`] = quantityInt
          currencyQs[z] = quantityInt;
        }
      }     
  }

  const calculatePercentReturn = ( async (presentBasketValue, currency1APIKey, currency2APIKey, currency3APIKey, currency4APIKey, currency5APIKey, currency1Q, currency2Q, currency3Q, currency4Q, currency5Q) => {
      // eslint-disable-next-line
      const result = await calculateQuantityX(currency1APIKey, currency1Weight,currency2APIKey, currency2Weight,currency3APIKey, currency3Weight, currency4APIKey, currency4Weight, currency5APIKey, currency5Weight, indexDate, basketData)
      for (let x = 0; x <= apiKeysArr.length; x++) {
        let directionLoSStr = directionsArr[x];
        if ((apiKeysArr[x] !== "") && !(apiKeysArr[x] === undefined) && directionLoSStr === 'long') {
          const presentPriceAPI = "https://api.coingecko.com/api/v3/simple/price?ids="+apiKeysArr[x]+"&vs_currencies=usd";
          const presentPriceInt = await axios.get(presentPriceAPI).then((response) => response.data[apiKeysArr[x]].usd); 
          let value = parseFloat(presentPriceInt * currencyQs[x]);
          presentBasketValue = parseFloat(presentBasketValue+value);
          setPresentBasketValue(presentBasketValue);
        } 
        // appended logic to calculate position value of short position Sunday June 4, 2023 at 5:33pm
        if ((apiKeysArr[x] !== "") && !(apiKeysArr[x] === undefined) && directionLoSStr === 'short'){
          const presentPriceAPI = "https://api.coingecko.com/api/v3/simple/price?ids="+apiKeysArr[x]+"&vs_currencies=usd";
          const presentPriceInt = await axios.get(presentPriceAPI).then((response) => response.data[apiKeysArr[x]].usd); 
          let quantityInt = currencyQs[x];
          let weightInt = weights[x];
          let initialPositionValueInt = (weightInt/100) * initialBasketValue;
          let initialPriceInt = (initialPositionValueInt / quantityInt);
          let differenceInt = -1 * (presentPriceInt - initialPriceInt) * quantityInt;

          presentBasketValue = initialPositionValueInt + differenceInt          
          setPresentBasketValue(presentBasketValue);
        }
      }      
      basketData.presentBasketValueInt = presentBasketValue;
      const pctReturn = (100 * (presentBasketValue - initialBasketValue) / initialBasketValue);
      setPercentReturn(pctReturn)
      basketData.percentReturnInt = pctReturn;
      setHandleSubmitFired(true);
      sendPostRequestToAPI(basketData);
      updateCard(basketData)
  });

  const discoverCurencies = async () => {
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

  const sendPostRequestToAPI = (basketData) => {
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
  
  const handleSubmit = async (event) => {
    let messagesArr = [];
    const data = new FormData(event.currentTarget)
    const basketNameStr = data.get('basketName')   
    const startingDateStr = data.get('startingDate')
    const initialBasketValueStr = data.get('initialBasketValue')

    const weight1Int = data.get('weight1')
    console.log('weight1Int', weight1Int)
    console.log(typeof weight1Int)
    const asset1Str = data.get('asset1')
    const asset1LoSStr = data.get('asset1LoS')

    const weight2Int = data.get('weight2')
    const asset2Str = data.get('asset2')
    const asset2LoSStr = data.get('asset2LoS')

    const weight3Int = data.get('weight3')
    const asset3Str = data.get('asset3')
    const asset3LoSStr = data.get('asset3LoS')

    const weight4Int = data.get('weight4')
    const asset4Str = data.get('asset4')
    const asset4LoSStr = data.get('asset4LoS')

    const weight5Int = data.get('weight5')
    const asset5Str = data.get('asset5')
    const asset5LoSStr = data.get('asset5LoS')

    const passwordStr = data.get('password') 
    
    // Error scenarios
    // basket name empty
    if (basketNameStr === '' || basketNameStr === null || basketNameStr.length === 0){
      messagesArr.push('Invalid basket name. The basket name field must not be empty.')
    }

    // Empty starting date
    if (startingDateStr === '' || startingDateStr === null){
      messagesArr.push('Invalid starting date. The starting date field must not be empty.')
    }

    const monthInt = parseInt(startingDateStr.slice(0, 3))
    const dayInt = parseInt(startingDateStr.slice(3, 5))
    const yearInt = parseInt(startingDateStr.slice(6, 10))
    let now = new Date();
    let currentYearInt = now.getFullYear()
    
    // Starting date numbers invalid
    if (monthInt < 1 || monthInt > 12 || dayInt < 1 || dayInt > 31 || yearInt > currentYearInt ){
      messagesArr.push('Invalid date.');
    }

    // Starting date is too early
    if (yearInt < 2014){
      messagesArr.push('The earliest date you can enter is 01-01-2014.');
    }

    // initial basket value is negative
    if (initialBasketValueStr < 0){
      messagesArr.push('The initial basket value must be greater than 0.')
    }

    if (isNaN(initialBasketValueStr)){
      messagesArr.push('The initial basket value must be a number.')
    }

    if (isNaN(weight1Int)) {
      messagesArr.push('The weight(s) must be numbers.')
    }

    if (weight1Int < 0 || weight1Int > 100){
      messagesArr.push('The weights must be valid.')
    }


    let totalWeightInt = parseInt(weight1Int) + parseInt(weight2Int) + parseInt(weight3Int) + parseInt(weight4Int) + parseInt(weight5Int)

    if (parseInt(totalWeightInt) !== 100){
      messagesArr.push('The total weight of the basket must equal 100.')
    }

    if (initialBasketValueStr.includes(".")){
      const numbersAfterPeriodInt = initialBasketValueStr.split(".")[1]
      if (numbersAfterPeriodInt.length > 2){
        messagesArr.push('The initial basket value must only have two decimal places.')
      }
    }

    if (isNaN(initialBasketValueStr)){
      messagesArr.push("The initial basket value must be a number.")
    }
    

    console.log('messages', messagesArr)
    if (messagesArr.length > 0){
      console.log('messages', messagesArr)
      event.preventDefault();
      setErrorMessageStr(messagesArr[0])
      console.log('Yello!!!')
      return
    } else {
      event.preventDefault();
      await discoverCurencies(basketData); 
      navigateFn('/view-single-basket-page');
    }

   
  }

  // const setHandleSubmitFiredToFalse = () => {
  //   setHandleSubmitFired(false)
  // }


  // /* 
  // Error message render logic 
 
  
  // */
  return (

    
    <div style={{backgroundColor: '#cbe3ff'}}>
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div style={{ width: '60%', maxWidth: '1000px', margin: '0 auto'}}>
      
        <Typography component="h1" variant="h5" style={{ margin: '20px 0' }}>
          Build Your Basket
        </Typography>
        <Typography variant="p" style={{width: '60%', margin: '20px 0 40px'}}>
          Calculate the historical performance of a basket by selecting up to 5 crypto tokens and a weight for each crypto token. For example, try 50% Bitcoin and 50% Ether, and an initial basket value of your choice, with a start date of 01-01-2022 to see how the calculator works for yourself! 
        </Typography>
        <Box mx="auto"  sx={{ border: '2px solid black', maxWidth: 'xl', margin: '20px auto', backgroundColor: 'white' }}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
          >
            <Grid container spacing={1} style={{alignItems: 'center'}}>
              <Grid item xs={12}>
              {errorMessageStr && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errorMessageStr}</Alert>
      </Stack>}
                <TextField
                  id="basketName"
                  label="Basket Name"
                  name="basketName"
                  fullWidth
                  required
                  onChange={event => {
                    handleBasketNameChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  id="startingDate"
                  name="startingDate"
                  label="Starting date"
                  fullWidth
                  required
                  defaultValue=""
                  helperText="MM-DD-YYYY"
                  onChange={event => {
                    handleDateChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="initialBasketValue"
                  name="initialBasketValue"
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
              <Box md={{ maxWidth: 'xl', margin: '0 auto' }}>
              <Grid container spacing={3}>
                  <Grid item xs={4} style={{ marginLeft: '10px' }}>
                      <TextField
                      id="weight1"
                      name="weight1"
                      label="Weight (%)"
                      variant="filled"
                      type="number"
                      defaultValue={0}
                      onChange={event => {
                      handleWeight1(event);
                      }}
                      InputLabelProps={{
                      shrink: true
                      }}
                      />
                  </Grid>
                  <Grid item xs={4} >
                      <FormControl>
                        <Select 
                          displayEmpty
                          onChange={handleChange1}
                          inputProps={{ 'aria-label': 'Without label' }}
                          id="asset1"
                          name="asset1"
                          >
                          <MenuItem value=""><em>None</em></MenuItem>
                            {data.map((option) => (
                          <MenuItem key={option.id} value={option}>
                            {option.name}
                          </MenuItem>
                        ))}
                        </Select>
                        <FormHelperText>Select asset for the basket</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid container alignItems='center' justifyContent='flex-end' xs={3}>
                          <Typography>Short</Typography>
                          <Switch id="asset1LoS"
                          name="asset1LoS"
                          checked={c1LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                          onChange={handleLoSChange1}
                          inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography>Long</Typography>
                  </Grid>            
              </Grid>
              </Box>
              {/* {// asset 2} */}
              <Box md={{ maxWidth: 'xl', margin: '0 auto' }}>
                  <Grid container spacing={3}>
                    <Grid item xs={4} style={{ marginLeft: '10px' }}> 
                              <TextField
                              id="weight2"
                              name="weight2"
                              label="Weight (%)"
                              variant="filled"
                              type="number"
                              defaultValue={0}
                              onChange={event => {
                                handleWeight2(event);
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
                          id="asset2"
                          name="asset2"
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
                        <FormHelperText>Select asset for the basket</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid container alignItems='center' justifyContent='flex-end'  xs={3}>
                            <Typography>Short</Typography>
                              <Switch 
                                  id="asset2LoS"
                                  name="asset2LoS"
                                  checked={c2LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                                  onChange={handleLoSChange2}
                                  inputProps={{ 'aria-label': 'controlled' }}
                              />
                            <Typography>Long</Typography>
                    </Grid>
                  </Grid>
              </Box>
              {/* {// asset 3} */}
                <Box md={{ maxWidth: 'md', margin: '0 auto' }}>
                  <Grid container spacing={3}>
                  <Grid item xs={4} style={{ marginLeft: '10px' }}>
                      <TextField
                      id="weight3"
                      name="weight3"
                      label="Weight (%)"
                      variant="filled"
                      type="number"
                      defaultValue={0}
                      onChange={event => {
                      handleWeight3(event);
                      }}
                      InputLabelProps={{
                      shrink: true
                      }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                    <div >
                    <FormControl>
                      <Select 
                        displayEmpty
                        name="asset3"
                        id="asset3"
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
                      <FormHelperText>Select asset for the basket</FormHelperText>
                    </FormControl>
                    </div>
                    </Grid>
                    <Grid container alignItems='center' justifyContent='flex-end' xs={3}>
                            <Typography>Short</Typography>
                            <Switch 
                                id="asset3LoS"
                                name="asset3LoS"
                                checked={c3LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                                onChange={handleLoSChange3}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography>Long</Typography>
                    </Grid>
                  </Grid>
                </Box>
              
              {/* {// asset 4} */}
              <Box md={{ maxWidth: 'md', margin: '0 auto' }}>
                  <Grid container spacing={3}>
                      <Grid item xs={4} style={{ marginLeft: '10px' }}>
                      <TextField
                      id="weight4"
                      name="weight4"
                      label="Weight (%)"
                      variant="filled"
                      type="number"
                      defaultValue={0}
                      onChange={event => {
                        handleWeight4(event);
                      }}
                      InputLabelProps={{
                        shrink: true
                      }}
                      />
                      </Grid>
                      <Grid item xs={4}> 
                      <div>
                      <FormControl>
                        <Select 
                          displayEmpty
                          id="asset4"
                          name="asset4"
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
                        <FormHelperText>Select asset for the basket</FormHelperText>
                      </FormControl>
                      </div>
                      </Grid>
                      <Grid container alignItems='center' justifyContent='flex-end' xs={3}>
                              <Typography>Short</Typography>
                              <Switch 
                                  id="asset4LoS"
                                  name="asset4LoS"
                                  checked={c4LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                                  onChange={handleLoSChange4}
                                  inputProps={{ 'aria-label': 'controlled' }}
                              />
                              <Typography>Long</Typography>
                      </Grid>
                  </Grid>   
              </Box>
              {/* {// asset 5} */}
              <Box md={{ maxWidth: 'md', margin: '0 auto' }}>
                <Grid container spacing={3}>
                    <Grid item xs={4} style={{ marginLeft: '10px' }}>
                    <TextField
                    id="weight5"
                    name="weight5"
                    label="Weight (%)"
                    variant="filled"
                    type="number"
                    defaultValue={0}
                    onChange={event => {
                      handleWeight5(event);
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
                        id="asset5"
                        name="asset5"
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
                      <FormHelperText>Select asset for the basket</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid container alignItems='center' justifyContent='flex-end' xs={3}>
                            <Typography>Short</Typography>
                            <Switch 
                                id="asset5LoS"
                                name="asset5LoS"
                                checked={c5LongOrShort === 'long'} // Set the checked state based on the value of 'checked'
                                onChange={handleLoSChange5}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography>Long</Typography>
                    </Grid>
                </Grid>
                   
              </Box>  
            </Grid>
            <Grid item maxWidth='md'>
                <Button
                type="submit"
                color="primary"
                variant="contained" 
                fullWidth
               >
                CREATE
                </Button>
            </Grid>
        </form>
        </Box>
        <Copyright/>
      </div>
      </Container>
    </div>
  );
}