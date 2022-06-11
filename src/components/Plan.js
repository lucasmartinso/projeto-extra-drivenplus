import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Plan({image, price, id}) { 
    const [clicked, setClicked] = useState(false);   

    const navigate = useNavigate(); 

    function escolherPlano(id) { 
        setClicked(!clicked); 
        navigate(`/subscriptions/${id}`);
    }

    console.log(clicked);
    return( 
        <Plano onClick={() => escolherPlano(id)} clicked={clicked}>
            <img src={image} alt={id}/>  
            <h2>R${price}</h2>  
        </Plano>  
    )
} 

const Plano = styled.div`
    width: 290px; 
    height: 180px; 
    border: 3px solid ${props => props.clicked ? "white" : "rgba(126, 126, 126, 1)"}; 
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

