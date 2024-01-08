import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import SignUpUser from './components/SignUpUser';
import LoginUser from './components/LoginUser';
import Home from './components/Home';
import ProductDetial from './components/ProductDetial';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' Component={UserForm}/>
                <Route path='/users' Component={UserList}/> */}
                <Route path='/signupuser' Component={SignUpUser}/>
                <Route path='/loginuser' Component={LoginUser}/>
                <Route path='/' Component={Home}/>
                <Route path='/productdetial' Component={ProductDetial}/>
            </Routes>
        </Router>
    );
}

export default App;
