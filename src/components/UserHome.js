import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import { useSelector } from "react-redux";
import BasketCardContainer from '../containers/BasketCardContainer';
import { useDispatch } from 'react-redux';
import { setUserBasketsArr } from '../actions/userActions';
// import { setUserEmail, setUserId, setUserName } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

export default function UserHome() {
  const user_IDStr = useSelector(state => state.user.id);
  let user_firstNameStr = useSelector(state =>state.user.name);
  let userLoggedIn = useSelector(state => state.user.userLoggedIn);
  const dispatchFn = useDispatch();

  if (user_firstNameStr.split(' ').length > 1){
    user_firstNameStr = user_firstNameStr.split(' ')[0]
  }

  // engineered at 11:44am on May 30, 2023
  // store is successfully updated 2:20 pm on May 30, 2023



  useEffect(() => {
    let getBasketsAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/getAll';
    let basketsArr = [];
    let currentUserBasketsArr = [];
    const updateStore = (currentUserBasketsArr) => {
      dispatchFn(setUserBasketsArr(currentUserBasketsArr))
    }
    const setCurrentUserBasketsArr = (arr) => {
      for (const hm of arr){
        if (hm.user_IDStr === user_IDStr){
          currentUserBasketsArr.push(hm)
        }
      }
      updateStore(currentUserBasketsArr)
    }

    const consumeAPI = (data) => {
      basketsArr = data;
      setCurrentUserBasketsArr(basketsArr)
    }

    axios.get(getBasketsAPIStr)
    .then((responseHM) => {consumeAPI(responseHM.data)})
    .catch((errorHM) => {console.log(errorHM)})
  }, [dispatchFn, user_IDStr])
  // retrieve all baskets 
  
  
  return (
    <div style={{textAlign: 'center'}}>
         <div>

          <h3> The user is logged in: {userLoggedIn.toString()} </h3>
         <h2 style={{ margin: '20px 0' }}>Welcome home to Epistemica-X, {user_firstNameStr}!</h2>
         <><BasketCardContainer/></>
         </div>
    </div>
  )
}
