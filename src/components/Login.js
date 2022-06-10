import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {  
    const [email, setEmail] = useState("");  
    const [senha, setSenha] = useState("");  

    

    return( 
        <>
        <Titulo>
            <img src="images/Driven_white 1.svg" />
        </Titulo> 

        <Input>
            <input type="email" placeholder= "E-mail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)} required/> 
            <button>ENTRAR</button>
        </Input>  

        <Link to="sign-up"><Mensagem>Não possuí uma conta? Cadastre-se</Mensagem></Link>
        </>
    )
} 

const Titulo = styled.div`
    display: flex; 
    justify-content: center; 
    margin-top: 153px; 
    margin-bottom: 101px;
` 
const Input = styled.div` 
    width: 100%; 
    height: 100%;
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