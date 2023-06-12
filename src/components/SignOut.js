import React from 'react';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';
import { useDispatch } from 'react-redux';


export default function SignOut() {
  return (
    <div>
    <div>
        <h3>You have succcessfully signed out.</h3>
    </div>
    </div>

  )
}
