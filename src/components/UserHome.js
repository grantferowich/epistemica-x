import React from 'react'
import axios from 'axios';

export default function UserHome() {
  let getBasketsAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/getAll'
  
  axios.get(getBasketsAPIStr)
  .then((responseHM) => {console.log(responseHM)})
  .catch((errorHM) => {console.log(errorHM)})

  return (
    <div>
        <h2>Welcome home to Epistemica-X!</h2>
        
    </div>
  )
}
