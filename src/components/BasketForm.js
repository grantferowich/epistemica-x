import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormHelperText, MenuItem, CssBaseline, Grid, Box, Container, Button, TextField, Typography, Select } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Copyright from "./Copyright";
import { Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from "react-redux";

export default function BasketForm(props) {

  const [data, setData] = useState([]);
  const [query] = useState('react');
  const [handleSubmitFired, setHandleSubmitFired] = useState(false);
  useEffect( () => {
   
    async function fetchData() {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h" + query);
      const apiData = (response.data);
      setData(apiData);

      // IDEA!!!! store all info from response
      // as a local file
      // load data from file to populate drop down menus
      
    }
    fetchData();
  }, [query]);


  // successfully read the user id from the redux store
  // on May 28, 2023
  const user_IdStr = useSelector(state => state.user.id)

  // URL endpoint for posting new baskets
  const postBasketURLString = 'https://epistemica-x-db.vercel.app/api/basket/post';

  // state variables set by user
  const [basketName, setBasketName] = useState('');
  const [indexDate, setIndexDate] = useState('');
  const [initialBasketValue, setInitialBasketValue] = useState('');
  const [presentBasketValue, setPresentBasketValue] = useState('');
  const [percentReturn, setPercentReturn ] = useState('');

  const [currency1, setCurrency1] = useState('');
  const [currency1Weight, setCurrency1Weight] = useState('');
  const [currency1APIKey, setCurrency1APIKey] = useState('');
  const [c1LongOrShort, setc1LongOrShort ] = useState('long'); 
  const currency1Q = 0;

  const [currency2, setCurrency2] = useState('');
  const [currency2Weight, setCurrency2Weight] = useState('');
  const [currency2APIKey, setCurrency2APIKey] = useState('');
  const [ c2LongOrShort, setc2LongOrShort ] = useState('long'); 
  const currency2Q = 0;

  const [currency3, setCurrency3] = useState('');
  const [currency3Weight, setCurrency3Weight] = useState('');
  const [currency3APIKey, setCurrency3APIKey] = useState('');
  const [ c3LongOrShort, setc3LongOrShort ] = useState('long'); 
  const currency3Q = 0;

  const [currency4, setCurrency4] = useState('');
  const [currency4Weight, setCurrency4Weight] = useState('');
  const [currency4APIKey, setCurrency4APIKey] = useState('');
  const [ c4LongOrShort, setc4LongOrShort ] = useState('long'); 
  const currency4Q = 0;

  const [currency5, setCurrency5] = useState('');
  const [currency5Weight, setCurrency5Weight] = useState('');
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

  const handleSubmit = async event => {

    event.preventDefault();
    // console.log('handleSubmit completed.')
    const currencyQs = [currency1Q, currency2Q, currency3Q, currency4Q, currency5Q]
    const apiKeysArr = [currency1APIKey, currency2APIKey, currency3APIKey, currency4APIKey, currency5APIKey];
    const currencies = [currency1, currency2, currency3, currency4, currency5]
    const weights = [currency1Weight, currency2Weight, currency3Weight, currency4Weight, currency5Weight];
    
    const basketData = {
      basketNameStr: basketName,
      user_IDStr: user_IdStr,
      indexDateStr: indexDate,
      initialBasketValueInt: initialBasketValue,
      presentBasketValueInt: presentBasketValue,
      percentReturnInt: percentReturn,
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

    const calculateQuantityX = async (currency1APIKey, currency1Weight,currency2APIKey, currency2Weight,currency3APIKey, currency3Weight, currency4APIKey, currency4Weight, currency5APIKey, currency5Weight, indexDate, basketData) => {
      console.log('calculateQuantityX function started.')
      
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
    const calculatePercentReturn = ( async (presentBasketValue, currency1APIKey, currency2APIKey, currency3APIKey, currency4APIKey, currency5APIKey, currency1Q, currency2Q, currency3Q, currency4Q, currency5Q, basketData) => {
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
      basketData['presentBasketValueInt'] = presentBasketValue;
      console.log('present basketValue...', presentBasketValue)
      console.log('[[basket data]] present basket value...', basketData['presentBasketValueInt'])
      console.log('Equal?', basketData['presentBasketValueInt']  === presentBasketValue)
      const pctReturn = (100 * (presentBasketValue - initialBasketValue) / initialBasketValue);
      setPercentReturn(pctReturn)
      basketData['percentReturnInt'] = pctReturn;
      console.log('percent return....', pctReturn);
      console.log('[[basket data]] percent return...', basketData['percentReturnInt'])
      console.log('Equal?', pctReturn === basketData['percentReturnInt'])
    });

    const discoverCurencies = () => {
      console.log("discoverCurrencies function started.")
      if (currencies[0] !=="") {
        const runCalculation = async () => {
          await calculatePercentReturn(presentBasketValue, 
            currency1APIKey, currency2APIKey, 
            currency3APIKey, currency4APIKey, 
            currency5APIKey, currency1Q, 
            currency2Q, currency3Q, 
            currency4Q, currency5Q, basketData)
          }
        runCalculation()
      }
    }

    const sendPostRequestToAPI = (basketData, postBasketURLString) => {
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

   discoverCurencies(); 
   setHandleSubmitFired(true);
   
   sendPostRequestToAPI(basketData, postBasketURLString);
  // paused here at 11:59 am on May 28, 2023
  // axios.post(postBasketURLString, JSON.stringify(basketData), {
  //   withCredentials: true,
  //   headers: {
  //     "Content-Type":"application/json"
  //   }
  // })
  // .then(responseHM => console.log(responseHM))
  // .catch(errorHM => console.log(errorHM.message))
  //  console.log("handleSubmitFired truth value =", handleSubmitFired === true)
    //calculateQuantityX sets the currency1Q, currency2Q, currency3Q, currency4Q, currency5Q state
    //calculateQuantityX runs after handleSubmit AND after there is a determination of a currency value being discovered
    //calculatePercentReturn will return a string of the XX.YY% return for the basket
  };

  const card = (
    <React.Fragment>
       <><CardContent>
         <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
           {basketName}
         </Typography>
         <Typography variant="h5" component="div">
           Return: {percentReturn.toString().slice(0,5)}%
         </Typography>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Present basket value = ${presentBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
           <br></br>
           Basket value on {indexDate} = ${initialBasketValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
         </Typography>
       </CardContent></>
    </React.Fragment>
  );

  return (
    (handleSubmitFired === false) ? (
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
              <Grid item xs={6} >
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
              <Grid item xs={6}>
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
              <Grid item xs={6}><TextField
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
              /></Grid>
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
              <Grid item xs={12}>
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
        <Box sx={{ minWidth: 275}}>
          <Card>
             {card}
          </Card>
        </Box>
     <Copyright/>
    </div>)
  );
}