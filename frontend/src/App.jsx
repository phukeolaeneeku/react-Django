import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import SignUpUser from './components/SignUpUser';
import LoginUser from './components/loginAndSignup/LoginUser';
import RegisterUser from './components/loginAndSignup/RegisterUser';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import UserRegister from './components/userRegister/UserRegister';
import Home from './components/Home';
import ProductDetial from './components/products/ProductDetial';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/signupuser' Component={SignUpUser}/>
                <Route path='/loginuser' Component={LoginUser}/>
                <Route path='/registerUser' Component={RegisterUser}/>
                <Route path='/forgotPassword' Component={ForgotPassword}/>
                <Route path='/userRegister' Component={UserRegister}/>
                <Route path='/' Component={Home}/>
                <Route path='/productdetial' Component={ProductDetial}/>
            </Routes>
        </Router>
    );
}

export default App;
