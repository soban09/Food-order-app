import React, {useContext} from 'react'

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import BillModal from './components/BillModal';
import AuthContext from './components/context/auth-context';

const App = () => {
  const ctx = useContext(AuthContext)
  
  return (
    <>
      {ctx.cartClick && <BillModal/>}
      <Header/>
      <Home />
      <Menu/>
    </>
  )
}

export default App