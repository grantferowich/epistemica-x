import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import BasketForm from "./components/BasketForm";
import SignOut from "./components/SignOut";
import store from './store/store';
import { Provider } from "react-redux";

function App() {
  // engineered implementation of localStorage
  // for user persistence
  // at 7:06pm, June 5, 2023
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/user-home' element={<UserHome/>}/>
            <Route exact path='/create-basket' element={<BasketForm/>}/>
            <Route exact path='/signout' element={<SignOut/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
