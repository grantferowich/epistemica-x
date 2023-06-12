import React, { useEffect, useState } from "react";
import axios from "axios";
import FullTable from "../components/FullTable.tsx";
import { useSelector, useDispatch } from "react-redux";


export default function FullTableContainer() {
  const [data, setData] = useState([])
  const [query] = useState('react')
  const [rows, setRows] = useState([]);
  const [pageUpToF, setPageUpToF] = useState(false)
  const fullTableDataArr = useSelector(state => state.coinList)

  const getLastUpdatedAPIStr = 'https://epistemica-x-db.vercel.app/api/time/last-record';
  const get1_100CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get1-100';
  const postCoinsAPIStr = 'https://epistemica-x-db.vercel.app/api/coin/post';
  const postNewTimeAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/time/post';
  const dispatchFn = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const currentTimeInt = Date.now();
      // retrieve the date string of the last time the external api call was made
      const responseHM = await axios.get(getLastUpdatedAPIStr)
      const lastUpdatedDateStr = responseHM.data.lastUpdatedDate;
      const lastUpdatedInt = Date.parse(lastUpdatedDateStr)
      const timeDifferenceInt = currentTimeInt - lastUpdatedInt;
      // miliseconds to seconds, seconds to minutes, minutes to hours
      const hoursDifferenceInt = timeDifferenceInt / (1000 * 60 * 60);
      // const hoursDifferenceInt = 25
      console.log('Hours difference', hoursDifferenceInt)
      

      // dev environment 

        try {
          console.log('//// RETRIEVING FRESH VERSION OF FUlL TABLE')
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h" + query);
          // ensure menu options are sorted by market cap rank
          const apiDataArr = (response.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
          await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
            withCredentials: false,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(responseHM => {
            console.log('200: Successfully posted to the coin/post API.');
            dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr});
            dispatchFn({type: 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL', payload: 0});
            // setData(apiDataArr);
            generateDataTable(apiDataArr)
          }).catch(errorHM => {
            console.log('Error running fetchData() inside BasketForm.js.')
            console.error(errorHM)
          })
        } catch (error){
          console.log('Error running fetchData. Check FullTableContainer.js.')
          console.log(error)
        }   
  


      
      // PRODUCTION ENVIRONMENT CODE
      // if (hoursDifferenceInt >= 24) {
      //   try {
      //     console.log('//// RETRIEVING FRESH VERSION OF FUlL TABLE')
      //     const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h" + query);
      //     // ensure menu options are sorted by market cap rank
      //     const apiDataArr = (response.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
      //     await axios.post(postCoinsAPIStr, JSON.stringify(apiDataArr), {
      //       withCredentials: false,
      //       headers: {
      //         'Content-Type': 'application/json'
      //       }
      //     }).then(responseHM => {
      //       console.log('200: Successfully posted to the coin/post API.');
      //       dispatchFn({type: 'SET_COIN_LIST', payload: apiDataArr});
      //       dispatchFn({type: 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL', payload: 0});
      //       setData(apiDataArr);
      //     }).catch(errorHM => {
      //       console.log('Error running fetchData() inside BasketForm.js.')
      //       console.error(errorHM)
      //     })
      //   } catch (error){
      //     console.log('Error running fetchData. Check FullTableContainer.js.')
      //     console.log(error)
      //   }   
      // } else {
      //   console.log('//// RETRIEVING LOCAL VERSION OF FUlL TABLE');
           // const get100CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get1-100'    
      //   const get1_100CoinsHM = await axios.get(get100CoinsAPIStr);
      //   // ensure menu options are sorted by market cap rank
      //   const coinListArr = get1_100CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
      //   dispatchFn({type: 'SET_COIN_LIST', payload: coinListArr});
      //   setData(coinListArr);
      // }

      // if (hoursDifferenceInt >= 24){
      //   await axios.post(postNewTimeAPIStr)
      //   .then(response => {
      //     console.log('200: Successfully posted to the time/post API.')
      //   })
      //   .catch ( error => { console.log('Error with posting to the time post api,', error)})
      // }
    }
    fetchData();


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
        console.log('FullTableContainer.js. Line 28. Variable check. newRows.', rows)
    };
  }, [dispatchFn, query]);
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
