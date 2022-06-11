import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import Plan from "./Plan";

export default function PlanOptions({userData}){ 
    const [planData, setPlanData] = useState([]); 

    const navigate = useNavigate();
    
    useEffect(() => { 
        const config = { 
            headers: {Authorization: `Bearer ${userData}`}
        }; 

        const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",config);  

        promise.then(response => { 
            console.log(response.data); 
            setPlanData(response.data);
        }); 

        promise.catch(err => { 
            alert("Erro de indentificação do usuário!!\nFaça o Login Novamente!"); 
            console.log(err.response.status);
            navigate("/"); 
        });
    }, []);

    return( 
        <> 
        <Titulo>Escolha seu Plano</Titulo> 

        <Planos> 
        {planData.map(plano => 
            <Plan
                image = {plano.image} 
                price = {plano.price} 
                id = {plano.id}
            />  
        )};
        </Planos> 
        </>
    )
} 

const Titulo = styled.div`
    width: 100%; 
    height: 100%; 
    font-size: 32px; 
    font-weight: bold; 
    display: flex;
    justify-content: center; 
    color: rgba(255, 255, 255, 1); 
    padding-top: 29px; 
    margin-bottom: 24px;
` 
const Planos = styled.div`
    width: 100%; 
    height: 100%; 
    margin-bottom: 20px; 
    margin-top: 26px; 
    display: flex; 
    align-items: center; 
    flex-direction: column; 
` 