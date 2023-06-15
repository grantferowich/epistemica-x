

      
      //example of what the names ds will look like according to key-value pair.
     //The names are the keys, the API keys are the values.
    // names: {
   //   "bitcoin" => "bitcoin", 
  //   "binance" => "binancoin", 
 //   "Polygon" => "matic-network"
  // }


// console.log('basketForm props', props.children[1]);
  // console.log('basketForm keys', props.children[1].keys)
  // const [namesMap, setNamesMap] = useState(props.children[1]);
  // console.log('namesMap', namesMap);
  // namesMap looks ok 
  // console.log('namesMapK', Array.from(namesMap.keys()));
  // what worked was deleting NamesKeys var, setting watchlist as Array.from(namesMap.keys())
  // const watchList = Array.from(namesMap.keys());
  // console.log('watchlist', watchList);
 // watchList is pulling properly

  // i think some of the responsiveness wierdness is unrelated to the code and existing because the API itself is somewhat shaky
  // sometimes the CG api is slow, that's all. 
  // currency1APIKey = namesMap.get(currency1)

    // const watchList = ['s','t','c']
  // const watchList = Array.from(namesMap.keys());
 
 // watchList is pulling properly

  // i think some of the responsiveness wierdness is unrelated to the code and existing because the API itself is somewhat shaky
  // sometimes the CG api is slow, that's all. 
  // currency1APIKey = namesMap.get(currency1)

   // setWatchList(...watchList, Array.from(namesMap.keys));

  //  {data.map((option) => (
  //   <option key={option.id} value={option}>
  //     {option.name}
  //   </option>
  // ))}

  // //BasketCardsContainer class component before the rfc re-write
  // import React, { Component } from "react";
  // import Basket from "../components/BasketCard";
  // import Grid from "@mui/material/Grid";
  
  // export default class BasketCardContainer extends Component {
  //   const [data, setData] = 
  
   
  //   render() {
  //     return (
  //       <div>
  //         <div>
  //           <h3>My Basket</h3>
  //           <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
  //             {this.state.baskets.map(basket => (
  //               <Grid item xs={12} sm={6}>
  //                 <Basket key={basket.id} basket={basket}></Basket>
  //               </Grid>
  //             ))}
  //           </Grid>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  

  // const basket = {
  //   name: name,
  //   initialBasketValue: initialBasketValue,
  //   indexDate: indexDate,
  //   coinOne: currency1,
  //   coin_1_q: currency1Q,
  //   token_1_api_key: currency1APIKey,
  //   coinTwo: currency2,
  //   coin_2_q: currency2Q,
  //   token_2_api_key: currency1APIKey,
  //   coinThree: currency3,
  //   coin_3_q: currency3Q,
  //   token_3_api_key: currency1APIKey,
  //   coinFour: currency4,
  //   coin_4_q: currency4Q,
  //   token_4_api_key: currency1APIKey,
  //   coinFive: currency5,
  //   coin_5_q: currency5Q,
  //   token_5_api_key: currency1APIKey
  // };

  //
//   // <TableCell
//   key={column.id}

//   id={labelId}
//   scope="row"
//   padding="normal"
// >
//   {row[0]}
// </TableCell>
// <TableCell>{row[1]}</TableCell>
// <TableCell>{"$" + row[2]}</TableCell>
// <TableCell>
//   {row[3].toString().slice(0, 4) + "%"}
// </TableCell>
// <TableCell>{"$" + row[4]}</TableCell>


/// leaderboard component

// import React, { useEffect, useState } from 'react';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";


// export default function Leaderboard({scoresList}) {
//     const rowsObj = scoresList.sort((a,b) => {
//         return b.score - a.score
//     })
    
//   return (
//     <div>
//     <h3>Leaderboard</h3>
//     <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>User</TableCell>
//           <TableCell align="right">Return</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rowsObj.map((row, index) => (
//           <TableRow
//             key={index}
//             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.user}
//             </TableCell>
//             <TableCell align="right">{row.score}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
//   </div>
//   )
// }


// DEVELOPMENT ENV CODE
      // try {
      //   const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h' + query);
      //   console.log('external api call made in Basket Form...')
      //   const apiDataArr = (response.data);
      //   console.log('isArray?', Array.isArray(apiDataArr))
      //   console.log('external apiData...', apiDataArr)
        // await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
        //   withCredentials: false,
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }).then(responseHM => {
        //   console.log('200: Successfully posted to the coin/post API.')
        //   dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr})
        //   setData(apiDataArr);
        // }).catch(errorHM => {
        //   console.log('Error running fetchData() inside BasketForm.js.')
        //   console.error(errorHM)
        // })
         
      // } catch (error){
      //   console.log('Error running fetchData. Check BasketForm.js.')
      //   console.log(error)
      // }

              // /* Suppose I sell short 10,000 worth of Bitcoin on 01/01/2023. Bitcoin price 
        // was 20,000. I sell short 0.5 units of Bitcoin. My return comes from comparing the initial 
        // price and the current price. If I bought 0.5 units, and my initial basket value was 10,000, then 
        // the price must have been 20,000. 
        // If the current price is 30,000, then I am down 50%. 
        // If the current price is 10,000, then i am up 50%. 
        // */

        // suppose initialPositionValueInt is 10,000
        // suppose initial price is 20,000 
        // suppose current price is 30,000
        // the short position is -50% 

        // let initialPrice = 
        // let positionValueInt = 

                  // console.log('/// differenceInt:', differenceInt)
          // if present price is 10,000 and initial price is 20,000, then, -1 * - 10,000 * 0.5 = 5,000
      // console.log('basketData after updates to percent return and present basketvalue', basketData)


      // archived 1:08pm on June 12, 2023:
/* 
    // const getCoinList = async () => {
    //   const get100CoinsHM = await axios.get(get100CoinsAPIStr)
    //   const coinListArr = get100CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
    //   console.log('FullTableContainer: Coins list', coinListArr)
    //   generateDataTable(coinListArr)
    // }
    // getCoinList();







                  {isAuthenticated ? 
          //     ( <div> 
          //     <Typography>
          //      <Link to="/user-home" className="nav-link">Home</Link>
          //     </Typography>
          //     <Typography>
          //       <Link onClick={signOut} to="/signout" className="nav-link">Sign out</Link>
          //     </Typography>
          // </div>
          ) : ( 
            <div> 
              <Typography sx={{ml: 2}}>
              <Link to="/login" className="nav-link">Log-in</Link>
              </Typography>
              <Typography sx={{ml: 2}}>
              <Link to="/signup" className="nav-link">Sign-up</Link>
              </Typography>
            </div>
          )}


  // const handleSignOut = () => {
  //   console.log('navBar line 20 saying what is up')
  //   console.log('handleSignOut fired...');
  //   // isAuthenticated = false;
  //   dispatchFn(signOut());
  // }





  // const mapStateToProps = (state) => {
//   console.log('nav bar line 67 lookie here')
//   console.log('state.auth.IA', state.auth.isAuthenticated)
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signOut: () => dispatch(signOut())
//   }
// }



// import { SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from "../actions/userActions";

// const authStateHM = {
//     isLoggedIn: ''
// };

// const authReducer = ( state = authStateHM, action) => {
    // switch (action.type) {
    //     case SET_USER_LOGGED_IN:
    //         return {
    //             ...authStateHM,
    //             isLoggedIn: true
    //         };
    //     case SET_USER_LOGGED_OUT: 
    //         return {
    //             ...state,
    //             isLoggedIn: false
    //         };
    //     default: 
    //         return authStateHM
    // }
// }

// export default authReducer

// import { takeLatest, put, all } from 'redux-saga/effects';
// import { setUserLoggedIn, setUserLoggedOut } from '../actions/userActions';

// function* watchIsLoggedIn() {
//   yield takeLatest('SET_USER_LOGGED_IN', setUserLoggedInSaga);
//   yield takeLatest('SET_USER_LOGGED_OUT', setUserLoggedOutSaga);
// }

// function* setUserLoggedInSaga() {
//   // Perform any additional logic or API calls if needed
//   yield put(setUserLoggedIn());
// }

// function* setUserLoggedOutSaga() {
//   // Perform any additional logic or API calls if needed
//   yield put(setUserLoggedOut());
// }

// export default function* rootSaga() {
//   yield all([watchIsLoggedIn()]);
// }



  // const handleSignOut = (e) => {
  //   e.preventDefault()
  //   setUserLoggedIn('something')
  //   console.log('expect f', isLoggedIn)
  //   return (
  //     <div>
  //         <h3>You have succcessfully signed out.</h3>
  //     </div>
  //   )
  // }
*/