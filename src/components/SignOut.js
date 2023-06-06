import React from 'react';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';
import { useDispatch } from 'react-redux';


export default function SignOut() {
  const dispatchFn = useDispatch()

  const handleSignOut = () => {
    dispatchFn(setUserName(''));
    dispatchFn(setUserEmail(''));
    dispatchFn(setUserId(''));
    localStorage.clear()
  }
  return (
    <div onClick={handleSignOut}>
        <h3>You have succcessfully signed out.</h3>
    </div>
  )
}
