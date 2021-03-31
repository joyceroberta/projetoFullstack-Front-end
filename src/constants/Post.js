import axios from "axios"
import { goToFeed } from "../routers/coordinator"
import { baseUrlPost } from "./constants"

export const createPost = (body, history) =>{
    const token = localStorage.getItem("token")

    axios
        .post(`${baseUrlPost}/create`, body, {
            headers: {
                Authorization: token,
            }
        })
        .then((response)=>{
            alert ("Post Criado")
            console.log(response)
            goToFeed(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
}