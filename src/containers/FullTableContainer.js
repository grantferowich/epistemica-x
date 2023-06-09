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

    const get50CoinsAPIStr = 'https://epistemica-x-db-git-main-clariti23.vercel.app/api/coin/get50'    
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
      const get50CoinsHM = await axios.get(get50CoinsAPIStr)
      const coinListArr = get50CoinsHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
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
