import React from "react";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import LinkCompo from "./LinkCompo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function RoutCompo(){
    return(
        <>
        <BrowserRouter>
        <LinkCompo/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/contact' element={<Contact/>}/>
         </Routes>
        </BrowserRouter>
        
        
        
        </>
    )
}
export default RoutCompo;