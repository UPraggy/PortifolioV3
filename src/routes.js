import React from 'react';
import {BrowserRouter, Routes as Router, Route} from 'react-router-dom';
import Main from './components/PaginaInicial/Main';

function Routes(){

    return(
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Main />}/>
            </Router>
        </BrowserRouter>
    );
 };
export default Routes;

