import React from 'react'
import Header from './components/header/Header';
import { createGlobalStyle } from "styled-components"
import Router from "./routers/Router";
import { DivContainer } from './screens/loginPage/styled';


const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: #ff69b4;
  font-family: 'Akaya Telivigala', cursive;
}

`; 


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router />
    </div>
  );
}

export default App;
