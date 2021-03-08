import React from 'react'
import Header from './components/Header';
import { Background } from './styled'
import Router from "./routers/Router";




function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
