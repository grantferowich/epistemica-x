import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';

export default function NavTabs(props) {
  const dispatchFn = useDispatch();
  let userLoggedInToF = false;
  const userNameStr = useSelector(state => state.user.name);
  
  if (userNameStr.length > 0){
    userLoggedInToF = true;
  }

  useEffect(() => {
    const updateStore = (userObj) => {
      let dataHM = userObj.data.userObj;
      dispatchFn(setUserName(dataHM.name));
      dispatchFn(setUserEmail(dataHM.email));
      dispatchFn(setUserId(dataHM._id));
    }
    
    const loggedInUserObj = localStorage.getItem('user');
    
    if (loggedInUserObj.name) {
        console.log('Someone is logged in...')
        updateStore(loggedInUserObj);
    };

  }, [dispatchFn])

  return (
    <div sx={{ display: "flex" }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="nav-link">Epistemica-X</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/create-basket" className="nav-link">Create basket</Link>
          </Typography>
          <div>
              {userLoggedInToF ? 
              (<div style={{display: 'flex', alignItems: 'center'}}>
          <Typography sx={{ml: 2}}>
            <Link to="/user-home" className="nav-link">Home</Link>
          </Typography>
          <Typography sx={{ml: 2}}>
            <Link to="/signout" className="nav-link">Sign out</Link>
          </Typography>
          </div>
          ) : ( 
            <div style={{ display: 'flex', alignItems: 'center'}}> 
              <Typography sx={{ml: 2}}>
              <Link to="/login" className="nav-link">Login</Link>
              </Typography>
              <Typography sx={{ml: 2}}>
              <Link to="/signup" className="nav-link">Sign-up</Link>
              </Typography>
            </div>
          )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
