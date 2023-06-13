import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../components/styles.css'
import { connect } from "react-redux";
import { setUserLoggedOut } from "../actions/userActions";



const NavTabs = ({ isLoggedIn, setUserLoggedOut }) => { 

  const handleSignOut = () => {
    setUserLoggedOut()
    console.log('handle signout...')
    console.log('isLoggedIn (expect false):', isLoggedIn)
  }
  return (
    <div sx={{ display: "flex" }}>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="nav-link">Epistemica-X</Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/create-basket" className="nav-link">Create basket</Link>
              </Typography>
              {isLoggedIn ? 
              (<div> 
              <Typography>
               <Link to="/user-home" className="nav-link">Home</Link>
              </Typography>
              <Typography>
                <Link onClick={handleSignOut}to="/signout-page" className="nav-link">Sign out</Link>
              </Typography>
              </div>
          ) : ( 
            <div> 
              <Typography sx={{ml: 2}}>
              <Link to="/login" className="nav-link">Log-in</Link>
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedOut
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs)