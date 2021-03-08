import axios from "axios";
import { goToFeed } from "../routers/coordinator";
import {baseUrlUser} from "./constants"

export const signUp = (body, history) =>{
    axios
        .post(`${baseUrlUser}/signup`, body)
        .then((response) =>{
            localStorage.setItem("token", response.data.token);
            goToFeed(history);
            alert("Usuário Cadastrado com Sucesso!")
        })
        .catch((error)=>{
            alert("Deu ruim rapá!")
            console.log(error.message)
        })
};

export const login = (body, history) =>{
    axios
        .post(`${baseUrlUser}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            goToFeed(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
}

