

      
      //example of what the names ds will look like according to key-value pair.
     //The names are the keys, the API keys are the values.
    // names: {
   //   "bitcoin" => "bitcoin", 
  //   "binance" => "binancoin", 
 //   "Polygon" => "matic-network"
  // }


// console.log('basketForm props', props.children[1]);
  // console.log('basketForm keys', props.children[1].keys)
  const [namesMap, setNamesMap] = useState(props.children[1]);
  // console.log('namesMap', namesMap);
  // namesMap looks ok 
  // console.log('namesMapK', Array.from(namesMap.keys()));
  // what worked was deleting NamesKeys var, setting watchlist as Array.from(namesMap.keys())
  const watchList = Array.from(namesMap.keys());
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

   {data.map((option) => (
    <option key={option.id} value={option}>
      {option.name}
    </option>
  ))}

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
