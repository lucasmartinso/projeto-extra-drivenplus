import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import Login from "./Login";
import Cadastro from "./Cadastro"; 
import PlanOptions from "./PlanOptions";
import Assignament from "./Assignament";

export default function App() {  
    const [userData, setUserData] = useState("");  

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setUserData={setUserData}/>} />  
                <Route path="/sign-up" element={<Cadastro />} />  
                <Route path="/subscriptions" element={<PlanOptions userData={userData}/>} />  
                <Route path="/subscriptions/:idPlano" element={<Assignament userData={userData}/>} /> 
            </Routes>
        </BrowserRouter>
    )
}