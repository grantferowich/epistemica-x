import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/user-home' element={<UserHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
