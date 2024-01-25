import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home/home';
import Main from './main';
import Headers from './Header/Header';

const Routing= ()=>{

    return(
        <>
        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route index element={<Home/>}/>


            </Routes>
        
        </BrowserRouter>
        </>
    )

}

export default Routing;

