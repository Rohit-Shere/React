import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(13)

//  let counter = 12

 const addvalue=()=>{
 counter=counter+1
 setCounter(counter)
 }

  return (
    <>
      <h2>React app</h2>
      <h3>Counter value:{counter}</h3>
      <button onClick={addvalue}>Add Value{counter}</button>
      
      <br />
      <button>remove Value</button>
    </>
  )
}

export default App
