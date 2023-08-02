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
        if (coinListArr !== undefined && coinListArr.length > 100 ) {
          console.log('//// RETRIEVING FUlL TABLE FROM REDUX STORE');
          generateDataTable(coinListArr);
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
