import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";  
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { ThreeDots } from  'react-loader-spinner';
 
export default function Cadastro() {  
    const [name, setName] = useState("");  
    const [cpf, setCpf] = useState("");  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");    
    const [clicked, setClicked] = useState(false); 

    const navigate = useNavigate();
 
    function sendInfo(event) { 
        event.preventDefault();   
        setClicked(true); 

        const dados = {email, name, cpf, password}; 
        console.log(dados);
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",dados); 

        promise.then(response => { 
            console.log(response.data); 
            navigate("/");
        }); 

        promise.catch(err => { 
            console.log(err.response.status);
            alert("Usuário Inválido ou já existente"); 
            window.location.reload(); 
        });

    }

    return ( 
        <> 
        <form onSubmit={sendInfo}>
        <Input>
            <input type="text" placeholder= "Nome" value={name} onChange={(event) => setName(event.target.value)}required/>
            <input type="number" placeholder="CPF" value={cpf} onChange={(event) => setCpf(event.target.value)}required/>  
            <input type="email" placeholder= "E-mail" value={email} onChange={(event) => setEmail(event.target.value)}required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/>  
            {clicked ? ( 
                <button><ThreeDots color="white" height={80} width={80} /></button>
            ) : (
                <button>CADASTRAR</button> 
            )}
        </Input>  
        </form>

        <Link to="/"><Mensagem>Já possuí uma conta? Entre</Mensagem></Link>
        </>
    )
} 


const Input = styled.div` 
    width: 100%; 
    height: 100%; 
    margin-top: 147px; 
    margin-bottom: 24px; 
    display: flex; 
    justify-content: center; 
    align-items: center;  
    flex-direction: column; 

    input {  
        width: 299px; 
        height: 52px;
        border-radius: 5px; 
        border: none; 
        padding-left: 14px;  
        font-size: 14px; 
        color: rgba(126, 126, 126, 1); 
        background-color: rgba(255, 255, 255, 1); 
        font-size: 14px; 
        margin-bottom: 16px;
    } 

    button {  
        width: 299px; 
        height: 52px;
        border-radius: 5px; 
        border: none; 
        padding-left: 14px;  
        font-size: 14px; 
        color: rgba(255, 255, 255, 1); 
        background-color: rgba(255, 71, 145, 1);
        font-size: 14px; 
        margin-bottom: 16px; 
        font-weight: bold;  
        display: flex; 
        justify-content: center; 
        align-items: center; 

        &:hover { 
            cursor: pointer;
        }
    }
` 
const Mensagem = styled.div` 
    width: 100%; 
    height: 100%;
    font-size: 14px; 
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
    padding-bottom: 90px; 
    display: flex; 
    justify-content: center;

    &:hover { 
        cursor: pointer;
    }
`