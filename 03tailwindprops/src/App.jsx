import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
 const myArray=[1,3,4,5,6,7,]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4'>Tailwind test</h1>
       <Card username='Rohit' btnText="Click me"/>
       <Card username='Sumit'/>
    </>
  )
}

export default App
