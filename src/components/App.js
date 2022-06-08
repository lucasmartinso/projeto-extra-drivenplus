import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import Login from "./Login";

export default function App() { 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} /> 
            </Routes>
        </BrowserRouter>
    )
}