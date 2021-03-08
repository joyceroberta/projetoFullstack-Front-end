import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderDiv, HeaderH1, HeaderLogo, HeaderP } from "./styled";
import baphometinho from "../img/baphometinho.png";
import {goToFeed} from "../routers/coordinator"


function Header(props){

  const history = useHistory()

return (
  <HeaderDiv>

    <HeaderLogo src={baphometinho} alt="Photomet Logo" onClick={()=> goToFeed(history)}/>
    <HeaderH1>Photomet</HeaderH1>
    <HeaderP>O melhor lugar para guardar as suas fotos!</HeaderP>

    
  </HeaderDiv>
);
}

export default Header;