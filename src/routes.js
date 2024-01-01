import React from 'react';
import {BrowserRouter, Routes as Router, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";

function Routes(){

    return(
        <BrowserRouter>
            <Router>
                <Route path="/" element={<HomePage />}/>
            </Router>
        </BrowserRouter>
    );
 };
export default Routes;

