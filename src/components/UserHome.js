import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import BasketCardContainer from '../containers/BasketCardContainer';
import { useDispatch } from 'react-redux';
import { setUserBasketsArr } from '../actions/userActions';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';

export default function UserHome() {

  const user_IDStr = useSelector(state => state.user.id);
  let user_firstNameStr = useSelector(state =>state.user.name);
  const dispatchFn = useDispatch();

  const updateUserStore = (userObj) => {
    let dataHM = userObj;
    dispatchFn(setUserName(dataHM.name));
    dispatchFn(setUserEmail(dataHM.email));
    dispatchFn(setUserId(dataHM._id));
  }

  const loggedInUser = JSON.parse(localStorage.getItem('user'))
  console.log('/// user home line 23 || loggedInUser ||', loggedInUser)
  
  // console.log('UserHome.js || Line 23 || loggedInUserObj', userObj)
  if (loggedInUser) {
      console.log('Someone is logged in...');
      updateUserStore(loggedInUser);
  };

  // only show the first name 
  if (user_firstNameStr.split(' ').length > 1){
    user_firstNameStr = user_firstNameStr.split(' ')[0]
  }
  
  let getBasketsAPIStr = 'https://epistemica-x-db.vercel.app/api/basket/getAll'
  let basketsArr = []
  let currentUserBasketsArr = []
 
  // engineered at 11:44am on May 30, 2023
  // store is successfully updated 2:20 pm on May 30, 2023
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

  // retrieve all baskets 
  axios.get(getBasketsAPIStr)
  .then((responseHM) => {consumeAPI(responseHM.data)})
  .catch((errorHM) => {console.log(errorHM)})

  return (
    <div style={{textAlign: 'center'}}>
        <h2 style={{ margin: '20px 0' }}>Welcome home to Epistemica-X, {user_firstNameStr}!</h2>
        <BasketCardContainer/>
    </div>
  )
}
