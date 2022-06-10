import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function App() { 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />  
                <Route path="/sign-up" element={<Cadastro />} /> 
            </Routes>
        </BrowserRouter>
    )
}