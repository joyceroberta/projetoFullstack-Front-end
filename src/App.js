import React from 'react'
import Header from './components/header/Header';
import { Background } from './components/header/styled';
import Router from "./routers/Router";
import { DivContainer } from './screens/loginPage/styled';




function App() {
  return (
    <DivContainer>
      <Header />
      <Router />
    </DivContainer>
  );
}

export default App;
