import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import BasketForm from "./components/BasketForm";
import SignOutPage from "./components/SignOutPage";
import store from './store/store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundColor: '#cbe3ff', minHeight: '100vh'}}>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/user-home' element={<UserHome/>}/>
            <Route exact path='/create-basket' element={<BasketForm/>}/>
            <Route exact path='/signout-page' element={<SignOutPage/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;