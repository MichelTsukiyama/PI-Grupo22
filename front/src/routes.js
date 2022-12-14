import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './pages/Search';
import Result from './pages/Result';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    );
}