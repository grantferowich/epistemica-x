import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";

// TO-DO as of 10:00 am
// get current user id
// get current user name
// greet this particular user by name
// render basket data via cards

export default function UserHome() {
  const user_IdStr = useSelector(state => state.user.id)
  let user_firstNameStr = useSelector(state =>state.user.name)
  
  if (user_firstNameStr.split(' ').length > 1){
    user_firstNameStr = user_firstNameStr.split(" ")[0]
  }
  console.log('userIdStr', user_IdStr)
  console.log('user_firstName', user_firstNameStr)
  let getBasketsAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/getAll'
  let basketsArr = []
  const consumeAPI = (data) => {
      basketsArr = data;

  }
  axios.get(getBasketsAPIStr)
  .then((responseHM) => {consumeAPI(responseHM.data)})
  .catch((errorHM) => {console.log(errorHM)})

  return (
    <div>
        <h2>Welcome home to Epistemica-X, {user_firstNameStr}!</h2>
        
    </div>
  )
}
