import React from "react";
import { useHistory } from "react-router-dom";
import { DivHeader, HeaderH1, HeaderLogo, HeaderP } from "./styled";
import baphometinho from "../../img/baphometinho.png"
import {goToFeed} from "../../routers/coordinator"


function Header(props){

  const history = useHistory()

return (
  <div>
    <DivHeader>
      <HeaderLogo
        src={baphometinho}
        alt="Photomet Logo"
        onClick={() => goToFeed(history)}
      />
      <HeaderH1>Photomet</HeaderH1>
    </DivHeader>
  </div>
);
}

export default Header;