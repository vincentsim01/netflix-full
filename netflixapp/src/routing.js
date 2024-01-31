import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home/home';
import Main from './main';
import Headers from './Header/Header';
import Footer from './Footer/Footer';
import Horizontal from './Horizontal/horizontal';
import Register from '../src/login/registerComponent';
import Login from '../src/login/loginComponent';

const Routing= ()=>{

    return(
        <>
        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="horizontal" element={<Horizontal/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>


            </Routes>
            <Footer/>
        
        </BrowserRouter>
        </>
    )

}

export default Routing;

