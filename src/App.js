import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import BasketForm from "./components/BasketForm"
import { Provider } from "react-redux";
import store from './store/store';

function App() {
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
          </Routes>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
