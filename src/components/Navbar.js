/* 
The navigation bar obviously allows users to navigate to different parts of the application.
The main pages available for the user who is logged in are the assets page,
the create basket page, and the user home page.


*/
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css';
import { useSelector, connect, useDispatch } from "react-redux";
import { setUserEmail, setUserId, setUserLoggedIn, setUserName } from '../actions/userActions';

const NavTabs = () => {   
  const userLoggedIn = useSelector(state => state.user.userLoggedIn)
  const dispatchFn = useDispatch();
  const handleExit = (eventHM) => {
    eventHM.preventDefault()
    dispatchFn(setUserName(''));
    dispatchFn(setUserEmail(''));
    dispatchFn(setUserId(''));
    dispatchFn(setUserLoggedIn(false))
  }
  return (
      <div style={{ display: "flex" }}>
        <Box style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="nav-link">Epistemica-X</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/create-basket" className="nav-link">Create basket</Link>
                </Typography>
                { userLoggedIn ? 
                    <>
                    <Typography sx={{ml: 2}}>   
                    <Link to="/user-home" className="nav-link">Home</Link>
                    </Typography>
                    <Typography sx={{ml: 2}}>
                    <Link onClick={handleExit} to="/signout-page" className="nav-link">Sign out</Link>
                    </Typography>
                    </> :
                    <>
                    <Typography sx={{ml: 2}}>
                    <Link to="/login" className="nav-link">Log in</Link>
                    </Typography>
                    <Typography sx={{ml: 2}}>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                    </Typography>
                    </>
                }  
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    );
}
export default connect()(NavTabs)