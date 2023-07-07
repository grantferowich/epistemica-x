/* 
The full table container component
High level overview
The component is responsible for retrieving the data every 24 hours.
The component implements a data management system.
I was calling an external API (the coingecko api) too frequently during development,
which slowed down developer velocity. Here's the solution I implemented. Every 24 hours, I retrieve a 
new version of the table data from the external API. 
I store that data on the /coins MongoDB API.
Any user who reaches the page will see the table data from the MongoDB API,
which has no rate limits. For users who are on the page, there is only one API call made to the local API.
Instead of repeatedly calling the local API, the information from the local coins API is stored 
in the Redux store, which is persisted. 
The data management system is implemented in the fetchData function.

*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import FullTable from "../components/FullTable.tsx";
import { useSelector, useDispatch } from "react-redux";
import { setCoinList } from "../actions/systemActions.js";


export default function FullTableContainer() {
  const [query] = useState('react');
  const [rows, setRows] = useState([]);
  const [pageUpToF, setPageUpToF] = useState(false);
  const coinListArr = useSelector(state => state.system.coinList);

  const getLastUpdatedAPIStr = 'https://epistemica-x-db.vercel.app/api/time/last-record';
  const postCoinsAPIStr = 'https://epistemica-x-db.vercel.app/api/coin/post';
  const postNewTimeAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/time/post';
  const deleteCoinsAPIStr = 'https://epistemica-x-db.vercel.app/api/coin/delete-all';
  const dispatchFn = useDispatch();
  
  const generateDataTable = (dataArr) => {
    const rows = dataArr.map(coin => 
    [ coin.name,
      coin.symbol.toUpperCase(),
      Number.parseFloat(coin.current_price),
      Number.parseFloat(coin.price_change_percentage_24h),
      Number.parseInt(coin.market_cap),
      coin.id
    ]);
    setRows(rows)
    setPageUpToF(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentTimeInt = Date.now();
      // retrieve the date string of the last time the external api call was made
      const responseHM = await axios.get(getLastUpdatedAPIStr);
      const lastUpdatedDateStr = responseHM.data.lastUpdatedDate;
      const lastUpdatedInt = Date.parse(lastUpdatedDateStr);
      const timeDifferenceInt = currentTimeInt - lastUpdatedInt;
      // miliseconds to seconds, seconds to minutes, minutes to hours
      const hoursDifferenceInt = timeDifferenceInt / (1000 * 60 * 60)
        
      // PRODUCTION ENVIRONMENT CODE
      if (hoursDifferenceInt >= 24) {
        try {
          console.log('//// RETRIEVING FRESH VERSION OF FUlL TABLE');
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h" + query);
          // ensure menu options are sorted by market cap rank
          // coinListARr in the redux store will be sorted! great!
          const apiDataArr = (response.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
          await axios.delete(deleteCoinsAPIStr);
          await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
            withCredentials: false,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(responseHM => {
            console.log('200: Successfully posted to the coin/post API.');
            setCoinList(apiDataArr)
            dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr});
            dispatchFn({type: 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL', payload: 0});
            generateDataTable(apiDataArr)
          }).catch(errorHM => {
            console.log('Error running fetchData() inside BasketForm.js.')
            console.error(errorHM)
          })
        } catch (error){
          console.log('Error running fetchData. Check FullTableContainer.js.')
          console.log(error)
        }   
      } else {
        // if the redux store contains the coins list, 
        // there's no need to fetch the coins from the local API
        if (coinListArr !== undefined && coinListArr.length > 0 ) {
          console.log('//// RETRIEVING FUlL TABLE FROM REDUX STORE');
          const fullTableDataSortedArr = coinListArr.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
          console.log('fullTableDataSortedARr', fullTableDataSortedArr.length)
          generateDataTable(fullTableDataSortedArr);
        } else {
          // if the redux store does not contain the coins list, 
          // then fetch the coins list from the local API
          console.log('//// RETRIEVING FUlL TABLE FROM LOCAL API');
          const get250CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get250';  
            
          const get250CoinsHM = await axios.get(get250CoinsAPIStr);
          // ensure menu options are sorted by market cap rank
          const apiDataArr = get250CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
          dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr});
          generateDataTable(apiDataArr);
        }
      }
      if (hoursDifferenceInt >= 24){
        console.log('Hours difference int', hoursDifferenceInt)
        await axios.post(postNewTimeAPIStr)
        .then(response => {
          console.log('200: Successfully posted to the time/post API.')
        })
        .catch ( error => { console.log('Error with posting to the time post api,', error)})
      } else {
        console.log('Hours difference int', hoursDifferenceInt)
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <FullTable
          rows={rows}
        ></FullTable>
      </div>
    </div>
  )
}
