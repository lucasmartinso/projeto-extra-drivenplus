import axios from "axios";
import { useState } from "react";
import styled from "styled-components"; 

export default function PlanOptions() { 
    return( 
        <> 
        <Titulo>Escolha seu Plano</Titulo> 

        <Planos>
            <Plano>
                <img src="images/Group 1.png"/>  
                <h2>R$39,99</h2>  
            </Plano>  
            <Plano>
                <img src="images/Group 1.png"/>  
                <h2>R$39,99</h2>  
            </Plano>  
            <Plano>
                <img src="images/Group 1.png"/>  
                <h2>R$39,99</h2>  
            </Plano> 
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
const Plano = styled.div`
    width: 290px; 
    height: 180px; 
    border: 3px solid rgba(126, 126, 126, 1); 
    border-radius: 12px; 
    padding: 16px;42px;  
    color: rgba(255, 255, 255, 1); 
    display: flex;  
    align-items: center; 
    margin-bottom: 10px;

    &:hover {
        cursor: pointer; 
    } 

    img{ 
        margin-right: 21px; 
    } 

    h2{ 
        font-size: 24px; 
        font-weight: bold; 
    }
`