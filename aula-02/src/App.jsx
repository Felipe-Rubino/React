import './App.css'
import { useState } from 'react'

function App() {
  
  // const nome = "Felipe"
  // let idade = 19
  const [count, setCount] = useState(0)

  
  let contador = 0 
  function incrementar(){
    console.log("Contador ", contador)
   // contador += 1
   //count = count + 1
   setCount(count + 1 )
    console.log("contador incrementado ", contador)
  }
  return (
    <>
     {/* <h1>Olá, {nome} </h1>
     <h2>Você tem {idade} anos</h2> */}
     <h1> Contador de cliques :<span style={{fontSize: 100}}>{count}</span> </h1>
     <button onClick={incrementar} on> Clique aqui </button>
    </>
  )
}

export default App
