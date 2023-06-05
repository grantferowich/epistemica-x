import React, { useEffect, useState } from "react";
import axios from "axios";
import FullTable from "../components/FullTable.tsx";
import { useSelector } from "react-redux";
// import React from 'react'

export default function FullTableContainer() {
  
  const [rows, setRows] = useState([]);
  const [pageUpToF, setPageUpToF] = useState(false)
  const fullTableDataArr = useSelector(state => state.coinList)
  
  useEffect(() => {
    const get250CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get250'
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

    const getCoinList = async () => {
      const get250CoinsHM = await axios.get(get250CoinsAPIStr)
      const coinListArr = get250CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
      console.log('FullTableContainer: Coins list', coinListArr)
      generateDataTable(coinListArr)
    }
    getCoinList();
    
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

// export default class FullTableContainer extends Component {
//   state = {
//     rows: [],
//     pageUp: false
//   };

//   // store all this information as data in the
//   // redux store. call the data FullTableData.
//   // in this file write to a new file.
//   // read from that file to write to the datastore. 
//   // store the date and time the FullTable was 
//   // last updated in the redux store


//   // write a function which checks if the FullTable
//   // data is more than 24 hours old
//   // if the data is more than 24 hours old, make a
//   // new api call and store that data in a local file 
//   // read data from the local file to write to the redux store. 
//   // If the data is more than 24 hours old, delete the current FullTable data 
//   // file. 

//   // async componentDidMount() {   
//   //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h")
//   //   .then( (data) => this.generateDataTable(data.data))
//   //   .catch((err) =>console.log(err))
//   // }
  
  




//   render() {
//     return (
      
//     );
//   }
// }
