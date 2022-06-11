import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner';
 

export default function Login({setUserData}) {  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [clicked, setClicked] = useState(false); 

    const navigate = useNavigate();

    function sendInfo(event) { 
        event.preventDefault();   
        setClicked(true); 

        const info = {email,password}; 
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",info); 

        promise.then(response => { 
            console.log(response.data.token); 
            setUserData(response.data.token);
            const config = {
                headers: {Authorization: `Bearer ${response.data.token}`}
            };  

            const promiss = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",config); 
            
            promiss.then(response => { 
                navigate("/subscriptions"); 
            })
        }); 

        promise.catch(err => { 
            console.log(err.response.status); 
            alert("USUÁRIO INVÁLIDO!\n\nDIGITE NOVAMENTE EMAIL E SENHA"); 
            window.location.reload(); 
        });
    }

    return( 
        <>
        <Titulo>
            <img src="images/Driven_white 1.svg" />
        </Titulo> 

        <form onSubmit={sendInfo}>
        <Input>
            <input type="email" placeholder= "E-mail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/> 
            {clicked ? ( 
                <button><ThreeDots color="white" height={80} width={80} /></button>
            ) : (
                <button>ENTRAR</button> 
            )}
        </Input>  
        </form> 

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