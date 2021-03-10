import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderDiv, HeaderH1, HeaderLogo, HeaderP } from "./styled";
import baphometinho from "../../img/baphometinho.png"
import {goToFeed} from "../../routers/coordinator"


function Header(props){

  const history = useHistory()

return (
  <HeaderDiv>
    <div>
      <HeaderLogo
        src={baphometinho}
        alt="Photomet Logo"
        onClick={() => goToFeed(history)}
      />
    </div>

    <div>
      <HeaderH1>Photomet</HeaderH1>
      <HeaderP>O melhor lugar para guardar as suas fotos!</HeaderP>
    </div>
  </HeaderDiv>
);
}

export default Header;