import { useState } from 'react'
import { FcAutomotive } from "react-icons/fc";
import './App.css'
import Lista from './Components/lista';



function App() {

  return (
    <>
    <div>
        <h1> Carros <FcAutomotive /> </h1>
          <Lista />
          
         
    </div>
    </>
  )
}

export default App
