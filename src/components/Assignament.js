import { useState } from "react";
import styled from "styled-components"; 
import { useParams } from "react-router-dom";
import axios from "axios"; 
import { useEffect } from "react";

export default function Assignament({userData}) {   
    const [dados, setDados] = useState([]);  
    const {idPlano} = useParams();

    useEffect(() => { 
        const config = { 
            headers: {Authorization: `Bearer ${userData}`}
        };  

        const promise= axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`,config); 

        promise.then(response => { 
            console.log(response.data);
        }); 

        promise.catch(err => { 
            alert("Deu ruim");
        })
    }, []);
    return(
        <Header><ion-icon name="arrow-back-outline"></ion-icon></Header> 

    )
} 

const Header= styled.div`
    position: fixed; 
    top: 24px; 
    left: 22px; 

    ion-icon{
        height: 28px; 
        width: 28px; 
        color: white;  
        font-weight: bold;

        &:hover { 
            cursor: pointer;
        }
    }
`